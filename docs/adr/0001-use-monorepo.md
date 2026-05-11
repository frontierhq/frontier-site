# ADR 0001: Use an npm workspaces monorepo

## Status

Accepted

## Context

The project contains two closely related applications:

- the public marketing website

- the Sanity Studio used to manage content

Both applications should evolve together and share project conventions, scripts, environment documentation, and future packages.

## Decision

Use a single monorepo with npm workspaces.

```txt

apps/

  web/

  studio/

packages/

docs/
```

Consequences

Positive

- One repository for website and CMS
- Easier local development
- Shared scripts at the root
- Easier future extraction of shared UI or configuration
- Architecture decisions and project guidance live alongside the code

Negative

- Deploy configuration needs to target subdirectories
- Developers need to understand workspace commands
- Slightly more structure than a single-app repository
