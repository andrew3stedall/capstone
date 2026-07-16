---
title: 12-Week Day 09 - Overload Short-Circuit and Fault-Current Distinctions
type: learning-note
program: twelve-week
status: review-required
reference_check_required: true
reviewed_on: 2026-07-16
---

# 12-Week Day 09 - Overload Short-Circuit and Fault-Current Distinctions

## Purpose

This note connects calculation literacy to protection reasoning. Day 9 classifies a current event from its initiating condition, complete current path and evidence state before any protective-device purpose or operation is considered.

## Module

- [Day 9 — Overload, Short-Circuit and Fault-Current Distinctions](../learning-plans/12-week/modules/day-09-overload-short-circuit-and-fault-current-distinctions.md)
- [[Twelve-Week Capstone Learning Plan]]

## Prerequisites

- [[12-Week Day 08 - Circuit Quantities Load Reasoning and Prerequisite Calculation Check]]
- [[Electrical Fundamentals]]
- [[Known Unknown and Assumed Information]]
- [[Evidence Quality]]

## Core concepts

- **Normal load current:** current in the intended source–load–return path under the stated operating condition.
- **Overcurrent:** current exceeding the relevant intended or rated current for the part being considered.
- **Overload current:** excessive current in an intended, electrically sound path rather than through an unintended conductor-to-conductor path.
- **Short-circuit current:** current through an unintended connection between points that should be at different potentials.
- **Earth-fault current:** current caused by an unintended path involving active parts and exposed metalwork, protective earthing, earth or another relevant conductive return.
- **Fault current:** a broader category of current resulting from an electrical fault.
- **Residual current:** imbalance represented at monitored conductors; it is not automatically identical to earth-fault current in every arrangement.
- **Initiating condition:** the stated change that begins the event.
- **First unsupported transition:** the earliest reasoning step that depends on an unresolved assumption, contradiction, missing path or unverified relationship.
- **Evidence owner:** the person, current authorised source or controlled record responsible for resolving an evidence gap.

## Evidence states

A classification record distinguishes:

- stated facts;
- inferences;
- assumptions;
- contradictions;
- evidence gaps; and
- the first unsupported transition.

A contradiction or missing loop segment cannot be averaged away by otherwise strong reasoning. The conclusion must stop at the earliest unsupported transition.

## P-A-T-H-S workflow

1. **Pin down** the initiating change.
2. **Account for conductors** and conductive parts in both paths.
3. **Trace both loops** back to the source and mark missing segments.
4. **Hold alternatives** including overlapping descriptions and insufficient evidence.
5. **State support and stop point** before handing the bounded question to Day 10.

## Practical application

The learner sorts path cards, compares four original fictional scenarios, labels evidence states, identifies contradictions, completes classification records and repeats the task with supports removed. Transfer requires at least two material condition changes. An imbalance-only scenario must remain a residual-current clue with its physical path unresolved unless further evidence is supplied.

The final handoff identifies:

- the possible protection purpose;
- the conductor, equipment or risk under consideration;
- required device and source evidence;
- the evidence owner or authorised source; and
- the exact point where the Day 9 conclusion stops.

It does not select device ratings or predict operation.

## Assessment relevance

Observable evidence is recorded by criterion as **secure**, **developing**, **unsupported** or **`stop-required`**. The criteria are terminology, loop tracing, evidence control, classification, revision and boundary/handoff.

There is no aggregate pass score. Any `stop-required` result blocks progression until corrected and demonstrated in a changed context. An unsupported result in loop tracing, evidence control, classification or boundary also requires targeted remediation before Day 10. These are educational planning states, not official competency grades.

## Related concepts

- [[Electrical Current]]
- [[Overcurrent Protection]]
- [[Overload Current]]
- [[Short-Circuit Current]]
- [[Earth Fault]]
- [[Fault Current Path]]
- [[Residual Current Device]]
- [[Protective Earthing]]
- [[MEN System]]
- [[Protection Fundamentals]]
- [[Confidence Calibration]]
- [[Error Log]]
- [[Evidence Gap]]
- [[Contradictory Evidence]]

## Safety boundary

This is a written and diagrammatic classification block. It authorises no access, switching, isolation, opening equipment, testing, measurement, fault creation, resetting, disconnection, alteration, repair, energisation, commissioning, certification or verification. Exact definitions, clauses, fault-current values, device characteristics, operating times, test methods and jurisdiction-specific requirements remain `reference_check_required`.

Stop when the loop or initiating condition is incomplete, material evidence conflicts, a device response depends on unverified data, or practical authority and procedure are unclear.

## References and currency

- Current authorised AS/NZS 3000 edition and applicable amendments.
- Applicable legislation, regulator guidance, network rules, manufacturer instructions, workplace procedures and RTO requirements.
- [Learning Design](../LEARNING_DESIGN.md)
- [Content, Standards and Copyright Policy](../CONTENT_AND_COPYRIGHT.md)

This note uses original explanations, workflows, diagrams and scenarios. It does not reproduce standards tables, figures, device curves, systematic wording, official values or assessment material. It remains `review-required` and not `technically-reviewed`.

## Navigation

- **Previous:** [[12-Week Day 08 - Circuit Quantities Load Reasoning and Prerequisite Calculation Check]]
- **Next:** [[12-Week Day 10 - Protective-Device Roles and Protection Boundaries]]
- **Map of content:** [[Protection Fundamentals]]