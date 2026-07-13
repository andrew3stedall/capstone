---
status: review-required
jurisdiction: AU-NZ
source_status: original-summary
reviewed_on: 2026-07-14
quality_pass_completed_on: 2026-07-14
safety_critical: true
reference_check_required: true
practical_authorisation: none
---

# Day 03 - Overcurrent Protection

Overcurrent protection coordinates expected load, conductor capability, protective-device behaviour and available fault current. Suitability cannot be established from one printed rating.

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

- **Overload:** excessive current in an intended, electrically sound path.
- **Short circuit:** current through an unintended relatively low-impedance path.
- **Overcurrent:** the broader category containing both.

Classify an event using **path**, **magnitude** and **time**. This supports diagnosis but does not replace authorised device data or installation rules.

## P-R-O-T-E-C-T workflow

1. **Purpose and duty** — identify load, duty and starting behaviour.
2. **Route and conductor** — establish the actual conductor and installation conditions.
3. **Overcurrent scenarios** — separate overload, short circuit, other faults and normal inrush.
4. **Technical sources** — locate current authorised requirements and exact device data.
5. **Evaluate relationships** — verify load, conductor, device, fault operation and breaking capacity.
6. **Coordination and compatibility** — check equipment and upstream/downstream relationships.
7. **Trace and stop** — record sources, assumptions and unresolved checks.

## Evidence discipline

Separate:

- observed or supplied facts;
- authorised technical evidence;
- assumptions requiring resolution.

An assumption can identify the next question but cannot complete a protection justification.

## Practical application

Use the module evidence record on a final subcircuit, motor circuit or submain. The learner must classify abnormal-current scenarios, sketch current paths, identify missing evidence, distinguish residual-current and overcurrent functions, and state a stop decision when a claim cannot be verified.

Do not treat a larger protective device as a remedy for repeated operation until the cause, conductor capability, equipment duty, fault performance and applicable requirements are established.

## Assessment relevance

A strong response should:

- distinguish overload from short circuit by cause and path;
- apply P-R-O-T-E-C-T without skipping fault interruption;
- account for actual conductor installation conditions;
- distinguish rated current, time-current behaviour and breaking capacity;
- expose assumptions rather than inventing values;
- state a specific safety boundary and escalation route;
- complete a varied re-attempt after feedback.

The six-category rubric covers event classification, conductor reasoning, device reasoning, fault interruption, evidence discipline and safety boundary. A critical-category zero requires correction before progression.

## Review flags

- `review-required`: qualified educational and technical review before product use.
- `reference_check_required`: exact relationships, correction factors, fault-clearing conditions, operating times, device curves, breaking capacities, selectivity claims, clause references and jurisdiction-specific requirements.
- Not `technically-reviewed`.
- No authority for opening, testing, resetting, replacing, altering or energising electrical equipment.

## References

- AS/NZS 3000:2018 — authorised current copy required; references remain clause-level only.
- Current regulator guidance for the applicable Australian or New Zealand jurisdiction.
- Current manufacturer data for the exact circuit breaker, fuse or combined device.
- Current authorised conductor-selection sources and cable-manufacturer data.
- Applicable workplace and RTO procedures.

## Next link

- [[Day 04 - RCD Protection and Additional Protection]]

<!-- sequence-navigation:start -->
### Sequence navigation

- [← Previous: Day 02 - Fundamental Safety Principles](./Day%2002%20-%20Fundamental%20Safety%20Principles.md)
- [Four-week learning plan](./Four-Week%20Capstone%20Learning%20Plan.md)
- [Open the full learning module](../learning-plans/4-week/modules/day-03-overcurrent-protection.md)
- [Next: Day 04 - RCD Protection and Additional Protection →](./Day%2004%20-%20RCD%20Protection%20and%20Additional%20Protection.md)
<!-- sequence-navigation:end -->