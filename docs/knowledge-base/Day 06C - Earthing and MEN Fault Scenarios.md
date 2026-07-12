---
status: review-required
jurisdiction: AU-NZ
source_status: original-summary
reviewed_on: 2026-07-12
safety_critical: true
reference_check_required: true
technical_reviewer: pending
---

# Day 06C - Earthing and MEN Fault Scenarios

Day 6C applies the component model from Day 6A and the fault-loop model from Day 6B to paper-based diagnosis of missing, open, loose, high-resistance, misplaced and supply-context-dependent defects.

## Learning module

- [Day 6C — Earthing and MEN Fault Scenarios](../learning-plans/4-week/modules/day-06c-earthing-and-men-fault-scenarios.md)

## Prerequisites

- [[Day 06A - Earthing Terminology and Component Roles]]
- [[Day 06B - MEN Fault-Current Path]]
- [[Day 03 - Overcurrent Protection]]
- [[Day 04 - RCD Protection and Additional Protection]]
- [[Electrical Fundamentals]]
- [[Safety and Electrical Risk]]

## Related concepts

- [[Earthing Bonding and MEN]]
- [[Fault Finding and Commissioning]]
- [[Inspection Testing and Verification]]
- [[Control Switching and Protection]]
- [[Conductors and Wiring Systems]]
- [[AS-NZS-3000-2018-Index]]

## Diagnostic model

Use **D-P-E-S**:

1. **Defect** — state and classify only the defect described.
2. **Path** — redraw normal and fault-current paths and mark the changed segment.
3. **Effect and evidence** — separate circuit, protective and possible contact-risk consequences, then identify the evidence needed.
4. **Source and stop** — verify the governing requirement and state the stop or escalation condition.

## Defect categories

- **Open:** the intended conductive path is interrupted.
- **High resistance:** the path remains partly conductive but has greater opposition than intended.
- **Misplaced connection:** a connection exists at an incorrect or unverified location and may create unintended paths.
- **Supply-context dependent:** the model is incomplete because a generator, inverter, battery, separate supply or transfer arrangement has not been represented.

## Practical application

For each paper scenario, record:

- stated defect and classification;
- normal current path;
- fault-current path before and after the defect;
- immediate circuit consequence;
- protective consequence;
- possible contact-risk consequence;
- evidence required before concluding;
- authorised source to check;
- stop or escalation condition.

The exercise must not be converted into a live testing or repair instruction.

## Assessment relevance

A strong capstone response explains what changed, how the path changed, why a protective result cannot be assumed, what evidence is required and when work must stop. Claims such as “will trip”, “safe”, “compliant” or “isolated” require an explicit evidence chain.

## Misconceptions to track

- Normal operation proves the protective earthing path is sound.
- A loose connection is harmless if continuity appears intermittent.
- An RCD makes protective-earthing continuity unnecessary.
- Any neutral-earth connection improves safety.
- The original supply sketch remains valid after adding an inverter or generator.
- A paper diagnosis authorises live testing or repair.

## Navigation

- Previous: [[Day 06B - MEN Fault-Current Path]]
- Next: [[Day 07 - Week 1 Consolidation and Competency Check]]
- Map of content: [[Earthing Bonding and MEN]]

## References

- AS/NZS 3000:2018, current authorised copy and applicable amendments required.
- Current applicable legislation, regulator guidance, network service rules, manufacturer instructions and RTO procedures.
- [Learning Design](../LEARNING_DESIGN.md)
- [Content, Standards and Copyright Policy](../CONTENT_AND_COPYRIGHT.md)

Exact MEN arrangements, connection points, conductor requirements, test methods, readings, protective-device characteristics, operating times, touch-voltage criteria, alternate-supply requirements, exceptions and clause references remain `reference_check_required`. This note is not `technically-reviewed`.
