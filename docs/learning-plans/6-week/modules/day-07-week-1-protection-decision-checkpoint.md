---
id: 6w-day-07-week-1-protection-decision-checkpoint
title: Day 7 — Week 1 Protection Decision Checkpoint
domain: integrated-protection-reasoning
level: capstone
jurisdiction: AU-NZ
source_status: original-summary
content_status: review-required
standard_references:
  - standard: AS/NZS 3000
    edition: current-authorised-edition-required
    clause: reference_check_required
  - source: applicable legislation, regulator guidance, manufacturer information and RTO instructions
    edition: current
    clause: reference_check_required
reviewed_on: 2026-07-14
safety_critical: true
reference_check_required: true
technically_reviewed: false
quality_passes: []
prerequisites:
  - Day 1 — Program Orientation, Assessment Map and Source Hierarchy
  - Day 2 — Hazard, Risk, Exposure and Critical Controls
  - Day 3 — Fundamental Protection Concepts and Fault Types
  - Day 4 — Overload and Short-Circuit Protection Reasoning
  - Day 5 — Rest, Retrieval and Source-Navigation Correction
  - Day 6 — RCD Purpose, Limits and Coordination with Other Protection
related_modules:
  - Day 8 — Earthing Terminology and Component Identification
related_questions:
  - 6w-day-07-protection-decision-checkpoint
related_simulations: []
---

# Day 7 — Week 1 Protection Decision Checkpoint

> **Currency and safety notice:** This is an original paper-based cumulative checkpoint. It assesses reasoning, source control and uncertainty management; it is not an official RTO assessment and authorises no electrical work, testing, resetting, isolation or alteration. Exact clauses, values, device requirements, procedures and jurisdiction-specific claims remain `reference_check_required`. This module is `review-required`, not `technically-reviewed`.

## 1. Outcome and entry check

### Learning objectives

By the end of this block, the learner should be able to:

1. classify a fictional condition as normal operation, overload, short circuit, earth fault, leakage, residual-current imbalance, open circuit or unresolved;
2. distinguish hazard, exposure, consequence and critical control in a supplied scenario;
3. state separate residual-current, overcurrent and fault-path questions without substituting one for another;
4. select appropriate source families and explain why each is applicable;
5. grade every material claim as stated fact, authorised evidence or assumption;
6. identify missing evidence that blocks an exact conclusion;
7. produce a bounded recommendation within learner authority;
8. revise the decision when one scenario condition changes;
9. score at least 10 out of 12 on the checkpoint rubric with no zero in protection classification, evidence control or safety boundary.

### Entry check

Without notes, answer and rate confidence as **guessing**, **unsure**, **reasonably confident** or **certain**:

1. What is the difference between a hazard and an exposure pathway?
2. How does an overload differ from a short circuit?
3. What evidence is needed before claiming a protective device is suitable?
4. What does an RCD detect in a simple conceptual model?
5. Why does RCD presence not prove protective-earthing effectiveness?
6. Which source types can establish requirements, product limitations and local authority?
7. What is the correct response when a conclusion depends on an assumed current path?

Record high-confidence errors before continuing. They are priority remediation items, not reasons to reread the whole week.

## 2. Why it matters

Capstone questions rarely announce which single concept is being tested. A scenario may combine a reported symptom, incomplete circuit information, a protective-device label, a person proposing an unsafe action and several plausible causes. The assessment skill is to separate these strands before deciding what can be concluded.

A weak response jumps from one visible clue to a familiar answer. A defensible response:

- bounds the scenario;
- classifies the condition;
- identifies the protection objective;
- checks the current path and device evidence;
- selects applicable authorised sources;
- separates facts from assumptions;
- stops where evidence or authority ends.

![A learner passes scenario cards through classification, evidence and safety gates before reaching a bounded decision](../../../assets/learning/6-week/day-07-week-1-protection-decision-checkpoint/decide-through-gates.svg)

*Caption: The decision is earned by passing every gate, not by recognising one familiar label.*

## 3. Core concepts and terminology

### Integrated protection decision

An **integrated protection decision** combines several distinct questions while keeping their evidence separate. It does not merge overload, short-circuit, residual-current, fault-path and work-control reasoning into one vague idea of “safety.”

### Decision claim

A **decision claim** is a statement the learner intends to rely on, such as “the symptom is consistent with overload” or “the supplied evidence is insufficient to identify the operating function.” Each claim needs evidence proportionate to its consequence.

### Blocking evidence gap

A **blocking evidence gap** is missing information that prevents a reliable conclusion. Examples include unknown supply arrangement, uncertain conductor grouping, incomplete device markings, absent manufacturer data or an unverified source-current assumption.

### Bounded conclusion

A **bounded conclusion** states:

1. what the supplied facts support;
2. what remains possible but unproven;
3. what exact evidence is missing;
4. what action is outside learner authority;
5. where qualified escalation is required.

### Decision revision

**Decision revision** is the disciplined re-evaluation of a conclusion after a material scenario condition changes. It tests transfer rather than memorisation.

### Evidence grades

- **Grade A — stated fact or supplied observation:** scenario detail, visible marking, authorised drawing detail or supplied result.
- **Grade B — applicable authorised evidence:** current requirement, manufacturer instruction, approved design, workplace procedure or competent direction.
- **Grade C — assumption or hypothesis:** inferred cause, guessed path, presumed device suitability or unverified exception.

Grade C may guide the next question. It cannot support an exact safety-critical conclusion.

## 4. Rule-finding workflow

Use **D-E-C-I-D-E**.

1. **D — Define the scenario boundary.** Record supply, circuit, load, users, environment, reported symptom, available documents and learner authority.
2. **E — Establish the condition class.** Separate normal operation, overload, short circuit, earth fault, leakage, residual-current imbalance, open circuit and unresolved conditions.
3. **C — Choose the protection questions.** State separate overcurrent, residual-current, fault-path and work-control questions that actually arise.
4. **I — Identify applicable evidence.** Select current authorised requirements, manufacturer information, approved drawings, supplied observations and relevant RTO or workplace instructions.
5. **D — Detect gaps and contradictions.** Grade claims A, B or C; identify missing paths, ratings, source conditions, device characteristics or authority.
6. **E — Express and evaluate the bounded decision.** State what is supported, what is conditional, the stop condition and how the answer changes if a material fact changes.

```mermaid
flowchart TD
    A["Define scenario and authority"] --> B["Establish condition class"]
    B --> C["Separate protection questions"]
    C --> D["Identify applicable Grade A and B evidence"]
    D --> E{"Blocking gap or contradiction?"}
    E -->|"Yes"| F["State unresolved outcome and escalation"]
    E -->|"No"| G["Form bounded decision"]
    G --> H["Change one scenario condition"]
    H --> I["Re-evaluate classification, evidence and decision"]
```

The changed-condition step is mandatory. A response that cannot adapt may be a memorised script rather than a usable reasoning method.

### Source-selection matrix

| Question | Likely source family | What it can establish | What it does not establish alone |
|---|---|---|---|
| Applicable installation requirement | Current authorised standard, legislation or regulator guidance | Requirement and scope | Actual installation condition |
| Device capability or limitation | Manufacturer information | Product characteristics and application conditions | Correct installation or circuit suitability |
| Installed arrangement | Approved drawing, schedule, inspection record or supplied observation | Documented or observed arrangement | Hidden continuity, condition or performance |
| Learner authority and assessment process | RTO instruction and workplace procedure | Permitted task and evidence format | General technical compliance outside scope |

## 5. Visual model or worked example

### Four-question separation model

```mermaid
flowchart LR
    S["Fictional scenario"] --> O["Overcurrent question"]
    S --> R["Residual-current question"]
    S --> F["Fault-path question"]
    S --> W["Work-control question"]
    O --> C["Combined bounded conclusion"]
    R --> C
    F --> C
    W --> C
```

The branches may interact, but they do not share identical evidence. A protective-device label cannot answer every branch.

### Worked example

**Scenario:** A fictional metal-cased appliance circuit operates a combined protective device after a second portable load is connected. The schedule identifies the circuit, but the scenario gives no conductor-routing evidence, appliance data, device settings, source conditions or authorised test results. A person proposes repeated resetting.

Apply D-E-C-I-D-E:

1. **Define:** record the circuit, two loads, metal enclosure, combined device, reported operation and proposed reset. Supply arrangement and practical authority are incomplete.
2. **Establish:** overload, residual-current operation, equipment fault, neutral-path issue and another unresolved cause remain possible. The operating function is not identified.
3. **Choose:** ask separate overcurrent, residual-current, fault-path and work-control questions.
4. **Identify:** require applicable installation rules, device and appliance manufacturer information, approved circuit information and authorised investigation evidence.
5. **Detect:** conductor grouping, device characteristics, load current, leakage behaviour, earthing effectiveness and cause are blocking gaps.
6. **Express:** do not reset or diagnose. State that operation is observed but its function and cause are unresolved; qualified investigation is required.

A bounded conclusion is:

> The supplied facts establish that a combined protective device operated after a load change, but they do not identify the operating function or cause. Overcurrent, residual-current, equipment, conductor-grouping and fault-path questions require separate authorised evidence. Repeated resetting is not justified. Exact requirements and investigation procedures remain `reference_check_required`.

## 6. Practical application

### Checkpoint scenario pack

Use a trainer-supplied fictional pack containing:

- a one-line circuit description;
- a simple schedule extract written for the exercise;
- two protective-device labels;
- three load descriptions;
- one reported symptom;
- one proposed action;
- five supplied facts;
- five deliberate evidence gaps.

Complete the following independently:

1. write the scenario boundary in no more than six lines;
2. classify the condition and list plausible alternatives;
3. state the four protection or control questions that apply;
4. create a source-selection table;
5. grade every claim A, B or C;
6. identify at least four blocking evidence gaps;
7. draw the relevant conceptual current paths without inventing wiring detail;
8. write a bounded conclusion and escalation statement;
9. change one material fact and revise the answer.

### Worked-example fading

The first scenario may include headings for each D-E-C-I-D-E step. For the second scenario, remove the headings and source prompts. For the third, provide only the scenario pack and response limit.

### Time control

- scenario reading and boundary: 10 minutes;
- classification and questions: 15 minutes;
- source and evidence map: 15 minutes;
- bounded conclusion: 10 minutes;
- changed-condition revision: 10 minutes;
- self-mark and remediation note: 10 minutes.

Stop after 70 minutes. Unfinished work becomes a targeted remediation item; it does not justify unsafe rushing.

### Performance rubric

Score each category **0–2**.

| Category | 0 | 1 | 2 |
|---|---|---|---|
| Protection classification | Selects a label without mechanism | Identifies a likely class but misses alternatives | Classifies by mechanism and records unresolved alternatives |
| Question separation | Treats one device as universal protection | Separates some functions | Clearly separates overcurrent, residual-current, fault-path and work-control questions |
| Source applicability | Uses generic or unsupported sources | Names sources without scope reasoning | Selects source families and explains applicability and limits |
| Evidence control | Presents assumptions as facts | Marks some uncertainty | Grades all material claims and identifies blocking gaps |
| Transfer and decision revision | Repeats the first answer unchanged | Revises one detail incompletely | Re-evaluates classification, evidence priorities and conclusion after the change |
| Safety and bounded conclusion | Proposes unauthorised action or false certainty | Gives general caution | States supported facts, uncertainty, stop condition, authority boundary and escalation |

A score below **10/12**, or any zero in **protection classification**, **evidence control** or **safety and bounded conclusion**, requires targeted remediation and a varied re-attempt. This is an educational threshold, not an official RTO pass mark.

## 7. Common errors and safety checkpoint

### Common errors

- **Choosing the device before classifying the condition.** Start with mechanism and path, not hardware familiarity.
- **Treating device operation as a diagnosis.** Operation is evidence of an event, not proof of cause.
- **Using RCD presence to close overcurrent or earthing questions.** These require separate evidence.
- **Assuming a schedule proves physical conductor routing.** Documents and installed condition are different evidence types.
- **Quoting a requirement without checking applicability.** Correct wording applied to the wrong scenario still produces a weak answer.
- **Listing every possible cause without prioritising evidence.** Identify the first blocking checks and explain why.
- **Writing “get an electrician” without a technical boundary.** State what is known, what is missing and why escalation is necessary.
- **Changing only the final sentence after the scenario changes.** Revisit classification, questions, evidence and conclusion.

### Safety checkpoint

This module authorises no opening, isolation, proving, testing, resetting, fault creation, bypassing, bridging, disconnection, replacement, alteration, energisation, measurement or commissioning.

Stop and seek qualified guidance when:

- the supply arrangement or source condition is uncertain;
- conductor routing, neutral grouping or fault-current path is assumed;
- exposed live parts, damage, moisture, burning, overheating or repeated operation are reported;
- device markings, manufacturer information or authorised requirements are incomplete;
- a person proposes repeated resetting, bypassing or alteration;
- the learner cannot distinguish the protective functions;
- the answer requires exact values, clauses, test methods or official assessment criteria not supplied by a current authorised source.

## 8. Retrieval and next links

### Closed-note retrieval

1. What are the six D-E-C-I-D-E steps?
2. Define a blocking evidence gap.
3. What are the four separate protection or control questions?
4. Why is device operation not a diagnosis?
5. What can manufacturer information establish?
6. What can an approved drawing fail to prove?
7. State the three evidence grades.
8. What must a bounded conclusion contain?
9. Why is changed-condition revision required?
10. State four stop conditions.

### Error-log remediation

Select no more than three errors from this checkpoint. For each:

1. name the failed distinction;
2. write the corrected rule in original words;
3. identify the evidence that would support it;
4. complete one varied re-attempt within 48 hours;
5. record whether confidence became better calibrated.

### Navigation

- **Program:** [Six-Week Capstone Learning Plan](../MASTER_PLAN.md)
- **Previous:** [Day 6 — RCD Purpose, Limits and Coordination with Other Protection](day-06-rcd-purpose-limits-and-coordination-with-other-protection.md)
- **Knowledge note:** [[Six-Week Day 07 - Week 1 Protection Decision Checkpoint]]
- **Next:** [Day 8 — Earthing Terminology and Component Identification](day-08-earthing-terminology-and-component-identification.md)

### References and review boundary

- AS/NZS 3000: use a current authorised copy and applicable amendments for exact requirements.
- Use current legislation, regulator guidance, manufacturer information, approved workplace procedures and RTO instructions as applicable.
- This module uses original explanations, scenarios, workflows, diagrams and assessment activities. It reproduces no standards table, figure, systematic clause wording, device curve or source PDF content.
- Exact clauses, limits, device characteristics, test methods, assessment criteria and jurisdiction-specific requirements remain `reference_check_required`.
- This module remains `review-required`, has not received qualified technical review and must not be labelled `technically-reviewed`.
