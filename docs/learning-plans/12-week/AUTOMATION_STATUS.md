---
title: Twelve-Week Learning Automation Status
status: active
updated_on: 2026-07-19
---

# Twelve-Week Learning Automation Status

## Current state

- **Completed:** Days 1–84; all scheduled content-development blocks are drafted.
- **Current increment:** Quality-improvement pass 81 completed for Day 81 — Staged Inspection, Verification and Fault-Reasoning Mock Assessment.
- **Quality-improvement passes:** 81 of 84 complete.
- **Next increment:** Quality-improvement pass — Day 82, Rest and Evidence-Led Error-Log Consolidation.
- **Working branch:** `automation/12-week-learning-plan`
- **Pull-request model:** Draft PR #7 is stacked on `automation/4-week-learning-plan` while draft PR #5 remains open and unmerged.
- **Technical-review boundary:** Automated content remains `review-required` and is never `technically-reviewed` without qualified review against current authorised sources.

## Increment log

### Quality-improvement pass 81 — Day 81

- Reworked the staged inspection, verification and fault-reasoning mock into ten observable capabilities covering boundary control, evidence separation, applicability, competing hypotheses, discriminating evidence, first-unsupported-transition control, correction-objective limits, two-change reopening, evidence ownership and independent review states.
- Defined installation, equipment, circuit, source-state, operating-state, time, evidence, authority and requested-decision boundaries.
- Expanded E-V-I-D-E-N-C-E into an evidence-controlled workflow with identity, provenance, currency, scope, applicability, evidence conditions, hypothesis predictions, contradiction handling and escalation.
- Added two explained Mermaid diagrams: the complete evidence-to-conclusion workflow and the first-unsupported-transition dependency chain.
- Strengthened the fictional workshop extract-system dossier with conflicting circuit identities, an outdated schedule, vague witness evidence, incomplete provenance, historical-record contamination, source-state ambiguity and a deliberately missing exact acceptance criterion.
- Required twelve submission artefacts, at least three materially different hypotheses and complete dependency reopening after two sequential material changes.
- Replaced the aggregate 0–2 rubric with independent `secure`, `developing`, `unsupported` and `stop-required` criterion states.
- Added non-compensatory blockers that cannot be offset by stronger timing, formatting or unrelated performance.
- Added a second original accessible black-and-white SVG with a concise instructional caption while retaining reciprocal Day 80/Day 81/Day 82 navigation.
- Tracker state after this increment: 81 of 84 quality-improvement passes complete; next is Day 82.

## Files changed

- `docs/learning-plans/12-week/modules/day-81-staged-inspection-verification-and-fault-reasoning-mock-assessment.md`
- `docs/knowledge-base/12-Week Day 81 - Staged Inspection, Verification and Fault-Reasoning Mock Assessment.md`
- `docs/assets/learning/12-week/staged-inspection-verification-and-fault-reasoning-mock-assessment/reopen-after-two-changes.svg`
- `docs/learning-plans/12-week/MASTER_PLAN.md`
- `docs/learning-plans/12-week/AUTOMATION_STATUS.md`

## Review flags

- Day 81 remains `review-required`, `reference_check_required`, safety-critical and not `technically-reviewed`.
- Exact assessment conditions, permitted materials, timing rules, inspection duties, verification methods, diagnostic procedures, test sequences, instrument requirements, values, acceptance criteria, correction permissions, re-verification requirements, role permissions and official expectations require current authorised sources and qualified review.
- `secure`, `developing`, `unsupported` and `stop-required` are educational review states, not official assessment grades, competency decisions, technical findings, approvals or legal conclusions.
- Learner-selected timings and stage durations are educational controls only unless current authorised instructions explicitly adopt them.
- No official clause, value, acceptance criterion, test sequence, instrument instruction, pass mark, standards table, copied figure, systematic clause wording, practical procedure, root-cause declaration, successful-correction claim, competency claim or compliance conclusion was added.
- The module authorises no site access, opening, switching, isolation, proving de-energised, testing, measurement, instrument use, alteration, repair, energisation, commissioning, acceptance, certification, verification or field fault finding.

## Validation performed

- Confirmed YAML metadata and the exact eight required section headings.
- Checked that introduced terms are defined and objectives are observable, content-specific and assessment-focused.
- Reviewed both Mermaid diagrams for coherent nodes, labels and edges and confirmed each is explained nearby.
- Confirmed both SVGs are original black-and-white line art with white backgrounds, descriptive alternative text and concise instructional captions.
- Checked direct master-plan links and reciprocal Day 80/Day 81/Day 82 module and knowledge-note navigation.
- Checked boundary definitions, evidence conditions, hypothesis predictions, discriminating evidence, independent criterion states, first-unsupported-transition handling, evidence ownership, recheck triggers, non-compensatory blockers and two-change propagation for internal consistency.
- Checked for duplicate complete wording, unsupported exactness, copied standards structure, official-assessment overreach, copyright risk and practical-authority overreach.

## Quality-improvement tracking

- **Completed passes:** Days 1–81, recorded individually as direct module links in `MASTER_PLAN.md`.
- **Next pass:** Day 82 — Rest and Evidence-Led Error-Log Consolidation.
- Persistent `review-required` and `reference_check_required` flags do not cause Days 1–81 to be selected again.

## Commit behaviour

This increment was written through the connected GitHub contents API. The connector creates one commit per changed file, so the requested single atomic multi-file commit could not be achieved in this run; branch content and tracker state remain coherent.

## Run rules

1. All 84 scheduled modules are complete; select the first module without a recorded quality-improvement pass.
2. Perform exactly one substantive pass per selected module and record it explicitly.
3. Do not use `review-required` or `reference_check_required` alone to repeat a completed pass.
4. After all 84 passes, perform one final program-wide completion audit.
5. State exactly one next increment.
