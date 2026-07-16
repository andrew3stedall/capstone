---
title: Twelve-Week Learning Automation Status
status: active
updated_on: 2026-07-16
---

# Twelve-Week Learning Automation Status

## Current state

- **Completed:** Days 1–84; all scheduled content-development blocks are drafted.
- **Current increment:** Quality-improvement pass 11 completed for Day 11 — RCD Purpose, Limitations and Interaction with Other Protection.
- **Quality-improvement passes:** 11 of 84 complete.
- **Next increment:** Quality-improvement pass — Day 12, Rest, Retrieval and Misconception Repair.
- **Working branch:** `automation/12-week-learning-plan`
- **Pull-request model:** Draft PR #7 is stacked on `automation/4-week-learning-plan` while draft PR #5 remains open and unmerged.
- **Technical-review boundary:** Automated content remains `review-required` and is never `technically-reviewed` without qualified review against current authorised sources.

## Increment log

### Quality-improvement pass 11 — Day 11

- Removed the unsupported 10-of-12 aggregate progression threshold and replaced it with criterion-level states: secure, developing, unsupported and `stop-required`.
- Separated RCD role, suitability, coordination and verified operating claims.
- Added evidence labels for stated facts, inferences, assumptions, contradictions and evidence gaps.
- Added the first unsupported transition as the required stopping point before unsupported suitability or trip claims.
- Added competing-path retention, evidence owners and recheck triggers.
- Required changed-context transfer to alter at least two material scenario conditions and rebuild the RCD interaction record.
- Added blocking conditions for invented device operation, ignored contradictions, merged safety-critical protection functions and unauthorised practical actions.
- Updated the corresponding knowledge-base note and direct Day 12 navigation.
- Tracker state after this increment: 11 of 84 quality-improvement passes complete; next is Day 12.

## Files changed

- `docs/learning-plans/12-week/modules/day-11-rcd-purpose-limitations-and-interaction-with-other-protection.md`
- `docs/knowledge-base/12-Week Day 11 - RCD Purpose Limitations and Interaction with Other Protection.md`
- `docs/learning-plans/12-week/MASTER_PLAN.md`
- `docs/learning-plans/12-week/AUTOMATION_STATUS.md`

## Review flags

- Day 11 remains `review-required`, `reference_check_required`, safety-critical and not `technically-reviewed`.
- Exact RCD definitions, recognised protection measures, device types and characteristics, monitored-conductor arrangements, coverage, ratings, operating conditions, coordination rules, source applicability and RTO assessment conditions require current authorised sources and qualified review.
- The secure, developing, unsupported and `stop-required` labels are educational planning states, not official assessment grades, competency decisions or legal classifications.
- No official pass mark, clause sequence, residual-current value, operating time, device curve, assessment question, standards table, copied figure, systematic clause wording, practical procedure or compliance conclusion was added.
- The module authorises no access, switching, isolation, testing, measurement, opening, resetting, fault creation, replacement, disconnection, alteration, repair, energisation, commissioning, certification or verification.

## Validation performed

- Confirmed YAML metadata and the exact eight required section headings.
- Checked that added technical and educational terms are defined and objectives remain observable and assessment-focused.
- Reviewed both Mermaid diagrams for coherent nodes, decisions, labels and edges and confirmed each is explained nearby.
- Confirmed the SVG reference remains relative, descriptive, instructional and accessible, with a concise caption.
- Checked direct master-plan links and reciprocal Day 10/Day 11/Day 12 module and knowledge-note navigation.
- Checked criterion-level states, blocking conditions, confidence calibration, changed-context transfer, evidence-owner fields and first-unsupported-transition logic for internal consistency.
- Checked for duplicate complete wording, unsupported exactness, copied standards structure, official-assessment overreach, copyright risk and practical-authority overreach.

## Quality-improvement tracking

- **Completed passes:**
  - [Day 1 — Program Orientation, Baseline Diagnostic and Authorised-Source Map](modules/day-01-program-orientation-baseline-diagnostic-and-authorised-source-map.md)
  - [Day 2 — Electrical Hazards, Exposure Pathways and Consequence Reasoning](modules/day-02-electrical-hazards-exposure-pathways-and-consequence-reasoning.md)
  - [Day 3 — Roles, Authority, Supervision and Practical Stop Conditions](modules/day-03-roles-authority-supervision-and-practical-stop-conditions.md)
  - [Day 4 — Wiring Rules Structure and Efficient Topic Navigation](modules/day-04-wiring-rules-structure-and-efficient-topic-navigation.md)
  - [Day 5 — Rest, Retrieval and Source-Navigation Correction](modules/day-05-rest-retrieval-and-source-navigation-correction.md)
  - [Day 6 — Evidence Quality, Applicability and Completeness Workshop](modules/day-06-evidence-quality-applicability-and-completeness-workshop.md)
  - [Day 7 — Week 1 Consolidation and Individual Remediation Plan](modules/day-07-week-1-consolidation-and-individual-remediation-plan.md)
  - [Day 8 — Circuit Quantities, Load Reasoning and Prerequisite Calculation Check](modules/day-08-circuit-quantities-load-reasoning-and-prerequisite-calculation-check.md)
  - [Day 9 — Overload, Short-Circuit and Fault-Current Distinctions](modules/day-09-overload-short-circuit-and-fault-current-distinctions.md)
  - [Day 10 — Protective-Device Roles and Protection Boundaries](modules/day-10-protective-device-roles-and-protection-boundaries.md)
  - [Day 11 — RCD Purpose, Limitations and Interaction with Other Protection](modules/day-11-rcd-purpose-limitations-and-interaction-with-other-protection.md)
- **Next pass:** Day 12 — Rest, Retrieval and Misconception Repair.
- Persistent `review-required` and `reference_check_required` flags do not cause Days 1–11 to be selected again.

## Commit behaviour

The connected contents interface created four sequential commits for the module, knowledge note and both canonical tracker updates. The requested single atomic commit was not available through this write path in this run.

## Run rules

1. All 84 scheduled modules are complete; select the first module without a recorded quality-improvement pass.
2. Perform exactly one substantive pass per selected module and record it explicitly.
3. Do not use `review-required` or `reference_check_required` alone to repeat a completed pass.
4. After all 84 passes, perform one final program-wide completion audit.
5. State exactly one next increment.
