# Product and Feature Specification

## Information architecture

```text
Home / Readiness
├── Learn
│   ├── Theory
│   ├── Practical
│   ├── Standards-guided library
│   └── Saved study material
├── Practice
│   ├── Questions
│   ├── Calculations
│   ├── Wiring exercises
│   ├── Testing trainer
│   └── Fault finding
├── Simulate
│   ├── Circuit builder
│   ├── Virtual instruments
│   ├── Full practical board
│   └── Assessment mode
├── Review
│   ├── Highlights
│   ├── Notes
│   ├── Flashcards
│   ├── Cheat sheets
│   └── Due reviews
├── Mock assessments
├── Progress
└── Reference
```

## Capstone orientation

The orientation area should explain:

- what capstone assessment is intended to verify;
- the distinction between knowledge, practical performance and continuous safety assessment;
- the need to confirm the exact format and pass requirements with the learner's RTO and regulator;
- likely assessment activities, without presenting variable details as universal;
- tools, preparation, assessment-day workflow and common avoidable errors.

## Knowledge library

The library is the deep reference layer. Articles should be short enough to scan but linked into broader topic paths.

Every article should support:

- overview and learning objective;
- why the concept matters;
- prerequisite concepts;
- plain-language explanation;
- diagram or worked example where useful;
- safety implications;
- common misconceptions and errors;
- practical application;
- assessment relevance;
- quick knowledge check;
- links to practice and simulation;
- official references and review metadata.

## Highlight-to-learn system

Users can select text within original platform content and choose:

- **Highlight**
- **Add note**
- **Save as key concept**
- **Create flashcard**
- **Add to revision sheet**

Recommended semantic highlight types:

| Type | Purpose |
|---|---|
| Key rule | A compliance or safety requirement |
| Concept | An explanation that supports understanding |
| Procedure | A sequence or method to rehearse |
| Warning | A dangerous mistake or common failure |
| Formula | A relationship or calculation worth recalling |
| Question | Something the learner still needs to resolve |

Colour must not be the only indicator. Each type also needs an icon, label or pattern.

### Stable anchors

Highlights should not depend only on raw character offsets because article revisions can move text. Store:

- article and version IDs;
- selected text;
- surrounding prefix and suffix;
- block or paragraph ID;
- start/end offsets within the block;
- creation timestamp;
- migration status when content changes.

## Personal notebook

The notebook automatically groups highlights and notes by topic, source article, assessment domain and user tag. It should support:

- manual collections;
- search and filtering;
- backlinks to source context;
- export to Markdown or PDF;
- conversion into flashcards;
- pinning critical procedures;
- marking notes as resolved or outdated.

## Flashcards and spaced retrieval

Flashcards may be written manually or generated as editable drafts from selected content. The learner must approve generated cards before they enter review.

Card types:

- question and answer;
- cloze deletion;
- identify a component or terminal;
- order a procedure;
- interpret a reading;
- diagnose from symptoms;
- formula and application.

Use an adaptive scheduling algorithm rather than a fixed Day 1/3/7/30 schedule. The product can start with a simple confidence-based scheduler and later adopt FSRS or an equivalent evidence-based approach.

## Questions and practice

Question formats should include:

- multiple choice;
- multiple response;
- calculation with units;
- ordering steps;
- matching terms;
- diagram labelling;
- identify the unsafe condition;
- choose the next test;
- interpret measured results;
- fault diagnosis;
- short explanation.

Feedback should explain why the correct answer is right and why plausible distractors are wrong. Safety-critical misconceptions should trigger targeted remediation.

## Practical learning

Practical learning should be separated from theory in navigation, but cross-linked at concept level.

Initial exercise families:

- one-way lighting;
- two-way switching;
- intermediate switching;
- socket-outlet circuits;
- switchboard component identification;
- main switch, protective device and RCD arrangements;
- neutral and earth bar concepts;
- MEN conceptual model;
- safe isolation sequence;
- visual inspection;
- de-energised verification;
- energised verification where appropriate;
- fault finding and commissioning.

Exact procedures and accepted values must be derived from current authorised sources and RTO-approved methods.

## Learning, practice and exam modes

### Learning mode

- explanations and prompts;
- highlighted current paths;
- expected reading ranges;
- corrective feedback;
- ability to reveal the next step.

### Practice mode

- limited hints;
- realistic readings;
- explanation after submission;
- no punitive timer by default.

### Assessment mode

- no hints;
- controlled time limit where appropriate;
- randomised but validated scenarios;
- process logging;
- safety-critical gates;
- final report separating knowledge, process, result and safety.

## Progress model

Do not reduce competence to one percentage. Track:

- content coverage;
- retrieval strength;
- question accuracy;
- practical procedure accuracy;
- safety-critical errors;
- calculation accuracy;
- time since last review;
- confidence calibration;
- performance by domain and jurisdiction.

## Future features

- daily fault challenge;
- instructor-created study sets;
- cohort and class dashboards;
- offline/mobile study packs;
- voice-guided procedure rehearsal;
- collaborative notes with moderation;
- photo-assisted practice-board review, only after feasibility and safety validation;
- 3D board exploration where it materially improves learning;
- standards-version change impact reports;
- multilingual glossary while retaining Australian trade terminology.