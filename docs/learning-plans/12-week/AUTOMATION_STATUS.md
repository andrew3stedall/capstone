---
title: Twelve-Week Learning Automation Status
status: active
updated_on: 2026-07-19
---

# Twelve-Week Learning Automation Status

## Current state

- **Completed:** Days 1–84; all scheduled content-development blocks are drafted.
- **Current increment:** Quality-improvement pass 74 completed for Day 74 — Fault Diagnosis, Correction Reasoning and Re-Verification Planning.
- **Quality-improvement passes:** 74 of 84 complete.
- **Next increment:** Quality-improvement pass — Day 75, Rest, Retrieval and Weak-Domain Triage.
- **Working branch:** `automation/12-week-learning-plan`
- **Pull-request model:** Draft PR #7 is stacked on `automation/4-week-learning-plan` while draft PR #5 remains open and unmerged.
- **Technical-review boundary:** Automated content remains `review-required` and is never `technically-reviewed` without qualified review against current authorised sources.

## Increment log

### Quality-improvement pass 74 — Day 74

- Reworked the outcome into ten observable capabilities covering nine diagnostic boundaries, six evidence states, competing hypotheses, falsifiable predictions, first unsupported transitions, correction objectives, evidence ownership, confidence calibration, two-change propagation and independent readiness decisions.
- Defined installation, equipment, circuit, source, operating-state, time, evidence, change and authority boundaries.
- Expanded R-E-C-O-V-E-R-Y into an evidence-controlled diagnostic and recovery workflow with literal evidence preservation, provenance, applicability, discriminating evidence, evidence owners and recheck triggers.
- Added two explained Mermaid diagrams: the diagnostic-and-recovery decision flow and a dependency model showing evidence reopening across two sequential material changes.
- Strengthened the fictional extract-fan dossier with conflicting equipment and circuit identities, historical result evidence, incomplete source-state coverage, vague witness evidence, an unsupported correction assertion, a later control-module replacement and an undefined symptom-free period.
- Required at least three materially distinct hypotheses, event-specific reasoning, first-unsupported-transition control and complete dependency reopening after two sequential material changes.
- Replaced the aggregate 0–2 rubric and unofficial 10/12 threshold with independent `secure`, `developing`, `unsupported` and `stop-required` criterion states.
- Added non-compensatory blockers that cannot be offset by stronger performance elsewhere.
- Added a second original accessible black-and-white SVG and concise instructional captions, while retaining reciprocal Day 73/Day 74/Day 75 navigation.
- Tracker state after this increment: 74 of 84 quality-improvement passes complete; next is Day 75.

## Files changed

- `docs/learning-plans/12-week/modules/day-74-fault-diagnosis-correction-reasoning-and-re-verification-planning.md`
- `docs/knowledge-base/12-Week Day 74 - Fault Diagnosis, Correction Reasoning and Re-Verification Planning.md`
- `docs/assets/learning/12-week/fault-diagnosis-correction-reasoning-and-re-verification-planning/reopen-after-change.svg`
- `docs/learning-plans/12-week/MASTER_PLAN.md`
- `docs/learning-plans/12-week/AUTOMATION_STATUS.md`

## Review flags

- Day 74 remains `review-required`, `reference_check_required`, safety-critical and not `technically-reviewed`.
- Exact diagnostic, correction, verification and acceptance duties, methods, sequences, instrument requirements, values, criteria, role permissions and official assessment expectations require current authorised sources and qualified review.
- `secure`, `developing`, `unsupported` and `stop-required` are educational planning states, not official assessment grades, competency decisions, diagnostic findings, verification outcomes, technical approvals or legal conclusions.
- No official clause, value, acceptance criterion, test sequence, instrument instruction, pass mark, standards table, copied figure, systematic clause wording, practical procedure, root-cause declaration, successful-correction claim or compliance conclusion was added.
- The module authorises no site access, opening, switching, isolation, proving de-energised, testing, measurement, instrument use, alteration, repair, energisation, commissioning, acceptance, certification, verification or field fault finding.

## Validation performed

- Confirmed YAML metadata and the exact eight required section headings.
- Checked that introduced terms are defined and objectives are observable, content-specific and assessment-focused.
- Reviewed both Mermaid diagrams for coherent nodes, labels and edges and confirmed each is explained nearby.
- Confirmed both SVGs are original black-and-white line art with white backgrounds, descriptive alternative text and concise instructional captions.
- Checked direct master-plan links and reciprocal Day 73/Day 74/Day 75 module and knowledge-note navigation.
- Checked all nine boundaries, six evidence states, literal evidence preservation, falsifiable predictions, discriminating evidence, first-unsupported-transition handling, provenance, applicability, evidence ownership, recheck triggers, confidence calibration, criterion-level states, non-compensatory blockers and two-change propagation for internal consistency.
- Checked that symptoms, observations, hypotheses, predictions, cause claims, correction objectives, correction claims, verified outcomes, assumptions, contradictions, confidence and evidence quality remain distinct.
- Checked for duplicate complete wording, unsupported exactness, copied standards structure, official-assessment overreach, copyright risk and practical-authority overreach.

## Quality-improvement tracking

- **Completed passes:** Days 1–74, recorded individually as direct module links in `MASTER_PLAN.md`.
- **Next pass:** Day 75 — Rest, Retrieval and Weak-Domain Triage.
- Persistent `review-required` and `reference_check_required` flags do not cause Days 1–74 to be selected again.

## Commit behaviour

This increment was prepared for one atomic Git tree commit.

## Run rules

1. All 84 scheduled modules are complete; select the first module without a recorded quality-improvement pass.
2. Perform exactly one substantive pass per selected module and record it explicitly.
3. Do not use `review-required` or `reference_check_required` alone to repeat a completed pass.
4. After all 84 passes, perform one final program-wide completion audit.
5. State exactly one next increment.
