#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const roots = ['docs'];
const errors = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function report(file, line, message) {
  errors.push(`${file}:${line}: ${message}`);
}

function validateMarkdown(file) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);

  if (lines[0] === '---' && !lines.slice(1).includes('---')) {
    report(file, 1, 'front matter is not closed');
  }

  let fence = null;
  lines.forEach((line, index) => {
    const match = line.match(/^\s*(```+|~~~+)\s*([^\s]*)/);
    if (match) {
      const marker = match[1][0];
      if (!fence) fence = marker;
      else if (fence === marker && line.trim().startsWith(marker.repeat(3))) fence = null;
      return;
    }

    if (fence) return;

    const linkPattern = /(!?)\[([^\]]*)\]\(([^)]+)\)/g;
    for (const match of line.matchAll(linkPattern)) {
      const isImage = match[1] === '!';
      const label = match[2];
      let target = match[3].trim();

      if (isImage && !label.trim()) report(file, index + 1, 'image is missing useful alt text');
      if (/^(https?:|mailto:|data:|#)/i.test(target)) continue;

      if (target.startsWith('<') && target.endsWith('>')) target = target.slice(1, -1);
      target = target.replace(/\s+["'][^"']*["']$/, '');
      target = target.split('#')[0].split('?')[0];
      if (!target) continue;

      try {
        target = decodeURIComponent(target);
      } catch {
        report(file, index + 1, `link target is not valid URI text: ${target}`);
        continue;
      }

      const resolved = path.resolve(path.dirname(file), target);
      if (!fs.existsSync(resolved)) report(file, index + 1, `broken relative link: ${target}`);
    }
  });

  if (fence) report(file, lines.length, 'fenced code block is not closed');
}

function validateSvg(file) {
  const text = fs.readFileSync(file, 'utf8');
  if (!/<svg\b/i.test(text) || !/<\/svg>\s*$/i.test(text)) report(file, 1, 'invalid or incomplete SVG wrapper');
  if (!/<title\b/i.test(text)) report(file, 1, 'SVG is missing a title');
  if (!/<desc\b/i.test(text)) report(file, 1, 'SVG is missing a description');
  if (!/aria-labelledby=/i.test(text)) report(file, 1, 'SVG is missing aria-labelledby');
}

const files = roots.flatMap(walk);
files.filter((file) => file.endsWith('.md')).forEach(validateMarkdown);
files.filter((file) => file.endsWith('.svg')).forEach(validateSvg);

if (errors.length) {
  console.error(`Documentation rendering audit failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Documentation rendering audit passed.');
