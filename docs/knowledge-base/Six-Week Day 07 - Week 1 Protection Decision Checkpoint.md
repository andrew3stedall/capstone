---
title: Six-Week Day 07 — Week 1 Protection Decision Checkpoint
tags:
  - capstone
  - six-week-plan
  - protection
  - checkpoint
  - evidence-control
status: review-required
reviewed_on: 2026-07-14
safety_critical: true
reference_check_required: true
technically_reviewed: false
---

# Six-Week Day 07 — Week 1 Protection Decision Checkpoint

## Purpose

This cumulative checkpoint integrates Week 1 safety, fault classification, overcurrent, residual-current and source-control reasoning. It tests whether the learner can separate protection questions, identify blocking evidence gaps and produce a bounded decision without turning a familiar device label into false certainty.

## Core model

Use **D-E-C-I-D-E**:

- **Define the scenario boundary** — record circuit, users, environment, sources, documents and learner authority.
- **Establish the condition class** — distinguish normal operation, overload, short circuit, earth fault, leakage, residual-current imbalance, open circuit and unresolved conditions.
- **Choose the protection questions** — separate overcurrent, residual-current, fault-path and work-control questions.
- **Identify applicable evidence** — select current authorised requirements, manufacturer information, approved records and supplied observations.
- **Detect gaps and contradictions** — grade claims as facts, authorised evidence or assumptions and identify blockers.
- **Express and evaluate the bounded decision** — state supported facts, uncertainty, stop conditions, escalation and the effect of a changed scenario fact.

The central rule is:

> A defensible decision is the result of classification, applicable evidence and safety control; it is not the first familiar answer suggested by a label.

## Prerequisites

- [[Six-Week Day 01 - Program Orientation Assessment Map and Source Hierarchy]]
- [[Six-Week Day 02 - Hazard Risk Exposure and Critical Controls]]
- [[Six-Week Day 03 - Fundamental Protection Concepts and Fault Types]]
- [[Six-Week Day 04 - Overload and Short-Circuit Protection Reasoning]]
- [[Six-Week Day 05 - Rest Retrieval and Source-Navigation Correction]]
- [[Six-Week Day 06 - RCD Purpose Limits and Coordination with Other Protection]]
- [[Safety and Electrical Risk]]
- [[Control Switching and Protection]]

## Related concepts

- [[Electrical Fundamentals]]
- [[Earthing Bonding and MEN]]
- [[Conductors and Wiring Systems]]
- [[Inspection Testing and Verification]]
- [[Fault Finding and Commissioning]]
- [[Day 07 - Week 1 Consolidation and Competency Check]]
- [[Six-Week Day 08 - Earthing Terminology and Component Identification]]

## Key distinctions

### Condition classification and device selection

Classify the mechanism and current path before considering a protective device. A device name does not establish the condition, suitability, installation quality or operating cause.

### Protection-question separation

Keep four questions distinct:

1. **Overcurrent:** is excessive current the issue and is the relevant equipment protected under the applicable conditions?
2. **Residual current:** is current returning outside the monitored live-conductor group?
3. **Fault path:** are earthing, bonding and disconnection arrangements present and effective as required?
4. **Work control:** what practical action is authorised and what must stop or escalate?

### Blocking evidence gap

A blocking gap is missing information that prevents an exact conclusion. Typical blockers include unknown source conditions, uncertain conductor grouping, incomplete device markings, absent manufacturer data, unverified current paths and missing authority.

### Bounded conclusion

A bounded conclusion states what the evidence supports, what remains unproven, what information is missing, what action is outside authority and where qualified escalation is required.

## Evidence grades

- **Grade A — stated fact or supplied observation:** scenario detail, marking, approved drawing detail or recorded result.
- **Grade B — applicable authorised evidence:** current requirement, manufacturer instruction, approved design, workplace procedure or competent direction.
- **Grade C — assumption or hypothesis:** inferred cause, guessed path, presumed suitability or unverified exception.

Grade C can guide a question but cannot support an exact safety-critical conclusion.

## Practical application

For a fictional scenario pack:

1. define the scenario boundary;
2. classify the condition and plausible alternatives;
3. state separate overcurrent, residual-current, fault-path and work-control questions;
4. select source families and explain applicability;
5. grade every material claim A, B or C;
6. identify at least four blocking gaps;
7. draw only the current paths supported by the scenario;
8. write a bounded conclusion and escalation statement;
9. change one material fact and revise the entire decision chain.

The changed-condition task is essential. It reveals whether the learner can transfer the method rather than repeat a memorised answer.

## Assessment relevance

A strong response:

- classifies by mechanism rather than hardware familiarity;
- keeps protection functions separate;
- selects applicable evidence and explains source limits;
- identifies contradictions and blocking gaps;
- refuses unsupported diagnosis or compliance claims;
- states practical authority and stop conditions;
- revises classification, evidence priorities and conclusion when the scenario changes.

The module uses a 12-point educational rubric. It is not an official RTO pass mark.

## Common misconceptions

- Protective-device operation proves the cause.
- An RCD label answers overcurrent and earthing questions.
- A schedule proves actual conductor routing.
- A correct requirement applies without a scope check.
- Listing many possible causes is equivalent to prioritising evidence.
- “Get an electrician” is sufficient without explaining the evidence and authority boundary.
- A changed scenario requires changing only the final sentence.

## Safety and review boundary

This material authorises no opening, isolation, proving, testing, resetting, fault creation, bypassing, bridging, disconnection, replacement, alteration, energisation, measurement or commissioning.

Stop when the source, conductor routing, neutral grouping, fault-current path, device characteristics, manufacturer information, applicable requirement or practical authority is uncertain. Reports of exposed live parts, damage, moisture, burning, overheating or repeated protective-device operation require qualified guidance and current authorised procedures.

Exact clauses, values, device characteristics, test methods, official assessment criteria and jurisdiction-specific requirements remain `reference_check_required`. This note is `review-required` and not `technically-reviewed`.

## References

- [[AS-NZS-3000-2018-Index]] — navigation only; use current authorised access for technical decisions.
- Current applicable legislation, regulator guidance, manufacturer information, approved workplace procedures and RTO instructions.
- [[Learning Design]] — cumulative checkpoints, transfer, worked-example fading and error-driven remediation.
- [[Content Standards and Copyright]] — original explanation and source-use boundaries.

## Navigation

- **Module:** [Day 7 — Week 1 Protection Decision Checkpoint](../learning-plans/6-week/modules/day-07-week-1-protection-decision-checkpoint.md)
- **Program:** [Six-Week Capstone Learning Plan](../learning-plans/6-week/MASTER_PLAN.md)
- **Previous:** [[Six-Week Day 06 - RCD Purpose Limits and Coordination with Other Protection]]
- **Next:** [[Six-Week Day 08 - Earthing Terminology and Component Identification]]
