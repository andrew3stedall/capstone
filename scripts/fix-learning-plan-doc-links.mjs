import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const target = path.join(
  repoRoot,
  'docs/learning-plans/4-week/modules/day-12-rest-calculation-correction-and-catch-up.md',
);

const replacements = new Map([
  [
    '- [[Learning and Memory System](../../../knowledge-base/Learning%20and%20Memory%20System.md)]',
    '- [Learning design](../../../LEARNING_DESIGN.md)',
  ],
  [
    '- [[Wiring Rules and Design](../../../knowledge-base/Wiring%20Rules%20and%20Design.md)]',
    '- [AS/NZS 3000:2018 learning index](../../../knowledge-base/AS-NZS-3000-2018-Index.md)',
  ],
]);

let content = await readFile(target, 'utf8');
let updated = content;

for (const [invalidLink, validLink] of replacements) {
  updated = updated.replace(invalidLink, validLink);
}

if (updated === content) {
  console.log('No targeted learning-plan link repairs were required.');
  process.exit(0);
}

await writeFile(target, updated, 'utf8');
console.log('Repaired the known invalid Day 12 learning links.');
