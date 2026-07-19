---
type: learning-note
program: twelve-week
status: review-required
jurisdiction: AU-NZ
source_status: original-summary
reviewed_on: 2026-07-18
safety_critical: true
reference_check_required: true
technical_reviewer: pending
---

# 12-Week Day 48 - Motors, Associated Protection and Control Boundaries

## Purpose

Extends [[12-Week Day 46 - Fixed Appliances and Local Isolation Reasoning]] and the remediation discipline from [[12-Week Day 47 - Rest, Retrieval and Installation-Defect Correction]] into motor power, control, protection and driven-equipment reasoning.

## Learning module

- [Day 48 — Motors, Associated Protection and Control Boundaries](../learning-plans/12-week/modules/day-48-motors-associated-protection-and-control-boundaries.md)

## Core method

Use **M-O-T-O-R-S**:

1. mark the equipment, task, electrical-energy, mechanical-energy, evidence, authority and decision boundaries;
2. observe evidence states, provenance, confidence and contradictions;
3. trace power, control and mechanical paths across all relevant operating states;
4. obtain current authorised evidence for unresolved claims;
5. relate functions without collapsing control, stopping, protection, isolation and safe-state reasoning; and
6. state a bounded conclusion, stress-test it with two material changes and reopen affected dependencies.

## Core concepts

- **Motor-system boundary:** all relevant equipment, conductive paths, controls, protection, driven equipment and energy sources included in the analysis.
- **First unsupported transition:** the earliest reasoning step where a conclusion exceeds its evidence.
- **Evidence owner:** the authorised source, person or reviewer responsible for resolving a gap.
- **Recheck trigger:** evidence or a changed condition that requires an earlier conclusion to reopen.
- **Material change:** a change capable of altering a source, control path, state, protective function, mechanical hazard or conclusion.
- **Automatic restart:** renewed operation caused by a retained or new command without a fresh local manual start action.

Classify evidence as stated fact, derived fact, supported inference, assumption, contradiction or evidence gap. Record confidence separately because certainty and correctness do not prove evidence quality.

## Key distinctions

- A power circuit supplies energy; a control circuit commands operation and may have a separate source.
- Starting, overload and fault conditions are distinct reasoning cases.
- Normal stopping, protection, isolation and mechanical safe-state claims require separate evidence.
- A contactor, stop control, interlock description or label does not by itself prove isolation.
- The driven machine, stored energy and automatic restart remain inside the relevant system boundary.
- A bounded educational conclusion is not a qualified technical conclusion.

## Practical applications

- map a fictional exhaust-fan motor dossier;
- retain conflicting drawings, labels, setting records and maintenance notes as competing evidence;
- identify the first unsupported transition from stopped operation to claimed safe state;
- assign evidence owners and recheck triggers;
- reopen dependent conclusions after a separate control supply, remote command, controller change, alternate source or changed driven load; and
- justify both affected and unaffected conclusions during two-condition transfer.

## Assessment relevance

Evaluate boundary completeness, source accounting, function separation, operating-state mapping, evidence provenance, contradiction handling, first-unsupported-transition control, evidence ownership, downstream reopening and two-condition transfer independently.

Use **secure**, **developing**, **unsupported** and `stop-required` as educational planning states. They are not official grades, competency outcomes, defect classifications, compliance decisions or technical approvals. No aggregate score or unofficial pass threshold applies.

## Blocking conditions

Readiness is blocked by an omitted credible electrical or mechanical energy source; treating a stop response, contactor state, label or drawing as proof of isolation or safe state; invented settings or functions; hidden contradictions; failure to identify the first unsupported transition; missing owners or triggers; fewer than two material transfer changes; incomplete reopening of affected conclusions; fatigue; or unauthorised practical activity.

## Related concepts

- [[Motor Circuits]]
- [[Control Circuits]]
- [[Overload Protection]]
- [[Fault Protection]]
- [[Functional Switching]]
- [[Isolation]]
- [[Automatic Restart]]
- [[Evidence Quality]]
- [[Confidence Calibration]]
- [[Change Propagation]]
- [[12-Week Day 49 - Week 7 Installation Planning Exercise]]

## Safety and references

This note authorises no approach, switching, isolation, opening, proving de-energised, testing, measurement, setting adjustment, mechanical intervention, installation, alteration, repair, energisation, commissioning, certification or field verification.

Exact motor protection, starting, isolation, source treatment, controller application, settings, device capability, conductor selection, driven-equipment safety and official assessment expectations require current authorised standards, applicable manufacturer information, regulator and RTO requirements, and qualified review.

- Current authorised AS/NZS 3000 material and amendments.
- Applicable motor, controller and driven-equipment manufacturer information.
- Approved current drawings, labels and setting records.
- Relevant regulator and RTO requirements.
- [Learning Design](../LEARNING_DESIGN.md)
- [Content, Standards and Copyright Policy](../CONTENT_AND_COPYRIGHT.md)

It remains `review-required`, `reference_check_required`, safety-critical and not `technically-reviewed`.

## Navigation

- Previous: [[12-Week Day 47 - Rest, Retrieval and Installation-Defect Correction]]
- Next: [[12-Week Day 49 - Week 7 Installation Planning Exercise]]
- Plan: [[Twelve-Week Capstone Learning Plan]]
- Map of content: [[Motors and Control]]
