# ADR-002: Structured knowledge content

- Status: accepted
- Date: 2026-07-11
- Decision owners: product and engineering
- Related: [[Knowledge Library]], [[Application Architecture]]

## Context

Milestone 3 needs complete learning articles, reliable metadata, search, tables of contents, backlinks and source currency notices. The application already validates catalogue content with Zod. Adding a second MDX toolchain at this stage would duplicate metadata and increase rendering risk.

Safety-critical material must also expose its editorial state. A draft cannot be represented as technically reviewed until a suitably qualified person records that review.

## Decision

Store the knowledge-library MVP as typed structured content validated by the existing Zod schema. A module contains metadata, prerequisites, tags, related modules, source records and ordered semantic sections. Rendering remains separate from content.

Search indexes titles, summaries, objectives, tags and section text. Backlinks are derived from prerequisite and related-module relationships. Exact standards requirements remain outside the repository; content links learners to authorised current sources.

The four Milestone 3 modules use `review-required`, a null reviewer and a visible source-currency notice. Human review is an external publication gate, not a value inferred by code.

## Consequences

- Content errors fail validation during build.
- UI components can render every module consistently and accessibly.
- Structured content can later be migrated to MDX or a CMS without changing the learner-facing model.
- Search is local and deterministic for the MVP.
- Technical review remains outstanding and cannot be automated.
