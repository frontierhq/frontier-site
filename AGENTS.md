# AGENTS.md

## Project

This repository contains the FrontierHQ marketing website.

The site is a story-led platform engineering website for FrontierHQ. It positions Frontier as a full-stack platform engineering partner that designs, integrates, and builds platforms across bare metal, cloud, hybrid, Kubernetes, and application migration environments.

## Repository structure

```
apps/
  web/      Astro marketing website

docs/
  adr/      Architecture Decision Records
```

## Tech stack

- Monorepo: npm workspaces
- Website: Astro
- Styling: Tailwind CSS
- Content: Astro content collections
- Hosting: Netlify
- Language: TypeScript

## Commands

```bash
npm run dev:web
npm run build:web
npm run content:validate
```

Development rules

- Keep the website mostly static and content-driven.
- Prefer Astro components over heavier client-side JavaScript.
- Use Astro content collections for structured content:
  - pages
  - services
  - case studies
  - partners
  - legal documents
- Keep complex layout, navigation, animation, and visual system code-owned.
- Marketing copy should live in the repository where it needs to be reviewed and deployed with the site.
- Keep reusable UI in apps/web/src/components.

Content principles

The site should reinforce this core story:

Most platforms start in the cloud. Frontier builds across the environments businesses actually run in — from bare metal to hybrid to Kubernetes.

Messaging should emphasise:

- real-world complexity
- trust
- control
- security
- reliability
- platform foundations
- integration with product ecosystems
- hands-on delivery, not just advice

Avoid generic phrases like:

- “digital transformation”
- “DevOps experts”
- “cloud solutions”
- “system integrator” as a primary label

Prefer:

- “we design and build”
- “we integrate the right technologies”
- “platform foundations”
- “built for your environment”
- “from bare metal to Kubernetes”

Code style

- Use TypeScript where practical.
- Keep components small and readable.
- Prefer explicit props.
- Avoid unnecessary dependencies.
- Keep styling with Tailwind utility classes unless repeated enough to justify abstraction.

Content guidance

Store repeatable content in `apps/web/src/content` using Astro content collections. Keep bespoke layout, navigation and page composition code-owned. Content changes should be reviewed and deployed with the website through Git and Netlify.

Deployment

Netlify should deploy apps/web.

Recommended Netlify settings:

Base directory: apps/web
Build command: npm run build
Publish directory: dist
