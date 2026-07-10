# ADR-001: Route and feature-module application architecture

- **Status:** Accepted
- **Date:** 2026-07-10
- **Milestone:** 2 — Application architecture refactor

## Context

The initial application implemented the dashboard, learning paths, practice, mock concepts, calculators and progress in one client component and one stylesheet. That proved the product direction but coupled navigation, content, state and presentation. Essential interface text also fell below the minimum sizes defined in `UI_DESIGN_SYSTEM.md`.

## Decision

Capstone Ready uses the Next.js App Router with thin route entry points and feature-owned components.

```text
app/                  Route composition and metadata
components/           Shared app-shell and UI primitives
features/             Product-domain components and client state
content/              Runtime-validated learning and question records
lib/                  Framework-independent learning transformations
tests/                Core transformation tests
docs/                 Product, learning and architectural authority
```

Routes now exist for:

- readiness;
- learning library and individual modules;
- practice and calculators;
- simulation foundation;
- review;
- mock assessment concepts;
- progress;
- references and currency.

## Content boundary

Learning modules and practice questions are stored as original structured records. Zod schemas validate identifiers, metadata, content states, source records, options and answer ranges at build/runtime import.

Content status is explicit. Current learning paths are outlines and practice items are `draft-unverified`; neither is presented as technically reviewed material.

## State boundary

Interactive session state stays inside feature client components. Content, route composition and most presentation remain server-renderable. Device or account persistence is deferred until the personal learning milestone.

Readiness and prioritisation calculations live in a framework-independent module so they can be tested without rendering the UI.

## Design-system application

The global stylesheet implements the documented semantic colour roles and typography scale. Body text starts at 16 px, lesson prose targets 18 px, controls use 44 px minimum targets, focus styles are visible and reduced motion is respected.

Wide reading content and simulator workspaces use separate layouts. Mobile navigation preserves Learn, Practice, Simulate and Review access without retaining the prior dense dashboard.

## Consequences

### Benefits

- routes can evolve independently;
- content fails early when metadata is invalid;
- future Markdown/MDX can map onto the same module records;
- graph and assessment engines can remain independent from rendering;
- core learning calculations are testable;
- the UI aligns with documented readability requirements.

### Trade-offs

- the current review and simulation routes are architectural foundations, not complete engines;
- content is still compiled with the application rather than loaded from a CMS;
- account persistence and stable highlight anchors remain future work;
- route-level error, loading and offline experiences need a later hardening slice.

## Alternatives considered

- Keeping a single-page state router was rejected because it preserved coupling and weakened deep links.
- Introducing a global state library was deferred because current state is local and does not justify the dependency.
- Adding complete standards-derived module content was rejected because Milestone 2 is architectural and the source policy requires original, reviewed learning material.

## Related decisions and documentation

- [[Application Architecture]]
- [UI design system](../UI_DESIGN_SYSTEM.md)
- [Learning design](../LEARNING_DESIGN.md)
- [Product specification](../PRODUCT_SPECIFICATION.md)
- [Simulator architecture](../SIMULATOR_ARCHITECTURE.md)
- [Content and copyright policy](../CONTENT_AND_COPYRIGHT.md)
