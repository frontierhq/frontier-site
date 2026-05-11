# ADR 0004: Use Netlify for hosting

## Status

Accepted

## Context

The site should be simple to deploy, fast globally, and easy to preview from pull requests.

The current website is a static/content-led Astro site.

## Decision

Use Netlify to host the public website.

Recommended configuration:

```txt
Base directory: apps/web
Build command: npm run build
Publish directory: dist

Consequences

Positive

* Simple deployment model
* Good support for monorepos
* Preview deploys for pull requests
* Good fit for Astro
* Easy environment variable management

Negative

* Dynamic backend functionality would need additional services
* Build hooks are needed for CMS-triggered rebuilds


```
