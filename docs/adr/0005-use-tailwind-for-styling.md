# ADR 0005: Use Tailwind CSS for styling

## Status

Accepted

## Context

The website needs a polished custom design system but should move quickly during early development.

The team needs to create reusable sections, cards, hero layouts, and page components without maintaining a large custom CSS architecture too early.

## Decision

Use Tailwind CSS for styling.

## Consequences

### Positive

- Fast iteration
- Consistent spacing, typography, and layout primitives
- Good fit with Astro components
- Avoids premature CSS abstraction
- Easy to refactor into reusable components later

### Negative

- HTML can become class-heavy
- Requires discipline to avoid visual inconsistency
- Shared design tokens may need to be formalised later
