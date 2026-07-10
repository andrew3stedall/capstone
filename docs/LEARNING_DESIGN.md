# Learning Design

## Learning model

Capstone Ready should combine five complementary activities:

1. **Acquire** — encounter a concept through concise explanation and worked examples.
2. **Organise** — connect the concept to prerequisites, related rules and practical tasks.
3. **Retrieve** — answer questions or recall procedures without looking.
4. **Apply** — use the concept in calculations, wiring, testing and fault diagnosis.
5. **Reflect** — review errors, confidence and saved notes, then plan the next study action.

Reading alone is insufficient. The application should repeatedly move learners from recognition to retrieval and application.

## Cognitive-load principles

- Break complex procedures into meaningful stages, not arbitrary tiny steps.
- Keep essential diagrams beside the explanation they support.
- Avoid decorative motion, low-contrast text and dense dashboards.
- Reveal advanced detail progressively.
- Keep terminology consistent across articles, questions and simulations.
- Do not show unnecessary controls during a practical sequence.
- Explain one source of failure at a time during remediation.

## Retrieval practice

Important concepts should reappear in different forms:

- direct recall;
- scenario selection;
- calculation;
- diagram interpretation;
- ordered procedure;
- fault diagnosis;
- explanation in the learner's own words.

Repeated questions should vary context rather than merely shuffle answer order.

## Spaced review

The review queue should prioritise:

- safety-critical items;
- recently failed items;
- concepts with low retrieval strength;
- overdue cards;
- weak prerequisite concepts;
- topics relevant to the learner's upcoming assessment date.

A card should not be considered mastered because it was answered correctly once.

## Interleaving

Practice sessions should gradually mix related domains, for example:

- cable protection with voltage drop;
- MEN concepts with fault-loop reasoning;
- isolation with alternate supplies;
- testing sequence with fault diagnosis;
- switching circuits with polarity.

Early learning may remain blocked by topic; later practice should be interleaved.

## Worked examples and fading

For calculations and procedures:

1. show a complete worked example;
2. require completion of selected steps;
3. provide only key prompts;
4. require independent completion;
5. vary the context and values.

## Error-driven remediation

Incorrect answers should map to misconceptions, not only topics. Example misconception records:

- assumes an RCD replaces overcurrent protection;
- treats opening a wall switch as safe isolation;
- confuses neutral continuity with protective earthing continuity;
- believes one main switch necessarily removes alternate supplies;
- selects conductor size using load current alone.

Remediation should direct the learner to the smallest useful explanation and then a fresh application question.

## Confidence calibration

Before revealing an answer, optionally ask for confidence:

- guessing;
- unsure;
- reasonably confident;
- certain.

High-confidence errors are especially important because they indicate dangerous misconceptions. Progress reporting should distinguish knowledge from confidence.

## Highlighting and note-taking

Highlighting is useful only when it changes later learning. The interface should discourage highlighting whole pages and encourage selecting the smallest meaningful passage.

After highlighting, offer one high-value action:

- explain it in your own words;
- turn it into a question;
- attach it to a practical scenario;
- schedule it for review;
- add it to a procedure checklist.

## Learning module template

Each module should contain:

```yaml
id: stable-slug
title: Human-readable title
domain: testing
level: foundation | intermediate | capstone
jurisdiction: AU | NZ | state-specific | general
source_status: original-summary | official-public | licensed-reference
standard_references:
  - standard: AS/NZS 3000
    edition: 2018
    clause: reference-only
reviewed_on: YYYY-MM-DD
safety_critical: true
prerequisites: []
related_modules: []
related_questions: []
related_simulations: []
```

Recommended article structure:

1. What you will learn
2. Why it matters
3. Core idea
4. Visual or worked example
5. Practical application
6. Common errors
7. Safety checkpoint
8. Recall check
9. Practice activity
10. Related topics
11. References and currency notice

## Practical procedure template

A procedure module should explicitly separate:

- purpose;
- preconditions;
- hazards and controls;
- equipment required;
- sequence;
- expected observations/readings;
- stop conditions;
- result interpretation;
- documentation;
- common errors;
- assessor/RTO variations.

Safety-critical procedures must not be generated from memory alone. They require review against authorised current material.

## Assessment design

Questions should test the intended capability rather than reading tricks. Avoid:

- ambiguous wording;
- obscure trivia with no practical value;
- distractors that are obviously absurd;
- grading formatting more than reasoning;
- claiming exact RTO pass criteria without evidence.

Assessment reports should separate:

- correct result;
- correct process;
- safe process;
- quality of explanation;
- confidence;
- time taken.

## Accessibility and inclusion

- Minimum body text target: 16 px; 18 px preferred for long-form learning.
- Line height around 1.5–1.7.
- No font weights below 400 for essential text.
- WCAG AA contrast minimum.
- Keyboard access for highlights and simulator controls.
- Labels and patterns in addition to conductor colours.
- Captions/transcripts for audio and video.
- Plain-language explanations without removing correct technical terminology.
