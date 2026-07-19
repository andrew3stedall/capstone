import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

// Keep repairs explicit so renamed or removed learning notes cannot silently
// reintroduce broken links into any learning-plan branch.
const repoRoot = process.cwd();

const repairs = [
  {
    file: 'docs/learning-plans/4-week/modules/day-12-rest-calculation-correction-and-catch-up.md',
    replacements: [
      [
        '- [[Learning and Memory System](../../../knowledge-base/Learning%20and%20Memory%20System.md)]',
        '- [Learning design](../../../LEARNING_DESIGN.md)',
      ],
      [
        '- [[Wiring Rules and Design](../../../knowledge-base/Wiring%20Rules%20and%20Design.md)]',
        '- [AS/NZS 3000:2018 learning index](../../../knowledge-base/AS-NZS-3000-2018-Index.md)',
      ],
    ],
  },
  {
    file: 'docs/learning-plans/4-week/modules/day-25-systematic-fault-finding-workflow.md',
    replacements: [
      [
        '- [Fault Finding and Commissioning](../../../knowledge-base/Fault%20Finding%20and%20Commissioning.md)',
        '- [Day 25 — Systematic Fault-Finding Workflow knowledge note](../../../knowledge-base/Day%2025%20-%20Systematic%20Fault-Finding%20Workflow.md)',
      ],
      [
        '- [Inspection Testing and Verification](../../../knowledge-base/Inspection%20Testing%20and%20Verification.md)',
        '- [Day 22 — Verification Principles and Visual Inspection knowledge note](../../../knowledge-base/Day%2022%20-%20Verification%20Principles%20and%20Visual%20Inspection.md)',
      ],
    ],
  },
  {
    file: 'docs/learning-plans/4-week/modules/day-26-rest-and-final-catch-up.md',
    replacements: [
      [
        '- [Learning and Memory System](../../../knowledge-base/Learning%20and%20Memory%20System.md)',
        '- [Learning design](../../../LEARNING_DESIGN.md)',
      ],
      [
        '- [Inspection Testing and Verification](../../../knowledge-base/Inspection%20Testing%20and%20Verification.md)',
        '- [Day 22 — Verification Principles and Visual Inspection knowledge note](../../../knowledge-base/Day%2022%20-%20Verification%20Principles%20and%20Visual%20Inspection.md)',
      ],
      [
        '- [Fault Finding and Commissioning](../../../knowledge-base/Fault%20Finding%20and%20Commissioning.md)',
        '- [Day 25 — Systematic Fault-Finding Workflow knowledge note](../../../knowledge-base/Day%2025%20-%20Systematic%20Fault-Finding%20Workflow.md)',
      ],
    ],
  },
  {
    file: 'docs/learning-plans/4-week/modules/day-27-full-mock-examination.md',
    replacements: [
      [
        '- [Capstone Assessment](../../../knowledge-base/Capstone%20Assessment.md)',
        '- [Day 27 — Full Mock Examination knowledge note](../../../knowledge-base/Day%2027%20-%20Full%20Mock%20Examination.md)',
      ],
      [
        '- [Inspection Testing and Verification](../../../knowledge-base/Inspection%20Testing%20and%20Verification.md)',
        '- [Day 22 — Verification Principles and Visual Inspection knowledge note](../../../knowledge-base/Day%2022%20-%20Verification%20Principles%20and%20Visual%20Inspection.md)',
      ],
      [
        '- [Fault Finding and Commissioning](../../../knowledge-base/Fault%20Finding%20and%20Commissioning.md)',
        '- [Day 25 — Systematic Fault-Finding Workflow knowledge note](../../../knowledge-base/Day%2025%20-%20Systematic%20Fault-Finding%20Workflow.md)',
      ],
    ],
  },
  {
    file: 'docs/learning-plans/4-week/modules/day-28-mock-review-and-final-readiness-check.md',
    replacements: [
      [
        '- [Capstone Assessment](../../../knowledge-base/Capstone%20Assessment.md)',
        '- [Day 27 — Full Mock Examination knowledge note](../../../knowledge-base/Day%2027%20-%20Full%20Mock%20Examination.md)',
      ],
      [
        '- [Learning and Memory System](../../../knowledge-base/Learning%20and%20Memory%20System.md)',
        '- [Learning design](../../../LEARNING_DESIGN.md)',
      ],
      [
        '- [Inspection Testing and Verification](../../../knowledge-base/Inspection%20Testing%20and%20Verification.md)',
        '- [Day 22 — Verification Principles and Visual Inspection knowledge note](../../../knowledge-base/Day%2022%20-%20Verification%20Principles%20and%20Visual%20Inspection.md)',
      ],
      [
        '- [Fault Finding and Commissioning](../../../knowledge-base/Fault%20Finding%20and%20Commissioning.md)',
        '- [Day 25 — Systematic Fault-Finding Workflow knowledge note](../../../knowledge-base/Day%2025%20-%20Systematic%20Fault-Finding%20Workflow.md)',
      ],
    ],
  },
];

let changedFiles = 0;

for (const repair of repairs) {
  const target = path.join(repoRoot, repair.file);
  const content = await readFile(target, 'utf8');
  let updated = content;

  for (const [invalidLink, validLink] of repair.replacements) {
    updated = updated.replaceAll(invalidLink, validLink);
  }

  if (updated !== content) {
    await writeFile(target, updated, 'utf8');
    changedFiles += 1;
    console.log(`Repaired learning links in ${repair.file}`);
  }
}

if (changedFiles === 0) {
  console.log('No targeted learning-plan link repairs were required.');
} else {
  console.log(`Repaired learning links in ${changedFiles} file(s).`);
}
