---
title: Twelve-Week Learning Automation Status
status: active
updated_on: 2026-07-14
---

# Twelve-Week Learning Automation Status

## Current state

- **Completed:** Twelve-week program architecture and ordered 84-block master sequence.
- **Current block:** None.
- **Next block:** Day 1 — Program orientation, baseline diagnostic and authorised-source map.
- **Working branch:** `automation/12-week-learning-plan`
- **Pull-request model:** Stacked on `automation/4-week-learning-plan` because draft PR #5 remains open and unmerged.
- **Module coverage rule:** Every scheduled block, including rest, retrieval and catch-up days, requires a dedicated eight-beat module and corresponding Obsidian note.
- **Quality-pass rule:** After all modules are drafted, each receives exactly one substantive quality-improvement pass before the final program-wide audit.
- **Technical-review boundary:** Automated content remains `draft-unverified` or `review-required` until reviewed by a suitably qualified person against current authorised sources.

## Run log

| Run | Increment | Result | Next action |
|---|---|---|---|
| 1 — 2026-07-14 | Twelve-week program architecture | Created the slower, deeper 84-block sequence with weekly retrieval, recovery, cumulative integration, worked-example fading, staged mock assessment and explicit completion rules. | Create Day 1 module and knowledge-base note. |

## Files added in run 1

- `docs/learning-plans/12-week/MASTER_PLAN.md`
- `docs/learning-plans/12-week/AUTOMATION_STATUS.md`

## Design decisions

- The twelve-week pathway is not a stretched copy of the four-week plan. It uses 84 daily blocks, slower prerequisite development and more frequent retrieval and remediation.
- Friday blocks are deliberate recovery or catch-up periods capped at 30 minutes.
- Saturday blocks emphasise application and integration; Sunday blocks emphasise consolidation, readiness and remediation.
- Worked examples fade progressively from complete modelling to independent performance.
- Later weeks interleave design, protection, earthing, verification and fault diagnosis rather than teaching each domain only once.
- Mock assessment is staged before the final integrated mock so errors can be diagnosed by capability rather than only by total score.

## Review flags

- The master sequence is an original educational design and does not reproduce standards tables, figures, clause wording or official assessment content.
- Exact clause numbers, technical values, test methods, official assessment requirements, jurisdiction-specific claims and safety-critical procedures remain `reference_check_required` when introduced in future modules.
- The sequence does not authorise practical electrical activity, live work, isolation, testing, energisation, repair, alteration or certification.
- The plan is not `technically-reviewed`.

## Run rules

1. Complete exactly one coherent increment per run.
2. Select the first unchecked module without duplication.
3. Retain the exact eight-beat structure for every module, including recovery blocks.
4. Update the master plan checkbox to a direct module link only after the dedicated module is complete.
5. Create or update the corresponding knowledge-base note and reciprocal navigation in the same module increment.
6. Track quality-improvement passes explicitly after module production is complete.
7. Persistent review flags do not cause repeated quality passes.
8. State exactly one next increment.
