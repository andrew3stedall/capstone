---
title: Six-Week Day 04 — Overload and Short-Circuit Protection Reasoning
tags:
  - capstone
  - six-week-plan
  - protection
  - overcurrent
  - conductor-coordination
status: review-required
reviewed_on: 2026-07-14
---

# Six-Week Day 04 — Overload and Short-Circuit Protection Reasoning

## Purpose

This note separates two related overcurrent evidence chains. Overload reasoning focuses on sustained current on the intended path and the relationship among load, protective device and conductor. Short-circuit reasoning adds the unintended fault path, prospective current, interruption capability and fault-duration evidence.

## Core model

Use **C-L-E-A-R**:

- **Classify the current mechanism** — expected load, overload on the intended path, short circuit on an unintended path, or unresolved.
- **Link load, device and conductor** — identify the design-current, device-rating and conductor-capacity evidence needed for overload reasoning.
- **Establish fault evidence** — identify prospective short-circuit current, breaking capacity and operating-characteristic or withstand evidence.
- **Apply conditions and dependencies** — check installation method, thermal conditions, location, device data and upstream/downstream relationships.
- **Record the boundary** — state the supported conclusion, unresolved checks, authorised source and stop point.

The reusable comparison is:

**overload: demand → intended path → sustained heating → load/device/conductor evidence**

**short circuit: unintended path → prospective fault current → rapid thermal/mechanical stress → interruption/withstand evidence**

## Prerequisites

- [[Six-Week Day 03 - Fundamental Protection Concepts and Fault Types]]
- [[Day 03 - Overcurrent Protection]]
- [[Electrical Hazards]]
- [[Risk Assessment]]

## Related concepts

- [[Day 04 - RCD Protection and Additional Protection]]
- [[Earthing and MEN]]
- [[Cable Selection]]
- [[Voltage Drop]]
- [[Verification and Testing]]
- [[Fault Finding]]
- [[Six-Week Day 16 - Design Current Device Rating and Conductor Capacity Relationship]]

## Practical application

Build an evidence board for four fictional paper scenarios:

1. load growth on an otherwise sound circuit;
2. a short circuit stated at the load end;
3. the same fault type stated nearer the source;
4. a design card that provides load current and device rating but omits installation and fault data.

For each scenario, classify the mechanism, identify both protection purposes, list the required evidence, mark assumptions, name the source family and choose **supported**, **provisional** or **stop**.

## Assessment relevance

This method supports protection explanations, cable-selection reasoning and later verification work. It tests whether the learner can distinguish current rating from breaking capacity and avoid selecting a device from incomplete data. It does not define official assessment criteria or supply authorised numerical values.

## Safety and review boundary

This material authorises no opening, isolation, proving, testing, fault creation, bridging, resetting, disconnection, replacement, alteration, energisation or prospective-fault-current measurement.

Exact current relationships, conductor capacities, correction factors, prospective-current methods, breaking capacities, operating characteristics, fault-duration limits, coordination requirements and procedures remain `reference_check_required`.

The note is `review-required` and has not received qualified technical review.

## References

- [[AS-NZS-3000-2018-Index]] — topic navigation only; use current authorised access for technical decisions.
- Current legislation, regulator guidance, network requirements, manufacturer data, approved workplace procedures and RTO instructions as applicable.
- [[Content Standards and Copyright]] — transformation and source-use boundary.
- [[Learning Design]] — retrieval, worked-example fading and error-driven remediation.

## Navigation

- **Module:** [Day 4 — Overload and Short-Circuit Protection Reasoning](../learning-plans/6-week/modules/day-04-overload-and-short-circuit-protection-reasoning.md)
- **Program:** [Six-Week Capstone Learning Plan](../learning-plans/6-week/MASTER_PLAN.md)
- **Previous:** [[Six-Week Day 03 - Fundamental Protection Concepts and Fault Types]]
- **Next:** [[Six-Week Day 05 - Rest Retrieval and Source-Navigation Correction]]
