---
status: review-required
jurisdiction: AU-NZ
source_status: original-summary
reviewed_on: 2026-07-14
quality_improvement_passed_on: 2026-07-14
safety_critical: true
reference_check_required: true
technical_reviewer: pending
---

# Day 06B - MEN Fault-Current Path

Day 6B develops the component-role model from [[Day 06A - Earthing Terminology and Component Roles]] into a complete conceptual fault-current loop. It separates the normal active–load–neutral path from the protective path used during an active-to-exposed-conductive-part fault and prevents the unsupported jump from a familiar sketch to “the breaker trips.”

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

## L-O-O-P-S workflow

1. **Locate** the fault and every possible source.
2. **Outline** the normal active–load–neutral path.
3. **Outline** the protective return path without skipping components.
4. **Prove** path quality and the relevance of the proposed protective measure.
5. **Source-check** exact requirements and state a bounded conclusion.

The stop branches are part of the method. Missing source context, an assumed connection, an unverified path condition or unknown device requirement prevents an exact protective-outcome claim.

## Core relationship

For a conceptual active-to-metal fault, trace:

1. source active point;
2. active conductor to the fault;
3. fault contact and exposed conductive metalwork;
4. protective earthing conductor;
5. main earthing terminal or relevant earthing junction;
6. designated MEN relationship;
7. neutral or source return;
8. source point that completes the loop.

The main earthing conductor and electrode are part of the earthing arrangement, but the electrode alone is not a complete explanation of the intended metallic fault-current return path.

## Three levels of claim

1. **Described path:** the route shown or stated in the scenario.
2. **Verified path:** evidence confirms the required path elements and context.
3. **Verified protective outcome:** authorised evidence also confirms the relevant protective measure and operating conditions.

A drawn path is not proof of continuity, acceptable impedance or device response.

## Evidence grades

- **A — stated or observed fact:** may be used as a premise within the scenario.
- **B — authorised technical evidence:** may support an exact conclusion within its confirmed scope.
- **C — assumption or memory:** must be marked and must not be presented as an exact requirement.

## Practical application

Draw the normal current path and fault-current path separately. Grade every path element as A, B or C evidence. Then inject one defect or context change, such as:

- open protective earthing conductor;
- loose or high-resistance connection;
- damaged enclosure connection;
- misplaced neutral-to-earth link;
- unrepresented alternate source;
- visible conductor with no continuity evidence.

Explain:

- which path segment is affected;
- what earlier conclusion no longer transfers;
- how the conceptual loop may be affected;
- which protective outcome can no longer be claimed;
- what authorised evidence is required;
- where the analysis must stop or escalate.

## Assessment relevance

A strong response:

- draws the normal and fault paths separately;
- traces the complete loop back to the source;
- labels each element by role;
- explains the qualitative impedance–fault-current–device-response relationship;
- grades the evidence;
- states the protective outcome conditionally;
- stops when supply context, path effectiveness or device conditions are unverified.

The full module uses a six-category rubric covering normal-path distinction, loop trace, impedance reasoning, evidence discipline, transfer and safety communication.

## Misconceptions to track

- Fault current disappears into soil.
- The electrode alone clears the equipment fault.
- Neutral and protective earth are interchangeable.
- Any neutral-to-earth link is acceptable.
- A protective device operates merely because a fault exists.
- An RCD makes protective-earthing continuity unnecessary.
- Visual presence proves conductor continuity.
- A typical MEN sketch applies unchanged to every source arrangement.

## Safety boundary

This is a paper-based reasoning model. It authorises no switching, isolation, opening, testing, resetting, fault creation, disconnection, repair, alteration, commissioning or energisation. Alternate supplies, stored energy, uncertain MEN arrangements, exposed live parts and unresolved test requirements require qualified guidance and current authorised procedures.

## Navigation

- Previous: [[Day 06A - Earthing Terminology and Component Roles]]
- Next: [[Day 06C - Earthing and MEN Fault Scenarios]]
- Map of content: [[Earthing Bonding and MEN]]

## References

- AS/NZS 3000:2018, current authorised copy and applicable amendments required.
- Current applicable legislation, regulator guidance, network service rules, manufacturer instructions, workplace procedures and RTO requirements.
- [Learning Design](../LEARNING_DESIGN.md)
- [Content, Standards and Copyright Policy](../CONTENT_AND_COPYRIGHT.md)

Exact MEN arrangements, connection points, conductor requirements, fault-loop methods, device characteristics, operating times, touch-voltage criteria, testing requirements, alternate-supply provisions, exceptions and clause references remain `reference_check_required`. This note is not `technically-reviewed`.

<!-- sequence-navigation:start -->
### Sequence navigation

- [← Previous: Day 06A - Earthing Terminology and Component Roles](./Day%2006A%20-%20Earthing%20Terminology%20and%20Component%20Roles.md)
- [Four-week learning plan](./Four-Week%20Capstone%20Learning%20Plan.md)
- [Open the full learning module](../learning-plans/4-week/modules/day-06b-men-fault-current-path.md)
- [Next: Day 06C - Earthing and MEN Fault Scenarios →](./Day%2006C%20-%20Earthing%20and%20MEN%20Fault%20Scenarios.md)
<!-- sequence-navigation:end -->
