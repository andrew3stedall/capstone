---
title: Six-Week Day 10 — Earth-Fault Current Path and Disconnection Reasoning
tags:
  - capstone
  - six-week-plan
  - earth-fault
  - MEN
  - protection
status: review-required
reviewed_on: 2026-07-15
safety_critical: true
reference_check_required: true
technically_reviewed: false
quality_passes:
  - date: 2026-07-15
    type: substantive-quality-improvement
---

# Six-Week Day 10 — Earth-Fault Current Path and Disconnection Reasoning

## Purpose

This note supports the move from Day 9 normal-current reasoning to a bounded earth-fault loop and evidence-gated disconnection conclusion. It does not prove an actual installation path, electrical condition or protective outcome.

## Core model

Use **L-O-O-P-S**:

- **Locate the fault and exposed conductive part** — define the unintended connection precisely.
- **Outline the outward source path** — trace from the stated source to the fault.
- **Outline the protective return path** — trace only the supported return through protective earthing, the stated MEN relationship and source return.
- **Prove path, conditions and protection separately** — separate route, continuity, loop-condition and protective-device evidence.
- **State the bounded conclusion and stop point** — assign a claim grade, record unresolved dependencies and state what would reopen the analysis.

The central rule is:

> A complete conceptual fault path is necessary, but it does not by itself prove continuity, loop condition or protective-device operation.

## Prerequisites

- [[Six-Week Day 09 - MEN Arrangement and Normal-Current Paths]]
- [[Six-Week Day 08 - Earthing Terminology and Component Identification]]
- [[Earthing Bonding and MEN]]
- [[Control Switching and Protection]]

## Related concepts

- [[Day 06B - MEN Fault-Current Path]]
- [[Inspection Testing and Verification]]
- [[Fault Finding]]
- [[Six-Week Day 11 - Protective Earthing Continuity and Equipotential Bonding Concepts]]

## Four evidence questions

1. **Path:** Is a complete source–fault–source route supported?
2. **Continuity:** Is the required protective path established as electrically continuous?
3. **Loop condition:** Is applicable authorised evidence available for the electrical condition affecting fault-current magnitude?
4. **Device response:** Is the device identity, location and applicable operating evidence established?

A positive answer to one question does not answer the others.

## Evidence grades

- **Grade A — supplied fact:** explicitly supplied scenario, approved learning drawing or stated source record.
- **Grade B — corroborated identity or relationship:** two consistent sources support identification, but do not prove electrical condition.
- **Grade C — authorised derived evidence:** a bounded conclusion from current authorised requirements, approved design information, verified records, competent test evidence or manufacturer information.
- **Grade D — assumption:** colour, visible presence, familiar arrangement, presumed continuity, guessed impedance or remembered device behaviour.
- **Grade E — missing or conflicting evidence:** information is absent, inconsistent, stale or outside the learner's authority to establish.

Grades D and E can generate a question or stop condition. They cannot prove a safety-critical outcome.

## Claim grades

- **Claim 1 — description:** states what the scenario shows or says.
- **Claim 2 — provisional identification:** identifies a likely component, relationship or route while recording unresolved dependencies.
- **Claim 3 — supported paper reasoning:** combines applicable evidence into a bounded conceptual conclusion without claiming physical verification.
- **Claim 4 — authorised verification:** relies on competent, authorised verification under current requirements and approved procedures.

The learning module develops Claims 1–3 only.

## Key distinctions

### Normal current and earth-fault current

Normal load current follows the intended active-load-neutral loop. Earth-fault current arises from an unintended connection and uses the applicable protective return route established by the scenario and authorised evidence.

### Identity and continuity

A labelled or visible protective conductor may support an identity claim. It does not prove continuity, condition, impedance or suitability.

### Conceptual loop and verified installation

A learning diagram can support fault-path reasoning. It cannot establish exact routing, permitted MEN locations, continuity, test results, device characteristics or compliance.

### Path and outcome

A path claim can be supported while a protective outcome remains unsupported. Continuity, loop condition and applicable device evidence are separate gates.

## Dependency ledger

Track at least these dependencies:

- source arrangement;
- fault location and exposed conductive part;
- protective return route;
- continuity evidence;
- loop-condition evidence;
- protective-device identity, location and applicable characteristics.

When a dependency changes, reopen the affected path, condition or outcome claim. Preserve only facts that remain supported.

## Practical application

For a trainer-created fictional scenario:

1. mark the fault location and exposed conductive part;
2. trace source active to the fault;
3. trace the supported protective return to the source relationship;
4. stop at every unsupported segment;
5. grade route, continuity, loop-condition and device evidence A–E;
6. assign Claim 1–4 to each conclusion;
7. record dependencies and reopening triggers;
8. change one condition and reassess every affected claim;
9. write a bounded conclusion and escalation statement;
10. repeat after 24–48 hours with a differently drawn scenario.

## Assessment relevance

A strong response:

- completes only the supported source–fault–source loop;
- keeps normal current and earth-fault current distinct;
- does not treat a visible conductor as proof of continuity;
- separates all four evidence questions;
- grades evidence and claims consistently;
- reopens affected claims when source, path, continuity or device information changes;
- avoids remembered values, curves or operating-time claims;
- states uncertainty, practical authority and stop conditions.

The module uses a 12-point educational rubric with critical-error gates. It is not an official RTO pass mark.

## Common misconceptions

- Fault current disappears into earth.
- Reaching an earthing terminal completes the loop explanation.
- A protective conductor shown on a diagram is proven continuous.
- Any complete path guarantees a protective device will operate as required.
- Every earth fault is explained by the same device or source arrangement.
- A grid-connected MEN model can be copied unchanged to an alternative source.
- A previous conclusion remains valid after a dependency changes.

## Safety and review boundary

This material authorises no opening, cover removal, isolation, proving, testing, continuity measurement, loop measurement, fault creation, bridging, disconnection, reconnection, resetting, alteration, energisation, commissioning or verification.

Stop when source context, neutral/MEN relationship, conductor identity, continuity, loop condition, device evidence, authorised source currency or practical authority is uncertain. Exact requirements remain `reference_check_required`.

This note is `review-required` and not `technically-reviewed`.

## References

- [[AS-NZS-3000-2018-Index]] — navigation only; use current authorised access for technical decisions.
- Current applicable legislation, regulator guidance, network information, approved drawings, manufacturer information, workplace procedures and RTO instructions.
- [[Learning Design]] — retrieval, worked-example fading, interleaving and error-driven remediation.
- [[Content Standards and Copyright]] — original explanation and source-use boundaries.

## Navigation

- **Module:** [Day 10 — Earth-Fault Current Path and Disconnection Reasoning](../learning-plans/6-week/modules/day-10-earth-fault-current-path-and-disconnection-reasoning.md)
- **Program:** [Six-Week Capstone Learning Plan](../learning-plans/6-week/MASTER_PLAN.md)
- **Previous:** [[Six-Week Day 09 - MEN Arrangement and Normal-Current Paths]]
- **Next:** [[Six-Week Day 11 - Protective Earthing Continuity and Equipotential Bonding Concepts]]
