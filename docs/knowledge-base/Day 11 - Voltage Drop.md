---
status: review-required
jurisdiction: AU-NZ
source_status: original-summary
reviewed_on: 2026-07-15
quality_improvement_pass:
  completed: true
  completed_on: 2026-07-15
  pass_number: 1
safety_critical: true
reference_check_required: true
technical_reviewer: pending
---

# Day 11 - Voltage Drop

Day 11 develops an evidence-controlled voltage-drop workflow. The learner defines the operating case and calculation boundary, reconstructs every contributing section, grades each input, applies only an authorised method, combines section results and states a bounded conclusion without confusing calculation with technical approval.

## Learning module

- [Day 11 — Voltage Drop](../learning-plans/4-week/modules/day-11-voltage-drop.md)

## Prerequisites

- [[Day 08 - Maximum Demand]]
- [[Day 09 - Complete Cable-Selection Workflow]]
- [[Day 10 - Installation Conditions and Derating]]

## Related concepts

- [[Four-Week Capstone Learning Plan]]
- [[Wiring Rules and Design]]
- [[Control Switching and Protection]]
- [[Learning and Memory System]]
- [[AS-NZS-3000-2018-Index]]

## Core workflow

Use **V-O-L-T-A-G-E**:

1. **Verify the operating case** — establish running, starting or another defined duty and current basis.
2. **Outline the calculation boundary** — nominate exact source and load terminals.
3. **List every contributing section** — include upstream, submain and final-subcircuit contributions.
4. **Tie inputs to evidence** — record conductor, arrangement, length, temperature, power factor and source status.
5. **Apply an authorised method** — verify edition, applicability, units, length convention and rounding.
6. **Gather and combine section results** — preserve visible arithmetic and precision.
7. **Evaluate, iterate and reopen** — compare only with verified criteria and reopen affected design checks after changes.

## Evidence and claim model

Classify each material input as:

- **observed** — directly supplied by a drawing, schedule, label or scenario;
- **verified** — checked against an identified current authorised source;
- **derived** — calculated from verified or clearly stated inputs;
- **assumed** — provisional and labelled;
- **missing** — required evidence is unavailable.

Grade conclusions as:

- **described** — the path or issue is explained but evidence is incomplete;
- **supported** — the method and major inputs are identified but verification remains outstanding;
- **verified** — all material evidence has been checked by an authorised competent person.

Automated content does not assign the verified grade to safety-critical compliance conclusions.

## Practical application

Use the workshop compressor and lighting-extension scenario in the module. Build separate starting and running cases, map the complete path, classify every input, prepare a source-controlled worksheet and complete the changed-route transfer without inserting standards values.

When length, route, conductor, source or load duty changes, reopen:

- installation-condition classification;
- current-carrying capacity;
- protective-device coordination;
- fault-performance reasoning;
- termination suitability;
- equipment operating requirements;
- the cumulative voltage-drop result.

## Assessment relevance

The learner is assessed on whether they can:

- define exact calculation endpoints;
- distinguish voltage drop from supply variation and current-carrying capacity;
- separate running and starting cases;
- map all contributing sections;
- distinguish physical route length from calculation length;
- grade every material input;
- maintain unit and source traceability;
- state a described or supported conclusion without overclaiming;
- identify all checks reopened by a design change.

The module uses a six-category, 12-point rubric. Critical errors override the score, including unsupported constants, omitted upstream sections, hidden missing evidence, incorrect length convention, unverified compliance claims and recommendations beyond practical authority.

## Misconceptions to track

- Only the final subcircuit contributes.
- Protective-device rating is always the calculation current.
- One-way physical length can be used in any formula.
- A thermally adequate conductor automatically passes voltage drop.
- A design budget is an official limit.
- Starting and running are interchangeable.
- Enlarging the final conductor fixes every upstream limitation.
- Calculated low voltage proves the cause of a field symptom.

## Navigation

- Previous: [[Day 10 - Installation Conditions and Derating]]
- Next: [[Day 12 - Rest Calculation Correction and Catch-Up]]
- Learning-plan map: [[Four-Week Capstone Learning Plan]]

## References

- AS/NZS 3000:2018, current authorised copy and applicable amendments required.
- Current authorised AS/NZS 3008 series material applicable to the conductor and installation.
- Current equipment-manufacturer voltage and starting requirements.
- Current legislation, regulator guidance, network service rules, workplace procedures and RTO assessment directions.
- [Learning Design](../LEARNING_DESIGN.md)
- [Content, Standards and Copyright Policy](../CONTENT_AND_COPYRIGHT.md)

Exact limits, allocation rules, formulae, conductor data, phase and neutral treatment, temperature assumptions, power-factor methods, motor-starting criteria, rounding conventions, measurement procedures and jurisdiction-specific acceptance criteria remain `reference_check_required`. This note is not `technically-reviewed` and grants no practical authority.

<!-- sequence-navigation:start -->
### Sequence navigation

- [← Previous: Day 10 - Installation Conditions and Derating](./Day%2010%20-%20Installation%20Conditions%20and%20Derating.md)
- [Four-week learning plan](./Four-Week%20Capstone%20Learning%20Plan.md)
- [Open the full learning module](../learning-plans/4-week/modules/day-11-voltage-drop.md)
- [Next: Day 12 - Rest Calculation Correction and Catch-Up →](./Day%2012%20-%20Rest%20Calculation%20Correction%20and%20Catch-Up.md)
<!-- sequence-navigation:end -->