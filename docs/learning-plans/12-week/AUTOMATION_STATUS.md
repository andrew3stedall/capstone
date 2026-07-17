---
title: Twelve-Week Learning Automation Status
status: active
updated_on: 2026-07-18
---

# Twelve-Week Learning Automation Status

## Current state

- **Completed:** Days 1–84; all scheduled content-development blocks are drafted.
- **Current increment:** Quality-improvement pass 45 completed for Day 45 — Consumer Mains, Submains and Final Subcircuits.
- **Quality-improvement passes:** 45 of 84 complete.
- **Next increment:** Quality-improvement pass — Day 46, Fixed Appliances and Local Isolation Reasoning.
- **Working branch:** `automation/12-week-learning-plan`
- **Pull-request model:** Draft PR #7 is stacked on `automation/4-week-learning-plan` while draft PR #5 remains open and unmerged.
- **Technical-review boundary:** Automated content remains `review-required` and is never `technically-reviewed` without qualified review against current authorised sources.

## Increment log

### Quality-improvement pass 45 — Day 45

- Reworked the outcome into six observable capabilities covering five explicit boundaries, source-path tracing, functional circuit classification, evidence discipline, first-unsupported-transition control and two-condition transfer.
- Added confidence calibration so fluent answers and correct guesses are not treated as secure evidence.
- Defined source, operating state, energisation path, supply boundary, main control point, distribution point, utilisation point, circuit and load boundaries, protection dependencies, provenance, competing interpretations, evidence owners, recheck triggers and bounded conclusions.
- Expanded T-R-A-C-E to include explicit boundaries, all credible sources, evidence provenance, contradictions, authorised rule-finding, dependency checks and downstream reopening.
- Added two explained Mermaid diagrams: an evidence-controlled source-to-load workflow and a claim ladder from source identity to qualified technical conclusion.
- Strengthened the fictional dossier with conflicting drawings and schedules, an unresolved inverter connection, maintenance evidence and an ambiguous main-switch label.
- Replaced the aggregate 0–2 score and unofficial 10/12 threshold with independent secure, developing, unsupported and `stop-required` criterion states.
- Added blocking conditions that cannot be offset by stronger work elsewhere.
- Required evidence owners and recheck triggers for unresolved blockers and explicit reopening of affected source, load, protection, isolation and classification claims.
- Required transfer after at least two material scenario changes, including justification for affected and unaffected conclusions.
- Added a concise instructional caption to the existing original accessible black-and-white SVG and retained reciprocal Day 44/Day 45/Day 46 navigation.
- Tracker state after this increment: 45 of 84 quality-improvement passes complete; next is Day 46.

## Files changed

- `docs/learning-plans/12-week/modules/day-45-consumer-mains-submains-and-final-subcircuits.md`
- `docs/knowledge-base/12-Week Day 45 - Consumer Mains, Submains and Final Subcircuits.md`
- `docs/learning-plans/12-week/MASTER_PLAN.md`
- `docs/learning-plans/12-week/AUTOMATION_STATUS.md`

## Review flags

- Day 45 remains `review-required`, `reference_check_required`, safety-critical and not `technically-reviewed`.
- Exact definitions, source and responsibility boundaries, demand rules, conductor requirements, protection arrangements, identification, installation methods, exceptions and official assessment requirements require current authorised sources and qualified review.
- Secure, developing, unsupported and `stop-required` are educational planning states, not official assessment grades, competency decisions, defect classifications, technical approvals or legal conclusions.
- No official clause, definition, point-of-supply rule, demand method, conductor value, device requirement, label wording, test value, pass mark, standards table, copied figure, systematic clause wording, practical procedure or compliance conclusion was added.
- The module authorises no approach, opening, isolation, testing, measurement, installation, alteration, energisation, commissioning, certification or field verification.

## Validation performed

- Confirmed YAML metadata and the exact eight required section headings.
- Checked that introduced terms are defined and objectives are observable, content-specific and assessment-focused.
- Reviewed both Mermaid diagrams for coherent nodes, labels and edges and confirmed each is explained nearby.
- Confirmed the existing SVG remains original black-and-white line art with a white background, descriptive alternative text and a concise instructional caption.
- Checked direct master-plan links and reciprocal Day 44/Day 45/Day 46 module and knowledge-note navigation.
- Checked confidence calibration, evidence-state labels, provenance, first-unsupported-transition handling, competing interpretations, evidence ownership, recheck triggers, downstream reopening, criterion-level states, blocking conditions and two-condition transfer for internal consistency.
- Checked that provisional classification, source operating state, protection dependency, bounded educational conclusion, qualified technical conclusion and official assessment remain distinct.
- Checked for duplicate complete wording, unsupported exactness, copied standards structure, official-assessment overreach, copyright risk and practical-authority overreach.

## Quality-improvement tracking

- **Completed passes:** Days 1–45, recorded individually as direct module links in `MASTER_PLAN.md`.
- **Next pass:** Day 46 — Fixed Appliances and Local Isolation Reasoning.
- Persistent `review-required` and `reference_check_required` flags do not cause Days 1–45 to be selected again.

## Commit behaviour

This increment was prepared for one atomic Git tree commit.

## Run rules

1. All 84 scheduled modules are complete; select the first module without a recorded quality-improvement pass.
2. Perform exactly one substantive pass per selected module and record it explicitly.
3. Do not use `review-required` or `reference_check_required` alone to repeat a completed pass.
4. After all 84 passes, perform one final program-wide completion audit.
5. State exactly one next increment.
