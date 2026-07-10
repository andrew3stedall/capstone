# UI and Design System

## Design intent

Capstone Ready is a technical learning application, not a marketing site. The interface must remain readable during long study sessions and usable on a phone in short bursts.

Priority order:

1. legibility;
2. comprehension;
3. predictable interaction;
4. accessibility;
5. visual polish.

## Theme direction

Use a calm, practical workshop-and-reference aesthetic:

- warm off-white or very light neutral reading surfaces;
- near-black body text;
- restrained electrical orange for primary actions and urgency;
- deep green/teal for progress and verified states;
- blue for informational concepts;
- red only for hazards, destructive actions and critical errors;
- subtle borders instead of heavy shadows or glass effects.

Do not depend on conductor colours as the general brand palette. Electrical colour meanings must remain unambiguous inside diagrams and simulations.

## Typography

- Primary: `Inter`, `Atkinson Hyperlegible`, or a high-quality `system-ui` stack.
- Technical/numeric content: `JetBrains Mono` or system monospace.
- Body: minimum 16 px; target 18 px for lesson prose.
- Body line-height: 1.55–1.7.
- Body weight: 400–500.
- Labels: 500–600.
- Headings: 600–750.
- Never use essential text below weight 400.
- Avoid condensed, handwritten, display and all-cap fonts for long text.

Suggested scale:

```css
--text-xs: 0.8125rem;
--text-sm: 0.9375rem;
--text-base: 1rem;
--text-reading: 1.125rem;
--text-lg: 1.25rem;
--text-xl: 1.5rem;
--text-2xl: 1.875rem;
--text-3xl: 2.25rem;
```

## Reading layout

- Article measure: 68–78 characters per line; usually 720–820 px.
- Keep article content separate from wide simulator workspaces.
- Use a persistent but collapsible table of contents on desktop.
- Use a bottom sheet or drawer for article navigation on mobile.
- Section spacing: 24–40 px.
- Paragraph spacing: 12–20 px.
- Avoid dense three-column dashboard layouts on small screens.

## Contrast and accessibility

- Meet WCAG AA at minimum.
- Target 4.5:1 for normal text and 3:1 for large text and meaningful UI boundaries.
- Use icons, labels or patterns in addition to colour.
- Provide visible focus states.
- All interactions must be keyboard accessible where practical.
- Respect reduced-motion settings.
- Touch targets should generally be at least 44×44 CSS pixels.

## Semantic colour roles

```css
--surface-page: #f7f5ef;
--surface-card: #ffffff;
--surface-muted: #eef1ed;
--text-primary: #17201d;
--text-secondary: #46534e;
--border: #cbd3cf;
--action-primary: #c84f20;
--action-primary-hover: #a83f18;
--success: #1f6f5b;
--info: #245f8f;
--warning: #8a5a00;
--danger: #a92d2d;
```

These are initial tokens, not immutable branding. Validate actual contrast in implementation.

## Highlight styles

Semantic highlights must preserve black/dark text and remain distinguishable without colour:

- Key rule — yellow tint + bookmark icon.
- Concept — blue tint + information icon.
- Procedure — green tint + ordered-steps icon.
- Warning — red tint + warning icon.
- Formula — violet/neutral tint + formula icon.
- Question — dashed underline + question icon.

Do not use saturated marker colours behind paragraphs.

## Core components

- app shell and responsive navigation;
- readiness summary;
- learning-path cards;
- lesson article;
- article table of contents;
- source/currency notice;
- semantic callout;
- highlight toolbar;
- note editor;
- flashcard editor and review surface;
- quiz question and explanation;
- procedure stepper;
- instrument panel;
- simulator canvas;
- terminal and conductor controls;
- result and safety feedback;
- progress and misconception report.

## Simulator interaction requirements

- Installed wire and temporary instrument leads must be visually distinct.
- Terminals need persistent labels or accessible tooltips.
- Selected source and destination states must be unmistakable.
- Undo must always be easy to reach.
- Zoom controls must not obscure the board.
- Learning hints must be removable so the same canvas can support practice.
- Hazardous actions should interrupt the workflow with a clear reason, not merely a red toast.

## Motion

Use motion only to show:

- connection creation/removal;
- path tracing;
- state changes;
- focus or navigation continuity;
- feedback after an action.

Avoid continuous glowing, parallax, bouncing icons and decorative page transitions.

## Prompt for UI-generation tools

```text
Design a technical study application for Australian electrical apprentices.
This is not a marketing website. It is used for long reading sessions,
practice questions and an interactive wiring/testing simulator.

Prioritise readability and predictable interaction over visual novelty.
Use high-contrast dark text on warm white surfaces, restrained orange primary
actions, deep green verified/progress states and subtle borders. Body text must
be at least 16 px, preferably 18 px for lessons, with 1.6 line height and no font
weights below 400. Keep article width near 760 px. Meet WCAG AA, use 44 px touch
targets, provide visible focus states and never communicate meaning by colour alone.
Avoid gradients behind text, glassmorphism, thin fonts, oversized marketing heroes,
low-contrast grey labels, cramped dashboards and decorative animations.
```

## Design review checklist

- Can a learner read a full lesson without zooming?
- Is body text visibly darker than secondary metadata?
- Are headings distinguishable without excessive size?
- Is every state understandable in greyscale?
- Does mobile preserve the main study action?
- Can the simulator be operated without precise dragging?
- Are safety warnings specific and blocking where necessary?
- Is article content visually calmer than dashboards and simulations?