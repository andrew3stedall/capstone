---
title: Twelve-Week Learning Automation Status
status: active
updated_on: 2026-07-18
---

# Twelve-Week Learning Automation Status

## Current state

- **Completed:** Days 1–84; all scheduled content-development blocks are drafted.
- **Current increment:** Quality-improvement pass 51 completed for Day 51 — Bathrooms, Showers and Other Wet-Area Reasoning.
- **Quality-improvement passes:** 51 of 84 complete.
- **Next increment:** Quality-improvement pass — Day 52, Other Special Installations and Location-Specific Controls.
- **Working branch:** `automation/12-week-learning-plan`
- **Pull-request model:** Draft PR #7 is stacked on `automation/4-week-learning-plan` while draft PR #5 remains open and unmerged.
- **Technical-review boundary:** Automated content remains `review-required` and is never `technically-reviewed` without qualified review against current authorised sources.

## Increment log

### Quality-improvement pass 51 — Day 51

- Reworked the outcome into six observable capabilities covering explicit boundaries, evidence classification, original plan-and-elevation mapping, equipment/control separation, first-unsupported-transition control and two-condition transfer.
- Added confidence calibration so fluent certainty and correct guessing are not treated as secure evidence.
- Defined location, activity, water-source, exposure, equipment, evidence, authority and decision boundaries together with provenance, competing interpretations, evidence owners, recheck triggers and material changes.
- Expanded W-A-T-E-R into an evidence-controlled wet-area workflow after Z-O-N-E-S, with current-source applicability checks and downstream reopening.
- Added two explained Mermaid diagrams: the wet-area evidence workflow and a claim ladder from evidence identity to qualified technical conclusion.
- Strengthened the fictional ensuite dossier with conflicting plan and elevation revisions, an undated hose photograph, ambiguous cleaning-source evidence, incomplete screen geometry and uncertain product identity.
- Replaced the aggregate 0–2 score and unofficial 10/12 threshold with independent secure, developing, unsupported and `stop-required` states.
- Added blocking conditions that cannot be offset by stronger performance elsewhere.
- Required evidence owners and recheck triggers for unresolved blockers and explicit reopening of affected source, exposure, position, suitability, protection, switching and isolation claims.
- Required transfer after two material changes: a longer movable source and changed screen or equipment geometry, including justification for reopened and unaffected conclusions.
- Added a concise instructional caption to the existing original accessible black-and-white SVG and retained reciprocal Day 50/Day 51/Day 52 navigation.
- Tracker state after this increment: 51 of 84 quality-improvement passes complete; next is Day 52.

## Files changed

- `docs/learning-plans/12-week/modules/day-51-bathrooms-showers-and-other-wet-area-reasoning.md`
- `docs/knowledge-base/12-Week Day 51 - Bathrooms, Showers and Other Wet-Area Reasoning.md`
- `docs/learning-plans/12-week/MASTER_PLAN.md`
- `docs/learning-plans/12-week/AUTOMATION_STATUS.md`

## Review flags

- Day 51 remains `review-required`, `reference_check_required`, safety-critical and not `technically-reviewed`.
- Exact zone definitions, dimensions, equipment restrictions, protection requirements, source treatment, installation methods, manufacturer requirements and official assessment expectations require current authorised sources and qualified review.
- Secure, developing, unsupported and `stop-required` are educational planning states, not official assessment grades, competency decisions, defect classifications, technical approvals or legal conclusions.
- No official clause, dimension, value, zone diagram, equipment permission, source-treatment method, pass mark, standards table, copied figure, systematic clause wording, practical procedure or compliance conclusion was added.
- The module authorises no site classification, approach, measurement, opening, switching, isolation, proving de-energised, testing, installation, alteration, repair, energisation, commissioning, certification, design approval or field verification.

## Validation performed

- Confirmed YAML metadata and the exact eight required section headings.
- Checked that introduced terms are defined and objectives are observable, content-specific and assessment-focused.
- Reviewed both Mermaid diagrams for coherent nodes, labels and edges and confirmed each is explained nearby.
- Confirmed the existing SVG remains original black-and-white line art with a white background, descriptive alternative text and a concise instructional caption.
- Checked direct master-plan links and reciprocal Day 50/Day 51/Day 52 module and knowledge-note navigation.
- Checked confidence calibration, six evidence-state labels, provenance, first-unsupported-transition handling, competing interpretations, evidence ownership, recheck triggers, downstream reopening, criterion-level states, blocking conditions and two-condition transfer for internal consistency.
- Checked that original learner maps, official zone diagrams, bounded educational conclusions, qualified technical conclusions and official assessment remain distinct.
- Checked for duplicate complete wording, unsupported exactness, copied standards structure, official-assessment overreach, copyright risk and practical-authority overreach.

## Quality-improvement tracking

- **Completed passes:** Days 1–51, recorded individually as direct module links in `MASTER_PLAN.md`.
- **Next pass:** Day 52 — Other Special Installations and Location-Specific Controls.
- Persistent `review-required` and `reference_check_required` flags do not cause Days 1–51 to be selected again.

## Commit behaviour

This increment was prepared for one atomic Git tree commit.

## Run rules

1. All 84 scheduled modules are complete; select the first module without a recorded quality-improvement pass.
2. Perform exactly one substantive pass per selected module and record it explicitly.
3. Do not use `review-required` or `reference_check_required` alone to repeat a completed pass.
4. After all 84 passes, perform one final program-wide completion audit.
5. State exactly one next increment.
