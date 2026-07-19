---
title: Six-Week Day 04 — Overload and Short-Circuit Protection Reasoning
tags:
  - capstone
  - six-week-plan
  - protection
  - overcurrent
  - conductor-coordination
status: review-required
reviewed_on: 2026-07-15
quality_improvement_pass: completed
reference_check_required: true
technical_reviewer: pending
---

# Six-Week Day 04 — Overload and Short-Circuit Protection Reasoning

## Purpose

This note separates two related overcurrent evidence chains. Overload reasoning focuses on sustained current on the intended path and the relationship among load, protective device, conductor and installation conditions. Short-circuit reasoning adds the unintended path, fault location, prospective current, interruption capability, operating time and withstand evidence.

## Core model

Use **C-L-E-A-R**:

- **Classify the mechanism** — expected load, overload on the intended path, short circuit on an unintended path, both, or unresolved.
- **Link load, device and conductor** — identify the design-current, device-rating and conductor-capacity evidence required for overload reasoning.
- **Establish fault evidence** — identify fault point, prospective current, breaking capacity, operating characteristic and any required withstand evidence.
- **Apply conditions and dependencies** — check installation method, thermal conditions, device type, source, location and upstream/downstream relationships.
- **Record and reopen** — assign evidence and claim grades, state missing evidence and reopen dependent conclusions after a material change.

The reusable comparison is:

**overload: demand → intended path → sustained thermal stress → load/device/conductor evidence**

**short circuit: unintended path → prospective current → rapid thermal/mechanical stress → interruption/time/withstand evidence**

## Evidence discipline

### Evidence grades

- **Stated** — supplied directly in the scenario, drawing or schedule.
- **Derived** — calculated from stated inputs using an identified authorised method.
- **Manufacturer-verified** — supported by applicable current device or assembly information.
- **Assumed** — plausible but not evidenced.
- **Missing** — required for the conclusion but unavailable.

### Claim grades

- **Described** — reports what the supplied material states.
- **Supported** — combines applicable evidence into a bounded paper conclusion.
- **Verified** — requires complete authorised evidence and qualified confirmation.
- **Unresolved** — a material evidence gap prevents the conclusion.

A device’s rated current and breaking capacity answer different questions. One must not be treated as evidence for the other.

## Reopening triggers

Reopen the affected evidence chain when any of these change:

- connected load or duty;
- conductor material, route, grouping or thermal environment;
- source or supply arrangement;
- fault location;
- protective-device type or rating;
- upstream or downstream device relationship;
- applicable manufacturer information.

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

Build an evidence board for four fictional paper scenarios: load growth on a sound circuit; a short circuit at the load end; the same fault nearer the source; and an incomplete design card.

For each scenario:

1. classify the mechanism and current path;
2. build separate overload and short-circuit evidence chains;
3. grade every input;
4. identify missing evidence and authorised source families;
5. write described, supported or unresolved claims;
6. record reopening triggers and the practical stop boundary.

## Assessment relevance

This method supports protection explanations, conductor-selection reasoning and later verification work. It tests whether the learner can distinguish rated current from breaking capacity, avoid selecting a device from incomplete data and reopen conclusions after a changed dependency. The 10/12 module threshold is an original educational readiness measure, not an official assessment criterion.

## Safety and review boundary

This material authorises no opening, isolation, proving, testing, fault creation, bridging, resetting, disconnection, replacement, alteration, energisation or prospective-fault-current measurement.

Exact current relationships, conductor capacities, correction factors, prospective-current methods, breaking capacities, operating characteristics, fault-duration limits, coordination requirements and procedures remain `reference_check_required`.

The note is `review-required`, safety-critical and not `technically-reviewed`.

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