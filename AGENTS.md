# AGENTS.md

## Project

This repository contains the FrontierHQ marketing website and Sanity Studio.

The site is a story-led platform engineering website for FrontierHQ. It positions Frontier as a full-stack platform engineering partner that designs, integrates, and builds platforms across bare metal, cloud, hybrid, Kubernetes, and application migration environments.

## Repository structure

```
apps/
  web/      Astro marketing website
  studio/   Sanity Studio CMS

docs/
  adr/      Architecture Decision Records
```

````


## Tech stack

* Monorepo: npm workspaces
* Website: Astro
* Styling: Tailwind CSS
* CMS: Sanity
* Hosting: Netlify
* Language: TypeScript

## Commands

```Bash
````

npm run dev:web
npm run dev:studio
npm run dev
npm run build:web
npm run build:studio

```


Development rules

* Keep the website mostly static and content-driven.
* Prefer Astro components over heavier client-side JavaScript.
* Use Sanity for structured content:
    * pages
    * services
    * case studies
    * partners
    * insights later
* Do not turn Sanity into a generic page builder too early.
* Keep complex layout, navigation, animation, and visual system code-owned.
* Marketing copy may live in Sanity where it needs to be edited frequently.
* Keep reusable UI in apps/web/src/components.
* Keep Sanity schemas in apps/studio/schemaTypes.

Content principles

The site should reinforce this core story:

Most platforms start in the cloud. Frontier builds across the environments businesses actually run in — from bare metal to hybrid to Kubernetes.

Messaging should emphasise:

* real-world complexity
* trust
* control
* security
* reliability
* platform foundations
* integration with product ecosystems
* hands-on delivery, not just advice

Avoid generic phrases like:

* “digital transformation”
* “DevOps experts”
* “cloud solutions”
* “system integrator” as a primary label

Prefer:

* “we design and build”
* “we integrate the right technologies”
* “platform foundations”
* “built for your environment”
* “from bare metal to Kubernetes”

Code style

* Use TypeScript where practical.
* Keep components small and readable.
* Prefer explicit props.
* Avoid unnecessary dependencies.
* Keep styling with Tailwind utility classes unless repeated enough to justify abstraction.

Sanity guidance

Use one Sanity project with multiple datasets:

development
staging
production

Astro should select the dataset via:

PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=

Deployment

Netlify should deploy apps/web.

Recommended Netlify settings:

Base directory: apps/web
Build command: npm run build
Publish directory: dist

Sanity Studio may be deployed separately using Sanity hosting or a second Netlify site.

```
