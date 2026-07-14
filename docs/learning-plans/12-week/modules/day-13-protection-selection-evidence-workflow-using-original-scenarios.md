---
id: 12-week-day-13-protection-selection-evidence-workflow
 title: Day 13 — Protection-Selection Evidence Workflow Using Original Scenarios
domain: protection-and-evidence
level: foundation
jurisdiction: AU-NZ
source_status: original-learning-design
content_status: review-required
standard_references:
  - standard: AS/NZS 3000
    edition: "2018"
    clause: reference_check_required
reviewed_on: 2026-07-14
safety_critical: true
reference_check_required: true
technical_reviewer: pending
prerequisites:
  - Day 9 — Overload, Short-Circuit and Fault-Current Distinctions
  - Day 10 — Protective-Device Roles and Protection Boundaries
  - Day 11 — RCD Purpose, Limitations and Interaction with Other Protection
  - Day 12 — Rest, Retrieval and Misconception Repair
related_modules:
  - Day 12 — Rest, Retrieval and Misconception Repair
  - Day 14 — Week 2 Protection Integration Checkpoint
related_questions:
  - 12-week-day-13-protection-evidence-workflow
related_simulations: []
---

# Day 13 — Protection-Selection Evidence Workflow Using Original Scenarios

> **Currency and scope notice:** This module teaches a written evidence workflow for analysing fictional protection-selection scenarios. It does not provide device ratings, cable sizes, fault-current values, operating times, clause answers, test procedures or authority to select, install, reset, test or alter equipment. Exact requirements remain `reference_check_required`. Current authorised standards, legislation, regulator guidance, manufacturer instructions, workplace procedures and RTO requirements remain controlling. This module is not `technically-reviewed`.

## 1. Outcome and entry check

### Learning objectives

By the end of this module, the learner should be able to:

1. convert a fictional circuit description into a structured protection-evidence record;
2. distinguish supplied facts, derived facts, assumptions and missing evidence;
3. identify the protected interest and required protection function before naming a device;
4. separate overload, short-circuit, earth-fault, residual-current and work-control questions;
5. locate the categories of authorised sources needed to verify a protection decision without inventing clause numbers;
6. state a supported, conditional or unresolved conclusion whose certainty matches the available evidence;
7. identify at least three changes that would invalidate or reopen an earlier conclusion;
8. reject unsafe requests to energise, reset, test or alter equipment; and
9. complete an original scenario response scoring at least 10 of 12, with no zero in evidence control, protection separation or safety boundary.

### Entry check

Without notes, answer these prompts in one or two sentences each:

1. Why does a protective-device name not prove suitability?
2. Distinguish overload current from short-circuit current.
3. State one role an RCD may contribute and two conclusions it does not automatically prove.
4. What is the difference between a supplied fact and an assumption?
5. What should happen when the supply arrangement or fault path is unclear?
6. Name two actions this written module does not authorise.

Mark each answer **confident**, **partly confident** or **guessing**. Any confident but incorrect response becomes a priority correction before the practical application.

## 2. Why it matters

Protection questions are often answered backwards: a familiar device is named first, then the learner searches for reasons to justify it. That approach hides missing evidence and encourages unsafe certainty.

A defensible process starts with the hazard and protected interest, identifies the required function, maps the current path and only then asks what authorised evidence would be needed to verify a device or arrangement.

The central discipline is:

> **Select the evidence path before attempting a protection conclusion.**

This matters in assessment because a correct-looking device choice supported by weak reasoning is not reliable evidence of competence. It matters in practice because changes in supply, conductor, load, installation method, fault level, device characteristics or circuit use can invalidate an earlier conclusion.

![A learner builds an evidence bridge from hazard and current path to a bounded protection conclusion](../../../assets/learning/12-week/day-13-protection-selection-evidence-workflow-using-original-scenarios/build-the-evidence-bridge.svg)

## 3. Core concepts and terminology

### Protected interest

A **protected interest** is the person, conductor, equipment, property or continuity objective that a protective measure is intended to safeguard. Naming it prevents vague statements such as “the breaker protects everything.”

### Protection function

A **protection function** is the specific job required, such as responding to overload, interrupting a short-circuit condition, supporting automatic disconnection under defined fault conditions, providing additional residual-current protection, or controlling work through isolation. Different functions require different evidence.

### Selection criterion

A **selection criterion** is a condition that must be checked before a device or arrangement can be considered suitable. Examples of criterion categories include current-carrying relationship, breaking capacity, operating characteristic, coordination, conductor withstand, circuit coverage and environmental suitability. Exact limits and methods require authorised verification.

### Evidence class

Use four evidence classes:

- **Supplied fact:** explicitly stated in the scenario or an authorised record.
- **Derived fact:** calculated or logically obtained from supplied facts using a stated method.
- **Assumption:** treated as true without adequate support.
- **Missing evidence:** information required before the conclusion can be verified.

### Evidence chain

An **evidence chain** connects the scenario, applicable source, criterion, evidence and conclusion. If one link is absent, the conclusion must remain conditional or unresolved.

### Applicability

**Applicability** asks whether a source or requirement actually governs the described installation, circuit, location, supply arrangement and time. A technically accurate requirement from the wrong context does not support the decision.

### Completeness

**Completeness** asks whether all material protection functions and boundary conditions have been considered. Evidence for overload protection alone does not answer residual-current, fault-path, isolation or coordination questions.

### Bounded conclusion

A **bounded conclusion** states only what the evidence supports, identifies unresolved matters and avoids implying approval, installation suitability or permission to work.

### Reopening trigger

A **reopening trigger** is a changed fact that requires the decision to be checked again. Typical trigger categories include a changed load, conductor, installation method, protective device, supply arrangement, fault level, environmental condition, circuit use or authorised-source edition.

## 4. Rule-finding workflow

Use **S-E-L-E-C-T**:

1. **S — State the scenario and protected interest:** identify the circuit purpose, hazard and what must be protected.
2. **E — Extract and classify evidence:** separate supplied facts, derived facts, assumptions and missing evidence.
3. **L — List the required functions:** consider overload, short circuit, fault path and disconnection, residual-current protection, coordination and work control without assuming all apply identically.
4. **E — Establish source applicability:** identify the current authorised standard, legislation, network rule, manufacturer data, workplace procedure or RTO requirement needed for each criterion.
5. **C — Check criteria and conflicts:** test each function against available evidence, note interactions and stop where a value, characteristic or arrangement is unverified.
6. **T — Tell a bounded conclusion and triggers:** state what is supported, what remains unresolved, what would reopen the decision and what actions remain outside authority.

```mermaid
flowchart TD
    A["Describe circuit, hazard and protected interest"] --> B["Classify supplied, derived, assumed and missing evidence"]
    B --> C["List separate protection and work-control functions"]
    C --> D["Map each function to an authorised source category"]
    D --> E{"Enough applicable evidence?"}
    E -->|"No"| F["Record missing evidence and stop the claim"]
    E -->|"Yes"| G["Check criteria, interactions and conflicts"]
    G --> H["Write bounded conclusion"]
    H --> I["Record reopening triggers and authority limits"]
```

The diagram shows that source lookup occurs after the protection questions are separated, but before a final conclusion. Missing evidence is a valid outcome; it is not permission to guess.

### Protection-evidence record

```text
Scenario identifier:
Circuit purpose and boundary:
Hazard or abnormal condition:
Protected interest:

Supplied facts:
Derived facts and method:
Assumptions to remove:
Missing evidence:

Protection functions considered:
Authorised source category for each function:
Selection criteria requiring verification:
Interactions or conflicts:

Supported findings:
Conditional findings:
Unresolved findings:
Reopening triggers:
Safety and authority boundary:
Next authorised action:
```

## 5. Visual model or worked example

### Evidence matrix model

```mermaid
flowchart LR
    H["Hazard or abnormal condition"] --> F["Required function"]
    F --> S["Applicable authorised source"]
    S --> C["Selection criterion"]
    C --> E["Installation and device evidence"]
    E --> Q{"Evidence complete?"}
    Q -->|"Yes"| B["Bounded supported finding"]
    Q -->|"Partly"| P["Conditional finding"]
    Q -->|"No"| U["Unresolved: obtain evidence"]
```

Each row of a protection decision should be traceable through this sequence. A device label without installation evidence cannot complete the chain.

### Worked original scenario

A fictional workshop circuit supplies a fixed machine. The scenario states that a circuit-breaker and an RCD are present. It gives a recorded design current but does not provide conductor capacity, installation method, protective-device characteristic, prospective fault-current evidence, supply arrangement, circuit coverage, coordination information or verification records. Another person proposes resetting the operated device and restarting the machine.

Apply S-E-L-E-C-T:

1. **State:** the protected interests may include people, conductors, equipment and property; the immediate abnormal condition is not yet established.
2. **Extract:** the named devices and recorded design current are supplied facts. Suitability, correct coverage and cause of operation are not supplied facts.
3. **List:** overload, short-circuit, earth-fault/disconnection, residual-current, coordination and work-control questions remain separate.
4. **Establish:** current authorised installation requirements, manufacturer device data, supply information, workplace isolation procedures and relevant records would be needed.
5. **Check:** multiple material criteria are missing, so no verified selection or operating conclusion is available.
6. **Tell:** the evidence supports only that named devices are recorded as present. It does not support reset, restart, safe-isolation, fault-clearance or suitability claims. Escalate through the authorised workplace process.

### Worked-example fading

For a second fictional scenario, provide only these headings and require the learner to complete the reasoning:

- circuit purpose and protected interest;
- supplied versus missing evidence;
- protection functions;
- applicable source categories;
- bounded conclusion; and
- reopening triggers.

Do not allow a device recommendation unless the scenario provides enough verified evidence and the learner clearly labels the conclusion as an educational finding requiring qualified review.

## 6. Practical application

### Scenario A — altered load

A fictional final subcircuit was documented for one fixed load. The equipment is replaced with a different unit. The circuit-breaker label is unchanged, and no updated load data, conductor record, installation method, manufacturer information or design review is supplied.

Produce a protection-evidence record that:

1. identifies the changed load as a reopening trigger;
2. separates known labels from verified characteristics;
3. lists the evidence needed to reconsider overload and short-circuit protection;
4. identifies any separate residual-current, fault-path and isolation questions; and
5. gives a bounded next action without proposing energisation or alteration.

### Scenario B — changed supply arrangement

A fictional installation gains an alternative supply. A previous protection note was written for the original supply only. No updated fault-level, earthing arrangement, device coordination, source-switching or manufacturer evidence is provided.

Explain why the earlier conclusion cannot simply be carried forward. Identify the source and installation evidence categories that must be rechecked.

### Scenario C — incomplete inspection record

A fictional inspection record lists device names and ratings but omits circuit identification, conductor details, test evidence, supply conditions and defect context. A supervisor asks whether the circuit “passes.”

Classify each available item, identify the missing evidence and state why the record is insufficient for an approval claim.

### Assessment task

Complete one original scenario containing:

- a defined circuit purpose;
- one changed condition;
- at least two named protection measures;
- one distracting but irrelevant fact;
- incomplete installation evidence; and
- one proposed unsafe action.

Submit:

1. a completed S-E-L-E-C-T record;
2. an evidence matrix with at least five rows;
3. a bounded conclusion;
4. three reopening triggers; and
5. a statement rejecting the unsafe action.

### Performance rubric

Score each category from **0 to 2**:

| Category | 0 | 1 | 2 |
|---|---|---|---|
| Scenario framing | device-first or vague | identifies some context | states circuit, hazard and protected interest clearly |
| Evidence classification | assumptions treated as facts | some categories separated | supplied, derived, assumed and missing evidence are consistently separated |
| Protection separation | merges functions | separates some functions | overload, short-circuit, fault/disconnection, residual-current and work control remain distinct |
| Source and criteria mapping | invents requirements | identifies broad sources | maps each function to applicable source and criterion categories |
| Conclusion and triggers | unsupported approval claim | conclusion partly bounded | supported, conditional and unresolved findings plus reopening triggers are explicit |
| Safety and authority | proposes reset, testing or work | vague caution | rejects unsafe action and states the authorised escalation path |

A score of **10–12**, with no zero in evidence classification, protection separation, or safety and authority, supports progression to Day 14. Otherwise complete one targeted varied re-attempt.

## 7. Common errors and safety checkpoint

### Common errors

- choosing a familiar device before identifying the protection function;
- treating a rating label as proof of characteristic, condition, coverage or suitability;
- combining overload, short-circuit, earth-fault and residual-current questions;
- inventing clause numbers or technical values from memory;
- using a calculation based on an unsupported input;
- ignoring supply arrangement, fault level, conductor or installation-method changes;
- treating device operation as proof that the cause is known or the circuit is safe;
- presenting an educational conclusion as technical approval;
- proposing reset, energisation, testing, access or alteration outside authority.

### Safety checkpoint

Stop the reasoning task and escalate when:

- damaged equipment, overheating, repeated operation, exposed parts or another immediate hazard is described;
- the scenario requires opening equipment, isolation, proving, measurement, testing, resetting, alteration, energisation or commissioning;
- a conclusion depends on an exact clause, value, characteristic, test result or supply condition that has not been verified;
- the supply arrangement, circuit identity or current path cannot be established from authorised evidence;
- the learner is asked to approve, certify or sign off work.

This module authorises no selection for construction, switching, isolation, opening, proving, measurement, testing, resetting, fault creation, alteration, repair, energisation, commissioning, certification or verification.

## 8. Retrieval and next links

### Closed-note retrieval

1. Recite S-E-L-E-C-T and explain each step.
2. Define protected interest, protection function, selection criterion and evidence chain.
3. Name the four evidence classes.
4. Explain the difference between applicability and completeness.
5. Give five separate protection or work-control questions.
6. State why a named device does not prove suitability.
7. Give four reopening triggers.
8. Write one bounded conclusion for a scenario with missing evidence.

### Exit task

Submit:

- the entry check with confidence ratings;
- one complete original protection-evidence record;
- the evidence matrix;
- the rubric score and one correction target;
- three reopening triggers; and
- one support need for Day 14, or “none identified.”

### Navigation

- **Plan:** [Twelve-Week Capstone Learning Plan](../MASTER_PLAN.md)
- **Knowledge note:** [[12-Week Day 13 - Protection-Selection Evidence Workflow Using Original Scenarios]]
- **Previous:** [Day 12 — Rest, Retrieval and Misconception Repair](day-12-rest-retrieval-and-misconception-repair.md)
- **Next:** Day 14 — Week 2 Protection Integration Checkpoint

### Reference and currency notice

This module uses original workflows, scenarios, diagrams, evidence records and assessment tools. It does not reproduce standards tables, figures, device curves, systematic clause wording, exact technical values or official assessment material. Current authorised sources and qualified review remain required before any protection selection, installation decision, operating claim or practical procedure is used beyond this written educational context.
