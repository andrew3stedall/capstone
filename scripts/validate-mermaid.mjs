#!/usr/bin/env node

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function extractMermaid(file) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let start = -1;
  let buffer = [];

  lines.forEach((line, index) => {
    if (start < 0 && line.trim() === '```mermaid') {
      start = index + 2;
      buffer = [];
      return;
    }
    if (start >= 0 && line.trim() === '```') {
      blocks.push({ file, line: start, code: buffer.join('\n') });
      start = -1;
      buffer = [];
      return;
    }
    if (start >= 0) buffer.push(line);
  });

  return blocks;
}

const blocks = walk('docs')
  .filter((file) => file.endsWith('.md'))
  .flatMap(extractMermaid);

if (blocks.length === 0) {
  console.log('No Mermaid blocks found.');
  process.exit(0);
}

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'capstone-mermaid-'));
const puppeteerConfig = path.join(tempDir, 'puppeteer.json');
fs.writeFileSync(
  puppeteerConfig,
  JSON.stringify({ args: ['--no-sandbox', '--disable-setuid-sandbox'] }),
  'utf8',
);

const failures = [];

for (const [index, block] of blocks.entries()) {
  const input = path.join(tempDir, `diagram-${index + 1}.mmd`);
  const output = path.join(tempDir, `diagram-${index + 1}.svg`);
  fs.writeFileSync(input, `${block.code}\n`, 'utf8');

  const result = spawnSync(
    'npx',
    [
      '--yes',
      '@mermaid-js/mermaid-cli@latest',
      '--puppeteerConfigFile',
      puppeteerConfig,
      '--input',
      input,
      '--output',
      output,
      '--quiet',
    ],
    { encoding: 'utf8', timeout: 120000 },
  );

  if (result.status !== 0 || !fs.existsSync(output)) {
    failures.push({
      ...block,
      detail: (result.stderr || result.stdout || `mmdc exited with status ${result.status}`).trim(),
    });
  }
}

fs.rmSync(tempDir, { recursive: true, force: true });

if (failures.length) {
  console.error(`Mermaid rendering failed for ${failures.length} block(s):`);
  failures.forEach((failure) => {
    console.error(`\n${failure.file}:${failure.line}`);
    console.error(failure.detail);
  });
  process.exit(1);
}

console.log(`Rendered ${blocks.length} Mermaid block(s) successfully.`);
