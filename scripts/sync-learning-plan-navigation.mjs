import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const moduleDirectory = path.join(repoRoot, 'docs/learning-plans/4-week/modules');
const knowledgeDirectory = path.join(repoRoot, 'docs/knowledge-base');
const checkOnly = process.argv.includes('--check');

const startMarker = '<!-- sequence-navigation:start -->';
const endMarker = '<!-- sequence-navigation:end -->';
const generatedBlockPattern = new RegExp(
  `\\n?${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}\\n?`,
  'g',
);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function dayKey(filename) {
  const moduleMatch = filename.match(/^day-(\d+)([a-z]?)-/i);
  const noteMatch = filename.match(/^Day (\d+)([A-Z]?) - /);
  const match = moduleMatch ?? noteMatch;

  if (!match) {
    return null;
  }

  return {
    day: Number.parseInt(match[1], 10),
    suffix: (match[2] ?? '').toLowerCase(),
  };
}

function compareDayFiles(left, right) {
  const leftKey = dayKey(left);
  const rightKey = dayKey(right);

  if (leftKey.day !== rightKey.day) {
    return leftKey.day - rightKey.day;
  }

  return leftKey.suffix.localeCompare(rightKey.suffix);
}

function extractTitle(content, fallback) {
  const heading = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return heading || fallback.replace(/\.md$/i, '');
}

function markdownTarget(filename) {
  return encodeURI(filename).replace(/#/g, '%23');
}

function navigationBlock({ previous, next, planTarget, moduleTarget }) {
  const lines = [startMarker, '### Sequence navigation', ''];

  if (previous) {
    lines.push(`- [← Previous: ${previous.title}](${previous.target})`);
  } else {
    lines.push('- Previous: start of the current four-week sequence');
  }

  lines.push(`- [Four-week learning plan](${planTarget})`);

  if (moduleTarget) {
    lines.push(`- [Open the full learning module](${moduleTarget})`);
  }

  if (next) {
    lines.push(`- [Next: ${next.title} →](${next.target})`);
  } else {
    lines.push('- Next: no later module has been created yet');
  }

  lines.push(endMarker);
  return lines.join('\n');
}

async function orderedFiles(directory, predicate) {
  return (await readdir(directory))
    .filter(predicate)
    .filter((filename) => dayKey(filename))
    .sort(compareDayFiles);
}

async function synchroniseSet({ directory, files, kind }) {
  const records = [];

  for (const filename of files) {
    const filePath = path.join(directory, filename);
    const content = await readFile(filePath, 'utf8');
    records.push({
      filename,
      filePath,
      content,
      title: extractTitle(content, filename),
    });
  }

  const changed = [];

  for (const [index, record] of records.entries()) {
    const previousRecord = records[index - 1];
    const nextRecord = records[index + 1];
    const previous = previousRecord
      ? {
          title: previousRecord.title,
          target: `./${markdownTarget(previousRecord.filename)}`,
        }
      : null;
    const next = nextRecord
      ? {
          title: nextRecord.title,
          target: `./${markdownTarget(nextRecord.filename)}`,
        }
      : null;

    const block = navigationBlock({
      previous,
      next,
      planTarget:
        kind === 'module'
          ? '../MASTER_PLAN.md'
          : './Four-Week%20Capstone%20Learning%20Plan.md',
      moduleTarget:
        kind === 'knowledge'
          ? `../learning-plans/4-week/modules/${markdownTarget(
              files[index]
                .replace(/^Day /, 'day-')
                .replace(/ - /g, '-')
                .replace(/[—–]/g, '-')
                .replace(/[,]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase(),
            )}`
          : null,
    });

    const withoutGeneratedBlock = record.content.replace(generatedBlockPattern, '\n').trimEnd();
    const updated = `${withoutGeneratedBlock}\n\n${block}\n`;

    if (updated !== record.content) {
      changed.push(path.relative(repoRoot, record.filePath));
      if (!checkOnly) {
        await writeFile(record.filePath, updated, 'utf8');
      }
    }
  }

  return changed;
}

const moduleFiles = await orderedFiles(
  moduleDirectory,
  (filename) => /^day-.*\.md$/i.test(filename),
);
const knowledgeFiles = await orderedFiles(
  knowledgeDirectory,
  (filename) => /^Day \d+[A-Z]? - .*\.md$/.test(filename),
);

const changed = [
  ...(await synchroniseSet({
    directory: moduleDirectory,
    files: moduleFiles,
    kind: 'module',
  })),
  ...(await synchroniseSet({
    directory: knowledgeDirectory,
    files: knowledgeFiles,
    kind: 'knowledge',
  })),
];

if (changed.length === 0) {
  console.log(
    `Sequence navigation is current across ${moduleFiles.length} modules and ${knowledgeFiles.length} knowledge-base notes.`,
  );
  process.exit(0);
}

if (checkOnly) {
  console.error('Sequence navigation is stale in:');
  for (const filename of changed) {
    console.error(`- ${filename}`);
  }
  process.exit(1);
}

console.log(`Updated sequence navigation in ${changed.length} Markdown files:`);
for (const filename of changed) {
  console.log(`- ${filename}`);
}
