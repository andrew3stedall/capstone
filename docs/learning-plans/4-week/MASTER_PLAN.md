---
title: Four-Week Capstone Learning Plan
status: active
jurisdiction: AU-NZ
source_status: original-learning-plan
reviewed_on: 2026-07-13
---

# Four-Week Capstone Learning Plan

This is the canonical sequence for the intensive four-week program. It assumes the learner is working full-time and has prior trade-school and workplace exposure.

## Study rhythm

- Monday–Thursday: 60–75 minutes
- Friday: rest or catch-up only, maximum 30 minutes
- Saturday: 2.5–3 hours
- Sunday: 60–90 minutes
- Weekly target: approximately 9–10 hours

## Module production standard

Every scheduled learning block must be written as its own eight-beat educational module, including rest, retrieval and catch-up days:

1. **Outcome and entry check** — measurable objectives, prerequisites and a short diagnostic.
2. **Why it matters** — practical risk, assessment relevance and workplace consequence.
3. **Core concepts and terminology** — precise definitions and the governing mental model.
4. **Rule-finding workflow** — how to locate and verify the applicable requirement without reproducing copyrighted standards content.
5. **Visual model or worked example** — Mermaid diagram, calculation or step-by-step example where it improves understanding.
6. **Practical application** — installation scenario, inspection task, design decision or fault analysis.
7. **Common errors and safety checkpoint** — misconceptions, unsafe shortcuts, stop conditions and correction method.
8. **Retrieval and next links** — recall questions, applied practice, vault links and the next scheduled block.

Every module must include YAML metadata compatible with `docs/LEARNING_DESIGN.md`, explicit learning objectives, prerequisite links, related notes, a source/currency notice and a review status. Exact clause numbers, limits or test values must be verified against authorised current material before being labelled technically reviewed.

### Rest, retrieval and catch-up module standard

A rest day is a planned learning block, not an omitted page. Each rest, retrieval or catch-up day must therefore have a dedicated module and corresponding knowledge-base note.

The page must:

- introduce no unnecessary new technical theory;
- explain the learning purpose of deliberate recovery and spaced retrieval;
- provide a time-boxed retrieval activity and a method for triaging missed work;
- direct the learner to correct selected items from their error log rather than reread everything;
- state the maximum catch-up period and clear stop conditions when fatigue or poor concentration is present;
- include a simple readiness check for the next technical block;
- retain previous and next module links so the daily sequence remains continuous.

Rest-day diagrams and cartoons must still have a genuine instructional purpose. A recovery, catch-up or readiness decision workflow is appropriate; decorative filler is not.

## Ordered learning blocks

### Week 1 — Navigation, protection and earthing

- [x] [Day 1 — Exam orientation and Wiring Rules navigation](./modules/day-01-exam-orientation-and-wiring-rules-navigation.md)
- [x] [Day 2 — Fundamental safety principles](./modules/day-02-fundamental-safety-principles.md)
- [x] [Day 3 — Overcurrent protection](./modules/day-03-overcurrent-protection.md)
- [x] [Day 4 — RCD protection and additional protection](./modules/day-04-rcd-protection-and-additional-protection.md)
- [x] [Day 5 — Rest, retrieval and catch-up](./modules/day-05-rest-retrieval-and-catch-up.md)
- [x] [Day 6A — Earthing terminology and component roles](./modules/day-06a-earthing-terminology-and-component-roles.md)
- [x] [Day 6B — MEN fault-current path](./modules/day-06b-men-fault-current-path.md)
- [x] [Day 6C — Earthing and MEN fault scenarios](./modules/day-06c-earthing-and-men-fault-scenarios.md)
- [x] [Day 7 — Week 1 consolidation and competency check](./modules/day-07-week-1-consolidation-and-competency-check.md)

### Week 2 — Circuit design, cables and switchboards

- [x] [Day 8 — Maximum demand](./modules/day-08-maximum-demand.md)
- [x] [Day 9 — Complete cable-selection workflow](./modules/day-09-complete-cable-selection-workflow.md)
- [x] [Day 10 — Installation conditions and derating](./modules/day-10-installation-conditions-and-derating.md)
- [x] [Day 11 — Voltage drop](./modules/day-11-voltage-drop.md)
- [x] [Day 12 — Rest, calculation correction and catch-up](./modules/day-12-rest-calculation-correction-and-catch-up.md)
- [x] [Day 13A — Switching, isolation and main switches](./modules/day-13a-switching-isolation-and-main-switches.md)
- [x] [Day 13B — Switchboard construction and arrangements](./modules/day-13b-switchboard-construction-and-arrangements.md)
- [x] [Day 13C — Switchboard defect inspection](./modules/day-13c-switchboard-defect-inspection.md)
- [x] [Day 14 — Week 2 integrated design exercise](./modules/day-14-week-2-integrated-design-exercise.md)

### Week 3 — Installation requirements and special locations

- [x] [Day 15 — Wiring systems and mechanical protection](./modules/day-15-wiring-systems-and-mechanical-protection.md)
- [x] [Day 16 — Consumer mains, submains and final subcircuits](./modules/day-16-consumer-mains-submains-and-final-subcircuits.md)
- [x] [Day 17 — Bathrooms, showers and other wet areas](./modules/day-17-bathrooms-showers-and-other-wet-areas.md)
- [x] [Day 18 — Other special installations and locations](./modules/day-18-other-special-installations-and-locations.md)
- [ ] Day 19 — Rest, retrieval and catch-up
- [ ] Day 20A — Fixed appliances and local isolation
- [ ] Day 20B — Motors and associated protection
- [ ] Day 20C — Alternative and multiple supplies awareness
- [ ] Day 21 — Week 3 simulated visual inspection

### Week 4 — Verification, fault finding and exam performance

- [ ] Day 22 — Verification principles and visual inspection
- [ ] Day 23 — Mandatory electrical tests and purposes
- [ ] Day 24 — Test sequence and result interpretation
- [ ] Day 25 — Systematic fault-finding workflow
- [ ] Day 26 — Rest and final catch-up
- [ ] Day 27 — Full mock examination
- [ ] Day 28 — Mock review and final readiness check

## Quality gates for every hourly run

A block, including a rest day, is complete only when all of the following are true:

- the eight beats are present and logically connected;
- objectives are observable and assessable;
- terminology is consistent with the existing documentation and vault;
- Mermaid is used only where it makes a process, relationship or decision clearer;
- one to three original black-and-white stick-figure SVG cartoons are added with useful alt text and a restrained witty caption;
- the master plan links to the module and its checkbox is updated;
- an Obsidian-style knowledge note is created or updated with prerequisites, related concepts, practical application, assessment relevance and references;
- all new and changed links are checked for consistency;
- the status note records what changed and identifies exactly one next block;
- unverified safety-critical details are clearly marked for technical review rather than presented as authoritative.

## Completion behaviour

Do not create duplicate modules. After all blocks are complete, continue with one quality-improvement pass per run, selecting the next note marked `draft-unverified` or `review-required`, checking structure, links, terminology and technical-review flags. Do not mark content `technically-reviewed` without evidence of a qualified review against authorised current sources.
