---
status: review-required
jurisdiction: AU-NZ
source_status: original-summary
reviewed_on: 2026-07-12
safety_critical: true
reference_check_required: true
technical_reviewer: pending
---

# Day 06B - MEN Fault-Current Path

Day 6B develops the relationship model introduced in Day 6A into a complete conceptual fault-current loop. It separates normal active-load-neutral current from the protective path used during an active-to-exposed-conductive-part fault.

## Learning module

- [Day 6B — MEN Fault-Current Path](../learning-plans/4-week/modules/day-06b-men-fault-current-path.md)

## Prerequisites

- [[Day 06A - Earthing Terminology and Component Roles]]
- [[Day 03 - Overcurrent Protection]]
- [[Day 04 - RCD Protection and Additional Protection]]
- [[Electrical Fundamentals]]
- [[Safety and Electrical Risk]]

## Related concepts

- [[Earthing Bonding and MEN]]
- [[Control Switching and Protection]]
- [[Conductors and Wiring Systems]]
- [[Inspection Testing and Verification]]
- [[Fault Finding and Commissioning]]
- [[AS-NZS-3000-2018-Index]]

## Core relationship

For a conceptual active-to-metal fault, trace:

1. source active;
2. active conductor to the fault;
3. exposed conductive metalwork;
4. protective earthing conductor;
5. main earthing terminal;
6. designated MEN connection;
7. neutral return to the source;
8. source point that completes the loop.

The main earthing conductor and electrode are part of the earthing arrangement, but the electrode alone is not a complete explanation of the intended metallic fault-current return path.

## Practical application

Draw the normal current path and fault-current path separately. Then inject one defect—such as an open protective earthing conductor, loose terminal, high-resistance connection, misplaced neutral-earth link or unrepresented alternate source—and explain:

- which path segment is affected;
- how fault-loop impedance may change;
- what protective response is expected conceptually;
- what exact evidence must be verified before reaching a field conclusion.

## Assessment relevance

A strong response traces the entire loop rather than saying only “the breaker trips.” It should identify component roles, explain why loop impedance influences fault current, connect that current to protective-device operation, and avoid inventing exact values or times.

## Misconceptions to track

- Fault current disappears into soil.
- The electrode alone clears the equipment fault.
- Neutral and protective earth are interchangeable.
- Any neutral-earth link is acceptable.
- A protective device operates merely because a fault exists.
- An RCD makes protective-earthing continuity unnecessary.
- Visual presence proves conductor continuity.

## Navigation

- Previous: [[Day 06A - Earthing Terminology and Component Roles]]
- Next: [[Day 06C - Earthing and MEN Fault Scenarios]]
- Map of content: [[Earthing Bonding and MEN]]

## References

- AS/NZS 3000:2018, current authorised copy and applicable amendments required.
- Current applicable legislation, regulator guidance, network service rules, manufacturer instructions and RTO procedures.
- [Learning Design](../LEARNING_DESIGN.md)
- [Content, Standards and Copyright Policy](../CONTENT_AND_COPYRIGHT.md)

Exact MEN arrangements, connection points, conductor requirements, fault-loop methods, device characteristics, operating times, touch-voltage criteria, testing requirements, exceptions and clause references remain `reference_check_required`. This note is not `technically-reviewed`.

<!-- sequence-navigation:start -->
### Sequence navigation

- [← Previous: Day 06A - Earthing Terminology and Component Roles](./Day%2006A%20-%20Earthing%20Terminology%20and%20Component%20Roles.md)
- [Four-week learning plan](./Four-Week%20Capstone%20Learning%20Plan.md)
- [Open the full learning module](../learning-plans/4-week/modules/day-06b-men-fault-current-path.md)
- [Next: Day 06C - Earthing and MEN Fault Scenarios →](./Day%2006C%20-%20Earthing%20and%20MEN%20Fault%20Scenarios.md)
<!-- sequence-navigation:end -->
