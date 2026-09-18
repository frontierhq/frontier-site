# ADR 0001: Use an npm workspaces monorepo

## Status

Accepted

## Context

The project contains the public marketing website plus shared documentation and configuration. Keeping the website in a workspace leaves room for future packages without introducing a second runtime application.

## Decision

Use a single monorepo with npm workspaces.

```txt

apps/

  web/

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
