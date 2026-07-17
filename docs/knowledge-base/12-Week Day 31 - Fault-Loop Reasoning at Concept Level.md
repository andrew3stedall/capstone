---
title: 12-Week Day 31 - Fault-Loop Reasoning at Concept Level
type: learning-note
program: twelve-week
status: review-required
reference_check_required: true
reviewed_on: 2026-07-17
---

# 12-Week Day 31 - Fault-Loop Reasoning at Concept Level

## Purpose

Builds a complete source-to-fault-and-return mental model while controlling evidence provenance, competing paths and the boundary between conceptual reasoning and authorised technical conclusions.

## Module

- [Day 31 — Fault-Loop Reasoning at Concept Level](../learning-plans/12-week/modules/day-31-fault-loop-reasoning-at-concept-level.md)
- [[Twelve-Week Capstone Learning Plan]]

## Prerequisites

- [[12-Week Day 30 - Voltage-Drop Interpretation and Design Iteration]]
- [[12-Week Day 20 - MEN Fault Scenarios and Protective-Device Operation Reasoning]]
- [[Fault Loop]]
- [[Evidence Quality]]

## Core concepts

- **Fault loop:** proposed complete conductive path from source, through fault and back to that source.
- **Path presence:** evidence that a segment exists.
- **Path identity:** evidence that it is the specific segment claimed.
- **Loop continuity:** support for an unbroken path, not proof of sufficiently low impedance.
- **Loop impedance:** total opposition around the complete path; exact methods and limits require authorised sources.
- **Prospective fault current:** conditional current for a defined source, fault and path state.
- **Parallel path:** additional route that may share current or make continuity evidence ambiguous.
- **First unsupported transition:** earliest reasoning step not adequately supported; later dependent claims remain unsupported.
- **Evidence provenance:** source, date, operating state and responsibility associated with evidence.
- **Evidence owner:** authorised person or source responsible for resolving a gap.
- **Recheck trigger:** change requiring earlier path reasoning to be reopened.

## Evidence classification

Use these labels for every material statement:

- stated fact;
- derived fact;
- supported inference;
- assumption;
- contradiction; and
- evidence gap.

Confidence is recorded separately. High confidence does not convert an assumption into evidence.

## L-O-O-P-S workflow

1. **Locate** the source state and fault point.
2. **Outline** every outgoing, fault and return segment, including plausible parallel paths.
3. **Observe** evidence quality, provenance, contradictions and gaps.
4. **Predict** directional consequences without inventing values or device behaviour.
5. **Source-check**, identify the first unsupported transition, assign an owner and state a bounded conclusion.

## Claim ladder

Reason in this order:

1. segment described;
2. identity supported;
3. connection and state supported;
4. complete path supported;
5. applicable path inputs supported;
6. device data and criterion supported;
7. authorised comparison completed; and
8. qualified technical conclusion.

A missing lower rung blocks every dependent claim above it.

## Practical application

Learners:

- draw intended and competing return paths;
- classify evidence and record provenance;
- identify the first unsupported transition;
- state which later claims are blocked;
- assign evidence owners and recheck triggers; and
- repeat the reasoning after at least two material scenario conditions change.

## Assessment relevance

Judge each criterion independently:

- **secure:** complete, traceable reasoning with explicit limits;
- **developing:** a non-critical evidence or dependency issue remains;
- **unsupported:** a material source, path, identity, connection, device or criterion is assumed; and
- **`stop-required`:** the response invents values, operation, compliance or practical instructions, or ignores a safety-critical contradiction.

These are educational planning states, not official grades, competency decisions or legal classifications. There is no aggregate score that offsets a blocking condition.

## Related concepts

- [[Protection Coordination]]
- [[Protective Earthing]]
- [[MEN System]]
- [[Evidence Quality]]
- [[Circuit Design]]
- [[Prospective Fault Current]]
- [[Automatic Disconnection]]
- [[Verification Evidence]]

## Safety boundary

Written training only. No official loop values, test methods, disconnection criteria, device operation or compliance decisions are supplied. No switching, isolation, opening, proving, tracing, measurement, testing, fault simulation, disconnection, reconnection or energisation is authorised.

## References and currency

- Current authorised AS/NZS 3000 edition and amendments.
- Applicable regulator, network, manufacturer, workplace and RTO sources.
- [Learning Design](../LEARNING_DESIGN.md)
- [Content, Standards and Copyright Policy](../CONTENT_AND_COPYRIGHT.md)

Exact equations, path conventions, limits, device characteristics, test methods and acceptance criteria remain `reference_check_required`. This original note is not `technically-reviewed`.

## Navigation

- **Previous:** [[12-Week Day 30 - Voltage-Drop Interpretation and Design Iteration]]
- **Next:** [[12-Week Day 32 - Coordination Selectivity and Upstream-Downstream Consequences]]
- **Map of content:** [[Protection Coordination]]