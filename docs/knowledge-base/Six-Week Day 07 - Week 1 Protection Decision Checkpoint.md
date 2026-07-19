---
title: Six-Week Day 07 — Week 1 Protection Decision Checkpoint
tags:
  - capstone
  - six-week-plan
  - protection
  - checkpoint
  - evidence-control
status: review-required
reviewed_on: 2026-07-15
safety_critical: true
reference_check_required: true
technically_reviewed: false
quality_improvement_pass: completed
quality_improvement_passed_on: 2026-07-15
---

# Six-Week Day 07 — Week 1 Protection Decision Checkpoint

## Purpose

This cumulative checkpoint integrates Week 1 safety, fault classification, overcurrent, residual-current and source-control reasoning. It tests whether the learner can separate protection questions, grade evidence and claims, identify blocking gaps and produce a bounded decision without turning a familiar device label into false certainty.

## Core model

Use **D-E-C-I-D-E**:

- **Define the scenario boundary** — record circuit, users, environment, sources, documents and learner authority.
- **Establish the condition class** — distinguish normal operation, overload, short circuit, earth fault, leakage, residual-current imbalance, open circuit and unresolved conditions.
- **Choose the protection questions** — separate overcurrent, residual-current, fault-path and work-control questions.
- **Identify applicable evidence** — grade supplied items and select current authorised requirements, manufacturer information, approved records and observations.
- **Detect gaps, contradictions and dependencies** — identify blockers and the assumptions on which conclusions rely.
- **Express, evaluate and reopen the decision** — grade the claim, state the safety boundary and revisit every dependent conclusion after a material change.

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

### Blocking gap and reopening trigger

A **blocking evidence gap** is missing information that prevents an exact conclusion. A **reopening trigger** is a changed source, load, route, device, environmental condition or record that weakens a dependency. The complete reasoning chain must be revisited after such a change.

### Bounded conclusion

A bounded conclusion states what the evidence supports, what remains unproven, what information is missing, what action is outside authority and where qualified escalation is required.

## Evidence grades

- **Observed:** directly supplied or visible in the fictional scenario.
- **Documented:** stated in a current drawing, schedule, label or record.
- **Authorised:** supported by an applicable requirement, manufacturer instruction, approved design, workplace procedure or competent direction.
- **Assumed:** plausible but not evidenced.
- **Missing:** required for the conclusion but unavailable.

## Claim grades

- **Described:** states what the material shows or reports.
- **Supported:** combines applicable evidence into a bounded reasoning statement.
- **Verified:** requires all authorised evidence and qualified confirmation appropriate to the claim.
- **Unresolved:** a material gap or contradiction prevents the claim.

A learner must not promote an assumed or missing item into a verified safety-critical claim.

## Practical application

For a fictional scenario pack:

1. define the scenario boundary;
2. classify the condition and plausible alternatives;
3. state separate overcurrent, residual-current, fault-path and work-control questions;
4. select source families and explain applicability;
5. grade every material evidence item;
6. identify at least four blocking gaps and dependencies;
7. draw only current paths supported by the scenario;
8. grade each conclusion and write a bounded escalation statement;
9. change one material fact and reopen every dependent part of the decision.

## Assessment relevance

A strong response:

- classifies by mechanism rather than hardware familiarity;
- keeps protection functions separate;
- selects applicable evidence and explains source limits;
- uses evidence and claim grades consistently;
- identifies contradictions, dependencies and blocking gaps;
- refuses unsupported diagnosis or compliance claims;
- states practical authority and stop conditions;
- revises classification, evidence priorities and all dependent conclusions when the scenario changes.

The module uses a 12-point educational rubric and critical-error gates. It is not an official RTO pass mark.

## Critical errors

- treating device operation as proof of cause;
- treating one protection function as proof of another;
- presenting an assumed path, source condition or device suitability as fact;
- claiming compliance, verified safety or permission to reset without authorised evidence;
- omitting a disclosed source or material condition;
- failing to reopen dependent conclusions after a change;
- proposing practical work outside authority.

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
