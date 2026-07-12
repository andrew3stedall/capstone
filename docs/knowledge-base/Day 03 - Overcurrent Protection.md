---
status: review-required
jurisdiction: AU-NZ
source_status: original-summary
reviewed_on: 2026-07-12
safety_critical: true
reference_check_required: true
---

# Day 03 - Overcurrent Protection

Overcurrent protection coordinates the expected load, conductor capability, protective-device behaviour and available fault current. It must address both sustained overload and high-current fault conditions without relying on one rating in isolation.

## Learning module

- [Day 3 — Overcurrent Protection](../learning-plans/4-week/modules/day-03-overcurrent-protection.md)
- [[Four-Week Capstone Learning Plan]]

## Prerequisites

- [[Day 02 - Fundamental Safety Principles]]
- [[Electrical Fundamentals]]
- [[Safety and Electrical Risk]]

## Related concepts

- [[Control Switching and Protection]]
- [[Conductors and Wiring Systems]]
- [[Wiring Rules and Design]]
- [[Fault Finding and Commissioning]]
- [[AS-NZS-3000-2018-Index]]

## Core distinction

- **Overload:** excessive current in an otherwise intended current path.
- **Short circuit:** current through an unintended low-impedance path.
- **Overcurrent:** the broader category containing both.

The protective decision depends on the relationship among:

1. design current and load duty;
2. conductor current-carrying capacity under actual installation conditions;
3. protective-device rating, setting and time-current behaviour;
4. prospective fault current and device breaking capacity;
5. equipment requirements and upstream/downstream coordination.

## Practical application

Use the module's evidence sheet to assess a final subcircuit, motor circuit or submain. The learner should classify abnormal-current scenarios, identify missing evidence and justify why the chosen device protects the conductor and can interrupt the relevant fault current.

Do not treat fitting a larger protective device as a remedy for repeated operation until the cause, conductor capacity, equipment duty, fault performance and applicable requirements are established.

## Assessment relevance

A strong capstone response should:

- distinguish overload from short circuit;
- avoid selecting protection from load current alone;
- account for actual conductor installation conditions;
- explain prospective fault current and breaking capacity;
- distinguish residual-current protection from overcurrent protection;
- state which exact values and device characteristics require authorised verification.

## Review flags

- `review-required`: qualified educational and technical review before product use.
- `reference_check_required`: exact current relationships, correction factors, fault-clearing conditions, operating times, device curves, breaking capacities, selectivity claims, clause references and jurisdiction-specific requirements.
- Automated content must not be marked `technically-reviewed` without evidence of qualified review against authorised current sources.

## References

- AS/NZS 3000:2018 — authorised current copy required; references remain clause-level only.
- Current regulator guidance for the applicable Australian or New Zealand jurisdiction.
- Current manufacturer data for the exact circuit breaker, fuse or combined device.
- Current authorised conductor-selection sources and cable-manufacturer data.
- Applicable workplace and RTO procedures.

## Next link

- [[Day 04 - RCD Protection and Additional Protection]]
