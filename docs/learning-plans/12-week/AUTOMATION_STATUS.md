---
title: Twelve-Week Learning Automation Status
status: active
updated_on: 2026-07-17
---

# Twelve-Week Learning Automation Status

## Current state

- **Completed:** Days 1–84; all scheduled content-development blocks are drafted.
- **Current increment:** Quality-improvement pass 37 completed for Day 37 — Main Switches, Alternate Supplies and Source Identification.
- **Quality-improvement passes:** 37 of 84 complete.
- **Next increment:** Quality-improvement pass — Day 38, Switchboard Functional Areas and Arrangement Principles.
- **Working branch:** `automation/12-week-learning-plan`
- **Pull-request model:** Draft PR #7 is stacked on `automation/4-week-learning-plan` while draft PR #5 remains open and unmerged.
- **Technical-review boundary:** Automated content remains `review-required` and is never `technically-reviewed` without qualified review against current authorised sources.

## Increment log

### Quality-improvement pass 37 — Day 37

- Reworked the outcome into six observable capabilities covering boundary definition, source/path/function distinctions, operating-state reasoning, evidence classification, first-unsupported-transition control and two-condition transfer.
- Added confidence calibration so correct guesses and fluent responses are not mistaken for secure understanding.
- Defined installation boundary, ordinary, alternate and auxiliary supplies, stored energy, energisation path, switching function, identification evidence and evidence-control terminology.
- Expanded S-O-U-R-C-E to include authority limits, operating states, complete source/path mapping, evidence classification, contradiction retention, evidence ownership, recheck triggers and bounded conclusions.
- Added an evidence-controlled Mermaid workflow and claim ladder separating source identification, path identity, operating state, device identity, switching function, controlled boundary and identification evidence.
- Strengthened the fictional workshop scenario with conflicting drawings, maintenance notes, labels and an unresolved control enclosure.
- Required competing interpretations for the generator-inlet status to remain visible until current authorised evidence resolves them.
- Replaced the aggregate 0–2 score with independent secure, developing, unsupported and `stop-required` criterion states.
- Added blocking conditions that cannot be offset by stronger performance elsewhere.
- Required transfer after at least two material changes and explicit justification for reopened and unaffected conclusions.
- Added a concise instructional caption to the existing accessible SVG and retained reciprocal Day 36/Day 37/Day 38 navigation.
- Tracker state after this increment: 37 of 84 quality-improvement passes complete; next is Day 38.

## Files changed

- `docs/learning-plans/12-week/modules/day-37-main-switches-alternate-supplies-and-source-identification.md`
- `docs/knowledge-base/12-Week Day 37 - Main Switches Alternate Supplies and Source Identification.md`
- `docs/learning-plans/12-week/MASTER_PLAN.md`
- `docs/learning-plans/12-week/AUTOMATION_STATUS.md`

## Review flags

- Day 37 remains `review-required`, `reference_check_required`, safety-critical and not `technically-reviewed`.
- Exact definitions, source-treatment requirements, switching arrangements, identification wording or placement, device capabilities, exceptions and official assessment requirements require current authorised sources and qualified review.
- Secure, developing, unsupported and `stop-required` are educational planning states, not official assessment grades, competency decisions, device classifications or legal conclusions.
- No official clause, definition, source-separation method, label wording, device rule, pass mark, technical value, standards table, copied figure, systematic clause wording, practical procedure or compliance conclusion was added.
- The module authorises no switching, isolation, opening, proving, measurement, testing, adjustment, installation, repair, energisation, commissioning, certification or field verification.

## Validation performed

- Confirmed YAML metadata and the exact eight required section headings.
- Checked that introduced technical and evidence terms are defined and objectives are observable, content-specific and assessment-focused.
- Reviewed all Mermaid diagrams for coherent nodes, labels and edges and confirmed each is explained nearby.
- Confirmed the existing SVG remains original black-and-white line art with a white background, descriptive alternative text and a concise instructional caption.
- Checked direct master-plan links and reciprocal Day 36/Day 37/Day 38 module and knowledge-note navigation.
- Checked confidence calibration, evidence-state labels, first-unsupported-transition handling, competing interpretations, evidence ownership, recheck triggers, downstream reopening, criterion-level states, blocking conditions and two-condition transfer for internal consistency.
- Checked that source identification, switching-function evidence, isolation evidence, practical competence, technical approval and official assessment remain distinct.
- Checked for duplicate complete wording, unsupported exactness, copied standards structure, official-assessment overreach, copyright risk and practical-authority overreach.

## Quality-improvement tracking

- **Completed passes:** Days 1–37, recorded individually as direct module links in `MASTER_PLAN.md`.
- **Next pass:** Day 38 — Switchboard Functional Areas and Arrangement Principles.
- Persistent `review-required` and `reference_check_required` flags do not cause Days 1–37 to be selected again.

## Commit behaviour

The connected contents write path produced sequential commits rather than one atomic commit; all required writes succeeded.

## Run rules

1. All 84 scheduled modules are complete; select the first module without a recorded quality-improvement pass.
2. Perform exactly one substantive pass per selected module and record it explicitly.
3. Do not use `review-required` or `reference_check_required` alone to repeat a completed pass.
4. After all 84 passes, perform one final program-wide completion audit.
5. State exactly one next increment.