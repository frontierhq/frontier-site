# ADR 0006: Store website content in the repository

## Status

Accepted

## Context

The Frontier website is a static Astro site. Its layouts, navigation and most page copy are code-owned, while the Sanity Studio supplied a relatively small set of service, partner, case-study, page and legal records.

The site does not require non-technical editors, drafts or runtime content updates. Sanity therefore added a separate deployment, dataset promotion and API dependency without providing enough editorial value to justify the operational cost.

## Decision

Store repeatable content in Astro content collections under `apps/web/src/content`.

- JSON collections hold services, partners, case studies and page-level metadata.
- Markdown collections hold legal documents.
- Local public assets are stored under `apps/web/public`.
- Bespoke layout and page composition remain code-owned.
- Content changes use the normal Git review and Netlify deployment workflow.

## Consequences

Positive:

- Content and code change atomically and are reviewed together.
- Builds are deterministic and do not depend on a CMS API.
- Collection schemas provide validation and generated TypeScript types.
- Sanity Studio, dataset promotion and CMS credentials are no longer required.

Negative:

- Content editing requires repository access and a Git workflow.
- Drafts and browser-based editorial previews are no longer provided by default.
- A future need for non-technical editors would justify revisiting the CMS decision.
