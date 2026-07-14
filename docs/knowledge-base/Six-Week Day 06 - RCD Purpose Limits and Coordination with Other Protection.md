---
title: Six-Week Day 06 — RCD Purpose Limits and Coordination with Other Protection
tags:
  - capstone
  - six-week-plan
  - rcd
  - protection
  - current-balance
status: review-required
reviewed_on: 2026-07-14
safety_critical: true
reference_check_required: true
technically_reviewed: false
---

# Six-Week Day 06 — RCD Purpose Limits and Coordination with Other Protection

## Purpose

This module develops a current-balance explanation of residual-current protection and keeps it distinct from overcurrent protection, protective earthing, basic protection, isolation and safe work controls. It uses evidence-controlled paper scenarios rather than practical testing.

## Core model

Use **B-A-L-A-N-C-E**:

- **Bound the scenario** — identify circuit, users, location, supply and loads.
- **Ask the protection question** — separate residual-current, overcurrent and fault-path concerns.
- **Locate current authorised sources** — use requirements and manufacturer information that apply to the scenario.
- **Analyse all monitored paths** — trace outgoing and returning live-conductor current and possible bypass paths.
- **Name the device evidence** — record device family, type, markings and separate functions without guessing.
- **Coordinate the protective layers** — retain earthing, bonding, insulation, isolation and overcurrent functions as separate checks.
- **Evidence the conclusion** — grade facts, authorised evidence and assumptions, then state a bounded outcome.

The central rule is:

> An RCD detects monitored-current imbalance; it does not identify the alternate path or prove every other protective layer.

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

In a simple conceptual circuit, outgoing active current and returning neutral current pass through the monitored group. Current returning outside that group creates residual current. The device observes the imbalance, not the physical cause.

### Residual-current protection and overcurrent protection

Residual-current protection responds to monitored-current imbalance. Overcurrent protection addresses excessive current conditions such as overload and short circuit. A combined device may contain both functions, but each function still requires separate evidence.

### Residual-current protection and protective earthing

Protective earthing supports a fault-current return path and the intended operation of protective measures under applicable conditions. RCD presence does not prove protective-earthing continuity, connection quality or compliance.

### Additional protection

Additional protection supplements rather than replaces basic protection, fault protection, isolation and safe work controls.

## Evidence grades

- **Grade A — stated or observed fact:** scenario detail, visible marking, authorised drawing detail or supplied recorded result.
- **Grade B — authorised technical evidence:** current requirement, manufacturer instruction, approved design or competent reviewer direction.
- **Grade C — assumption:** inferred device suitability, guessed neutral grouping, presumed exception or unsupported cause.

Grade C evidence may form a hypothesis but cannot support an exact safety-critical conclusion.

## Practical application

For a fictional protected circuit:

1. draw the outgoing active and returning neutral paths;
2. add one possible alternate return path;
3. state the residual-current question;
4. state separate overcurrent and fault-path questions;
5. identify monitored conductors and neutral-grouping evidence;
6. record device family, type and separate functions;
7. grade every material claim A, B or C;
8. state what the installed device does not prove;
9. produce a bounded conclusion and stop condition.

Then vary the scenario by adding a crossed-neutral possibility, electronic loads, an alternate source, incomplete markings or upstream/downstream devices. Reassess the evidence priorities without copying the first answer.

## Assessment relevance

A strong response:

- explains current balance in terms of monitored conductors;
- avoids the slogan that an RCD simply “detects earth”;
- separates residual-current, overcurrent and fault-path functions;
- identifies device and load evidence;
- recognises neutral-grouping and alternate-source risks;
- coordinates protective layers without treating one as universal;
- states assumptions, stop conditions and exact reference checks.

The module uses a 12-point educational rubric. It is not an official RTO pass mark.

## Common misconceptions

- An RCD prevents every electric shock.
- An RCD replaces overcurrent protection.
- An RCD replaces protective earthing.
- An RCBO label proves every protective function is adequate.
- A test button proves the installation is safe.
- Device operation proves the RCD is defective.
- Repeated resetting is a valid diagnosis.
- Neutral can be treated as protective earth.
- A typical single-source diagram applies unchanged to every installation.

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
