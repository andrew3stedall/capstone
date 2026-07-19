---
title: Six-Week Day 06 — RCD Purpose Limits and Coordination with Other Protection
tags:
  - capstone
  - six-week-plan
  - rcd
  - protection
  - current-balance
status: review-required
reviewed_on: 2026-07-15
quality_improvement_pass: completed
safety_critical: true
reference_check_required: true
technically_reviewed: false
---

# Six-Week Day 06 — RCD Purpose Limits and Coordination with Other Protection

## Purpose

Develop an evidence-controlled explanation of residual-current protection while keeping it distinct from overcurrent protection, protective earthing, basic protection, isolation and safe work controls. The learning activity is paper-based and authorises no practical testing.

## Core workflow

Use **B-A-L-A-N-C-E**:

- **Bound the scenario** — identify circuit, location, users, loads, supply and alternate sources.
- **Ask the protection question** — separate residual-current, overcurrent, fault-path and work-control questions.
- **Locate authorised sources** — identify current requirements, manufacturer information and approved procedures that apply.
- **Analyse monitored paths** — map outgoing, intended-return and possible bypass paths.
- **Name device evidence** — record family, markings, type and separate functions without guessing.
- **Coordinate protective layers** — retain earthing, bonding, insulation, isolation and overcurrent protection as separate checks.
- **Evidence and stress-test the conclusion** — grade evidence and claims, then reopen them after a material change.

> An RCD detects monitored-current imbalance. It does not identify the alternate path or prove every other protective layer.

## Prerequisites

- [[Six-Week Day 03 - Fundamental Protection Concepts and Fault Types]]
- [[Six-Week Day 04 - Overload and Short-Circuit Protection Reasoning]]
- [[Six-Week Day 05 - Rest Retrieval and Source-Navigation Correction]]
- [[Electrical Fundamentals]]
- [[Safety and Electrical Risk]]

## Related concepts

- [[Control Switching and Protection]]
- [[Earthing Bonding and MEN]]
- [[Conductors and Wiring Systems]]
- [[Inspection Testing and Verification]]
- [[Fault Finding and Commissioning]]
- [[Day 04 - RCD Protection and Additional Protection]]
- [[Six-Week Day 07 - Week 1 Protection Decision Checkpoint]]

## Key distinctions

### Current balance and residual current

In a simple conceptual circuit, outgoing active current and returning neutral current pass through the monitored group. Current returning outside that group creates residual current. The device observes imbalance, not the physical cause.

### Four protection questions

1. **Residual-current:** Is current leaving the monitored live-conductor group by another path?
2. **Overcurrent:** Are conductors and equipment protected against excessive current?
3. **Fault-path:** Are earthing, bonding and automatic-disconnection arrangements effective as required?
4. **Work-control:** Are isolation, access, authority and safe procedures adequate for the task?

### Combined devices

An RCBO contains residual-current and overcurrent functions in one enclosure. The shared enclosure does not remove the need to assess each function and its evidence separately.

### Additional protection

Additional protection supplements rather than replaces basic protection, fault protection, isolation and safe work controls.

## Evidence grades

- **Observed** — directly visible or stated in the supplied scenario.
- **Documented** — supported by a current drawing, schedule, label or authorised record.
- **Manufacturer-verified** — supported by applicable device or load information.
- **Assumed** — plausible but not evidenced.
- **Missing** — required for the conclusion but unavailable.

## Claim grades

- **Described** — states what the supplied evidence shows.
- **Supported** — combines applicable evidence into a bounded conclusion.
- **Verified** — requires complete authorised evidence and qualified confirmation.
- **Unresolved** — a material evidence gap prevents the conclusion.

Assumptions may form hypotheses but cannot support exact safety-critical conclusions.

## Practical application

For a fictional protected circuit:

1. draw outgoing, intended-return and one possible alternate path;
2. state the four protection questions;
3. complete B-A-L-A-N-C-E;
4. grade every material item and claim;
5. identify neutral-grouping, supply and manufacturer evidence;
6. state at least six limits of the installed-device conclusion;
7. produce a bounded conclusion and stop condition;
8. repeat after changing a neutral path, adding an electronic load or adding an alternate supply.

## Assessment relevance

A strong response:

- explains current balance using monitored conductors;
- avoids saying an RCD simply “detects earth”;
- separates all four protection questions;
- distinguishes device labels from compatibility and installation evidence;
- recognises neutral-grouping, load and alternate-source dependencies;
- applies evidence and claim grades consistently;
- reopens conclusions after a material change;
- states stop conditions and exact reference checks.

The module uses a 12-point educational rubric. It is not an official RTO pass mark.

## Common misconceptions

- An RCD prevents every electric shock.
- An RCD replaces overcurrent protection.
- An RCD replaces protective earthing.
- An RCBO label proves every protective function is adequate.
- A test button proves the installation is safe.
- Device operation proves the RCD is defective.
- Repeated resetting is a valid diagnosis.
- A typical single-source diagram applies unchanged to every installation.

## Reopening triggers

Rebuild the analysis when any of these changes:

- supply or alternate-source arrangement;
- connected load or leakage behaviour;
- monitored-conductor or neutral grouping;
- device family, type or manufacturer information;
- upstream/downstream coordination;
- environmental condition or reported damage;
- evidence needed for the proposed claim.

## Safety and review boundary

This material authorises no opening, isolation, proving, testing, fault creation, bridging, resetting, disconnection, replacement, alteration, energisation, measurement or commissioning.

Stop when conductor routing, neutral grouping, supply context, device markings, manufacturer information, operating requirements or practical authority are uncertain. Exposed live parts, damage, moisture, burning, overheating, repeated operation or possible alternate supplies require qualified guidance and current authorised procedures.

Exact circuit coverage, device types, residual-current values, operating times, test sequences, permitted arrangements, exceptions and jurisdiction-specific requirements remain `reference_check_required`. This note is `review-required` and not `technically-reviewed`.

## References

- [[AS-NZS-3000-2018-Index]] — navigation only; use current authorised access for technical decisions.
- Current applicable legislation, regulator guidance, manufacturer information, approved workplace procedures and RTO instructions.
- [[Learning Design]] — retrieval, worked-example fading, confidence calibration and error-driven remediation.
- [[Content Standards and Copyright]] — original explanation and source-use boundaries.

## Navigation

- **Module:** [Day 6 — RCD Purpose, Limits and Coordination with Other Protection](../learning-plans/6-week/modules/day-06-rcd-purpose-limits-and-coordination-with-other-protection.md)
- **Program:** [Six-Week Capstone Learning Plan](../learning-plans/6-week/MASTER_PLAN.md)
- **Previous:** [[Six-Week Day 05 - Rest Retrieval and Source-Navigation Correction]]
- **Next:** [[Six-Week Day 07 - Week 1 Protection Decision Checkpoint]]
