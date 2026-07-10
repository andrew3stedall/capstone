# Delivery Roadmap

## Current position

The repository contains a functional Next.js skeleton with a dashboard, learning paths, practice questions, mock-exam concepts, calculators and progress views. The next stage should replace demonstration-only content and monolithic UI with a structured content and learning platform.

## Milestone 1 — Documentation and content foundation

Deliverables:

- canonical product, learning, UI, simulator and copyright documentation;
- Obsidian-style knowledge base and maps of content;
- AS/NZS 3000 structural learning index;
- source metadata and review-status conventions;
- learning module, procedure, question and scenario templates;
- initial product backlog.

Exit criteria:

- Codex/Copilot can identify product principles and constraints without relying on chat history;
- no copyrighted PDF or reproduced standards tables are committed;
- major product concepts are linked and discoverable.

## Milestone 2 — Application architecture refactor

Deliverables:

- split the current large page into routes, feature modules and reusable components;
- define content types and validation schemas;
- establish accessible design tokens and typography;
- add navigation for Learn, Practice, Simulate, Review and Progress;
- add tests for critical data transformations.

Suggested routes:

```text
/app
  /learn
  /learn/[module]
  /practice
  /simulate
  /review
  /mock
  /progress
  /reference
```

## Milestone 3 — Knowledge library MVP

Deliverables:

- content rendering from Markdown/MDX or structured content;
- module metadata and backlinks;
- table of contents, glossary and search;
- source/version notices;
- first technically reviewed modules covering safety, fundamentals, Section 2 concepts and verification overview.

## Milestone 4 — Personal learning system

Deliverables:

- authentication and learner profile;
- text highlights with stable anchors;
- notes and collections;
- personal notebook;
- editable flashcard creation;
- due-review queue;
- Markdown export.

## Milestone 5 — Practice engine

Deliverables:

- reusable question schema and renderer;
- multiple-choice, ordering, calculation and diagram questions;
- explanation and misconception mapping;
- confidence rating;
- adaptive practice session generation;
- domain-level mastery reporting.

## Milestone 6 — Testing trainer

Deliverables:

- procedure state machine;
- virtual instrument selection;
- probe-placement interaction;
- scenario-specific readings;
- safe isolation rehearsal;
- visual inspection and verification modules;
- separate grading for safety, process and result.

## Milestone 7 — Circuit and fault simulator

Deliverables:

- graph engine independent of rendering;
- component and terminal definitions;
- desktop and mobile wire interactions;
- one-way, two-way, intermediate and socket exercises;
- fault transformations;
- path tracing and learning feedback;
- unit tests for each valid and faulty topology.

## Milestone 8 — Mock capstone experience

Deliverables:

- configurable theory and practical mock modes;
- validated random scenario generation;
- timer options;
- no-hint assessment mode;
- final competency report;
- targeted remediation plan;
- explicit RTO/jurisdiction disclaimer and configuration.

## Milestone 9 — Full content coverage

Deliverables:

- structured original learning modules across Sections 1–8 and relevant appendices;
- complete relationship graph;
- reviewed diagrams, scenarios, questions and simulator links;
- content currency dashboard;
- amendment impact workflow;
- qualified technical review and legal/licensing review.

## Milestone 10 — Advanced capabilities

Potential work, subject to evidence and feasibility:

- offline and installable PWA experience;
- instructor and cohort tools;
- voice-guided rehearsal;
- photo-assisted practice-board feedback;
- 3D exploration;
- daily challenges;
- standards-change notifications;
- additional Australian licensing pathways.

## Immediate Codex brief

1. Read all files under `docs/` before changing the app.
2. Audit the existing `app/page.tsx` and styles against `UI_DESIGN_SYSTEM.md`.
3. Propose a route/component/data refactor without deleting current capabilities.
4. Implement Milestone 2 in small, reviewable pull requests.
5. Do not invent standards requirements or pass criteria.
6. Do not add copied standards text, tables, figures or the uploaded PDF.
7. Preserve mobile usability and add accessibility checks.
8. Document architectural decisions and update the knowledge base as features are implemented.

## Definition of done for every feature

- linked to a documented learning or product objective;
- responsive on mobile and desktop;
- keyboard and screen-reader behaviour considered;
- loading, empty, error and offline states considered where relevant;
- no unsupported safety or compliance claim;
- original content with source metadata;
- tests for core logic;
- documentation and backlinks updated;
- no regression to typography or contrast requirements.