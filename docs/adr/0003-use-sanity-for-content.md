# ADR 0003: Use Sanity as the CMS

## Status

Accepted

## Context

The website needs structured, reusable content for:

- pages
- services
- case studies
- partners
- future insights

The content model should support a story-led consultancy website without becoming a fragile drag-and-drop page builder.

## Decision

Use Sanity as the CMS.

Use structured schema types for:

- `page`
- `service`
- `caseStudy`
- `partner`

Use one Sanity project with separate datasets:

```txt
development
staging
production

Consequences

Positive

* Strong structured content model
* Good developer experience
* Good editorial interface
* Easy to reuse content across pages
* Suitable for case studies and service content

Negative

* Requires schema design
* Less visual than Webflow or Storyblok by default
* Preview workflows need additional setup

```
