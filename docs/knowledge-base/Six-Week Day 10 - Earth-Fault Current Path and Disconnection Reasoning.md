---
title: Six-Week Day 10 — Earth-Fault Current Path and Disconnection Reasoning
tags:
  - capstone
  - six-week-plan
  - earth-fault
  - MEN
  - protection
status: review-required
reviewed_on: 2026-07-14
safety_critical: true
reference_check_required: true
technically_reviewed: false
---

# Six-Week Day 10 — Earth-Fault Current Path and Disconnection Reasoning

## Purpose

This note supports the move from Day 9 normal-current reasoning to a bounded earth-fault loop and evidence-gated disconnection conclusion. It does not prove an actual installation path or protective outcome.

## Core model

Use **L-O-O-P-S**:

- **Locate the fault and exposed conductive part** — define the unintended connection precisely.
- **Outline the outward source path** — trace from the stated source to the fault.
- **Outline the protective return path** — trace the supported return through protective earthing, the stated MEN relationship and source return.
- **Prove conditions and protection separately** — separate continuity and loop-condition evidence from protective-device evidence.
- **State the bounded conclusion and stop point** — classify the path, condition and outcome claims and record missing evidence.

The central rule is:

> A complete conceptual fault path is necessary, but it does not by itself prove continuity, adequate loop conditions or protective-device operation.

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

## Key distinctions

### Normal current and earth-fault current

Normal load current follows the intended active-load-neutral loop. Earth-fault current arises from an unintended connection and uses the applicable protective return route established by the scenario and authorised evidence.

### Path, condition and outcome claims

- **Path claim:** a complete conceptual route is supported.
- **Condition claim:** continuity and relevant electrical conditions are supported by authorised evidence.
- **Outcome claim:** applicable device evidence supports the stated protective response.

Each level depends on the earlier level. A path claim cannot be silently upgraded to an outcome claim.

### Identity and continuity

A labelled or visible protective conductor may support an identity claim. It does not prove continuity, condition, impedance or suitability.

### Conceptual loop and verified installation

A learning diagram can support fault-path reasoning. It cannot establish exact routing, permitted MEN locations, test results, device characteristics or compliance.

## Evidence grades

- **Grade A — scenario fact:** supplied source, fault location, labels, approved learning drawing or provided record.
- **Grade B — applicable authorised evidence:** current requirements, approved design, verified records, competent test evidence, manufacturer information or competent direction.
- **Grade C — assumption:** colour, visible presence, familiar arrangement, presumed continuity, guessed loop condition or remembered device behaviour.

Grade C can generate a question but cannot prove a safety-critical outcome.

## Practical application

For a trainer-created fictional scenario:

1. mark the fault location and exposed conductive part;
2. trace source active to the fault;
3. trace the supported protective return to the source relationship;
4. stop at every unsupported segment;
5. label each claim as path, condition or outcome;
6. grade the evidence for every material claim;
7. change one condition—continuity, source arrangement or device information—and reassess all claim levels;
8. write a bounded conclusion and escalation statement.

## Assessment relevance

A strong response:

- completes the supported source-fault-source loop;
- keeps normal current and earth-fault current distinct;
- does not treat a visible conductor as proof of continuity;
- separates path, loop-condition and device evidence;
- revises the conclusion when source, continuity or device information changes;
- avoids remembered values, curves or operating-time claims;
- states uncertainty, practical authority and stop conditions.

The module uses a 12-point educational rubric. It is not an official RTO pass mark.

## Common misconceptions

- Fault current disappears into earth.
- Reaching an earthing terminal completes the loop explanation.
- A protective conductor shown on a diagram is proven continuous.
- Any complete path guarantees a protective device will operate as required.
- Every earth fault is explained by the same device or source arrangement.
- A grid-connected MEN model can be copied unchanged to an alternative source.

## Safety and review boundary

This material authorises no opening, cover removal, isolation, proving, testing, continuity measurement, loop measurement, fault creation, bridging, disconnection, reconnection, resetting, alteration, energisation, commissioning or verification.

Stop when source context, neutral/MEN relationship, conductor identity, continuity, loop conditions, device evidence, authorised source currency or practical authority is uncertain. Exact requirements remain `reference_check_required`.

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
