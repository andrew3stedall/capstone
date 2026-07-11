# Application Architecture

**State:** implementation note  
**Milestone:** 2  
**Decision record:** [ADR-001](../architecture/ADR-001-application-architecture.md)

## Purpose

The application architecture separates routes, product features, reusable interface components, structured learning content and pure learning logic.

## Layers

- `app/` — route composition, metadata and deep links.
- `components/` — accessible shell and reusable presentation primitives.
- `features/` — readiness, learning, practice, simulation, review, mock and progress experiences.
- `content/` — Zod-validated original learning modules and question records.
- `lib/` — pure readiness and prioritisation transformations.
- `tests/` — behaviour checks for critical transformations.

## Product routes

- [[Readiness]]
- [[Knowledge Library]]
- [[Practice Mode]]
- [[Practical Simulator]]
- [[Personal Notebook]]
- [[Assessment Mode]]
- [[Progress Model]]
- [[Reference and Currency]]

## Content flow

```text
Source metadata
  → validated content record
  → learning/practice feature
  → route renderer
  → learner evidence
  → pure readiness/prioritisation transforms
```

No source PDF, copied standards wording, tables or figures are part of this flow.

## Prerequisites

- [[Learning and Memory System]]
- [[Misconception Model]]
- [[AS-NZS-3000-2018-Index]]

## Related concepts

- [[Knowledge Library]]
- [[Node Graph Engine]]
- [[Instrument Engine]]
- [[Learning Mode]]
- [[Practice Mode]]
- [[Assessment Mode]]

## Practical application

The simulator route now proves the tap-source/tap-destination and activity-log interaction contract without claiming electrical simulation. The graph, instrument, fault and assessment engines remain independent future modules.

## Assessment relevance

Architecture does not define pass criteria. It provides traceable content status, source metadata and separate learning modes so later reviewed assessment content can be represented without presenting variable RTO details as universal.

## References

- `docs/ROADMAP.md`
- `docs/UI_DESIGN_SYSTEM.md`
- `docs/LEARNING_DESIGN.md`
- `docs/SIMULATOR_ARCHITECTURE.md`
