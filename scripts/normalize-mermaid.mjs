#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const writeMode = process.argv.includes('--write');
const roots = ['docs'];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function quoteText(text) {
  return text.trim().replaceAll('"', '&quot;');
}

function normalizeMermaidLine(line) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('%%')) return line;

  let output = line;

  // Convert labelled dotted links to GitHub-safe canonical syntax.
  // Handles both valid-but-fragile `A -. label .-> B` and invalid `A -. label .- B` forms.
  output = output.replace(
    /^(\s*)([A-Za-z_][\w-]*)\s+-\.\s+(.+?)\s+\.-+>?\s+([A-Za-z_][\w-]*)\s*$/,
    (_match, indent, source, label, target) =>
      `${indent}${source} -.->|"${quoteText(label)}"| ${target}`,
  );

  // Quote every plain square-bracket node label. Quoted labels are more portable
  // across the Mermaid versions used by GitHub, editors and local renderers.
  output = output.replace(
    /\b([A-Za-z_][\w-]*)\[([^\[\]"]+)\]/g,
    (_match, id, label) => `${id}["${quoteText(label)}"]`,
  );

  // Quote every plain decision-node label.
  output = output.replace(
    /\b([A-Za-z_][\w-]*)\{([^{}"]+)\}/g,
    (_match, id, label) => `${id}{"${quoteText(label)}"}`,
  );

  // Quote unquoted edge labels.
  output = output.replace(
    /\|([^|"\n]+)\|/g,
    (_match, label) => `|"${quoteText(label)}"|`,
  );

  return output;
}

function normalizeFile(file) {
  const original = fs.readFileSync(file, 'utf8');
  const lines = original.split(/\r?\n/);
  let inMermaid = false;

  const normalized = lines.map((line) => {
    const trimmed = line.trim();
    if (!inMermaid && trimmed === '```mermaid') {
      inMermaid = true;
      return line;
    }
    if (inMermaid && trimmed === '```') {
      inMermaid = false;
      return line;
    }
    return inMermaid ? normalizeMermaidLine(line) : line;
  }).join('\n');

  if (normalized === original) return false;
  if (writeMode) fs.writeFileSync(file, normalized, 'utf8');
  return true;
}

const markdownFiles = roots.flatMap(walk).filter((file) => file.endsWith('.md'));
const changed = markdownFiles.filter(normalizeFile);

if (changed.length === 0) {
  console.log('Mermaid syntax is already normalized.');
  process.exit(0);
}

if (writeMode) {
  console.log(`Normalized Mermaid syntax in ${changed.length} file(s):`);
  changed.forEach((file) => console.log(`- ${file}`));
  process.exit(0);
}

console.error('Mermaid syntax is not normalized in:');
changed.forEach((file) => console.error(`- ${file}`));
console.error('Run: node scripts/normalize-mermaid.mjs --write');
process.exit(1);
