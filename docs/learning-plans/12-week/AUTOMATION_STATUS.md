---
title: Twelve-Week Learning Automation Status
status: active
updated_on: 2026-07-17
---

# Twelve-Week Learning Automation Status

## Current state

- **Completed:** Days 1–84; all scheduled content-development blocks are drafted.
- **Current increment:** Quality-improvement pass 22 completed for Day 22 — Load Schedules and Maximum-Demand Concepts.
- **Quality-improvement passes:** 22 of 84 complete.
- **Next increment:** Quality-improvement pass — Day 23, Design Current, Protective-Device Rating and Conductor Capacity.
- **Working branch:** `automation/12-week-learning-plan`
- **Pull-request model:** Draft PR #7 is stacked on `automation/4-week-learning-plan` while draft PR #5 remains open and unmerged.
- **Technical-review boundary:** Automated content remains `review-required` and is never `technically-reviewed` without qualified review against current authorised sources.

## Increment log

### Quality-improvement pass 22 — Day 22

- Removed the unsupported 10–12 aggregate progression score and replaced it with criterion-level secure, developing, unsupported and `stop-required` states.
- Added confidence calibration so correct guesses and high-confidence unsupported answers are distinguished from secure knowledge.
- Added stated fact, derived fact, supported inference, assumption, contradiction and evidence-gap labels.
- Expanded the demand claim ladder to separate load presence, identity and rating, operating relationship, supported subtotal, method applicability, method application and bounded design input.
- Added the first unsupported transition as the mandatory boundary on downstream maximum-demand, cable, device, compliance and approval claims.
- Strengthened the worked scenario with conflicting compressor ratings and an unverified control interlock, retaining competing interpretations instead of selecting convenient evidence.
- Added evidence owners and explicit recheck triggers for unresolved ratings, operating relationships and demand-method applicability.
- Required changed-context transfer to alter at least two material conditions and rebuild affected rows, cases and claim reasoning.
- Added blocking conditions so invented ratings or allowances, ignored contradictions, invalid conversions and unauthorised practical actions cannot be offset by strengths elsewhere.
- Added an instructional caption for the existing accessible SVG and updated the corresponding knowledge-base note.
- Tracker state after this increment: 22 of 84 quality-improvement passes complete; next is Day 23.

## Files changed

- `docs/learning-plans/12-week/modules/day-22-load-schedules-and-maximum-demand-concepts.md`
- `docs/knowledge-base/12-Week Day 22 - Load Schedules and Maximum-Demand Concepts.md`
- `docs/learning-plans/12-week/MASTER_PLAN.md`
- `docs/learning-plans/12-week/AUTOMATION_STATUS.md`

## Review flags

- Day 22 remains `review-required`, `reference_check_required`, safety-critical and not `technically-reviewed`.
- Exact maximum-demand definitions, authorised methods, applicability conditions, demand allowances, phase treatment, conversion relationships, design dependencies and assessment requirements require current authorised sources and qualified review.
- Secure, developing, unsupported and `stop-required` are educational planning states, not official assessment grades, competency decisions or legal classifications.
- No official pass mark, demand factor, diversity allowance, exact technical value, clause sequence, standards table, copied figure, systematic clause wording, practical procedure or compliance conclusion was added.
- The module authorises no switching, isolation, opening, proving, tracing, measurement, testing, disconnection, reconnection, alteration, repair, energisation, commissioning, certification or verification.

## Validation performed

- Confirmed YAML metadata and the exact eight required section headings.
- Checked that technical and educational terms are defined and objectives remain observable and assessment-focused.
- Reviewed both Mermaid diagrams for coherent nodes, labels, decisions and edges and confirmed each is explained nearby.
- Confirmed the existing SVG reference remains relative, descriptive, instructional and accessible and now has a concise instructional caption.
- Checked direct master-plan links and reciprocal Day 21/Day 22/Day 23 module and knowledge-note navigation.
- Checked criterion-level states, blocking conditions, confidence calibration, two-condition transfer, evidence-owner fields, recheck triggers, competing interpretations, contradiction handling and first-unsupported-transition logic for internal consistency.
- Checked that connected load, operating-case subtotal and maximum demand remain distinct and that a claimed interlock is not treated as verified mutual exclusion.
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
  - [Day 12 — Rest, Retrieval and Misconception Repair](modules/day-12-rest-retrieval-and-misconception-repair.md)
  - [Day 13 — Protection-Selection Evidence Workflow Using Original Scenarios](modules/day-13-protection-selection-evidence-workflow-using-original-scenarios.md)
  - [Day 14 — Week 2 Protection Integration Checkpoint](modules/day-14-week-2-protection-integration-checkpoint.md)
  - [Day 15 — Earthing Terminology and Component Roles](modules/day-15-earthing-terminology-and-component-roles.md)
  - [Day 16 — Protective Earthing Continuity and Exposed Conductive Parts](modules/day-16-protective-earthing-continuity-and-exposed-conductive-parts.md)
  - [Day 17 — Equipotential Bonding Purpose and Boundary Reasoning](modules/day-17-equipotential-bonding-purpose-and-boundary-reasoning.md)
  - [Day 18 — MEN Arrangement and Normal-Current versus Fault-Current Paths](modules/day-18-men-arrangement-and-normal-current-versus-fault-current-paths.md)
  - [Day 19 — Rest, Retrieval and Diagram Reconstruction](modules/day-19-rest-retrieval-and-diagram-reconstruction.md)
  - [Day 20 — MEN Fault Scenarios and Protective-Device Operation Reasoning](modules/day-20-men-fault-scenarios-and-protective-device-operation-reasoning.md)
  - [Day 21 — Week 3 Earthing and Protection Integration Checkpoint](modules/day-21-week-3-earthing-and-protection-integration-checkpoint.md)
  - [Day 22 — Load Schedules and Maximum-Demand Concepts](modules/day-22-load-schedules-and-maximum-demand-concepts.md)
- **Next pass:** Day 23 — Design Current, Protective-Device Rating and Conductor Capacity.
- Persistent `review-required` and `reference_check_required` flags do not cause Days 1–22 to be selected again.

## Commit behaviour

The connected contents write path created sequential commits rather than one atomic commit in this run.

## Run rules

1. All 84 scheduled modules are complete; select the first module without a recorded quality-improvement pass.
2. Perform exactly one substantive pass per selected module and record it explicitly.
3. Do not use `review-required` or `reference_check_required` alone to repeat a completed pass.
4. After all 84 passes, perform one final program-wide completion audit.
5. State exactly one next increment.