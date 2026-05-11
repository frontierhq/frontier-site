# ADR 0002: Use Astro for the public website

## Status

Accepted

## Context

The FrontierHQ site is primarily a content-led marketing website. It needs to be fast, SEO-friendly, easy to deploy, and simple to maintain.

The site does not currently require heavy application behaviour, authentication, dashboards, or complex client-side state.

## Decision

Use Astro for the public website.

## Consequences

### Positive

- Excellent fit for static and content-driven sites

- Low JavaScript by default

- Good performance characteristics

- Works well with Sanity

- Simple component model

- Easy deployment to Netlify

### Negative

- Less suitable if the site becomes a complex web app

- Some React-style patterns may not apply directly

- Interactive components need explicit client-side hydration
