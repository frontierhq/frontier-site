# Frontier Website

Modern consultancy website for FrontierHQ built with:

- Astro
- Tailwind CSS
- Sanity CMS
- Netlify

The site is designed around:
- platform engineering
- systems integration
- consultancy delivery
- operationally-focused enterprise messaging

---

# Stack

| Technology | Purpose |
|---|---|
| Astro | Static site generation |
| Tailwind CSS | Styling |
| Sanity Studio | Content management |
| Netlify | Hosting + deployment |
| TypeScript | Application code |
| Portable Text | Rich CMS content |

---

# Repository Structure

```txt
.
├── apps
│   ├── studio         # Sanity Studio
│   └── web            # Astro website
│
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

---

# Applications

## `apps/web`

Astro frontend application.

Contains:
- pages
- layouts
- reusable UI components
- Sanity integration
- Tailwind styling

### Important directories

```txt
apps/web/src/
├── components/
├── layouts/
├── pages/
├── lib/
└── styles/
```

---

## `apps/studio`

Sanity CMS Studio.

Contains:
- schemas
- content models
- editorial configuration

### Important directories

```txt
apps/studio/
├── schemaTypes/
├── sanity.config.ts
└── sanity.cli.ts
```

---

# Requirements

- Node.js 20+
- npm 10+ (or pnpm if preferred)

---

# Installation

From repository root:

```bash
npm install
```

---

# Local Development

## Run frontend

```bash
npm run dev:web
```

Frontend runs on:

```txt
http://localhost:4321
```

---

## Run Sanity Studio

```bash
npm run dev:studio
```

Studio runs on:

```txt
http://localhost:3333
```

---

# Environment Variables

Create:

```txt
apps/web/.env
```

Example:

```env
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=development
PUBLIC_SANITY_API_VERSION=2025-01-01
```

---

# Sanity Datasets

Recommended environments:

| Environment | Dataset |
|---|---|
| Local Development | development |
| Staging | staging |
| Production | production |

---

# Build

## Frontend

```bash
npm run build:web
```

## Studio

```bash
npm run build:studio
```

---

# Deployment

## Frontend

Hosted on Netlify.

Typical deployment flow:

```txt
Git Push
↓
Netlify Build
↓
Static Site Deployment
```

---

## CMS

Sanity Studio can be:
- self-hosted
- deployed via Sanity hosting

Typical production setup:

```txt
studio.frontierhq.com
```

---

# Content Architecture

## Core Content Types

### Page

Generic content pages:
- Home
- About
- Contact
- Case Studies
- Legal

---

### Service

Platform engineering service offerings.

Examples:
- Bare Metal Platforms
- Cloud Platforms
- Hybrid Platforms
- Kubernetes Platforms

---

### Case Study

Delivery examples and client outcomes.

---

### Partner

Vendor ecosystem and product relationships.

---

# Design Principles

The site intentionally avoids:
- startup aesthetics
- marketing-heavy language
- excessive animations
- generic consultancy messaging

The design aims to communicate:
- operational maturity
- engineering credibility
- clarity
- trust
- technical depth

---

# Content Philosophy

The messaging strategy focuses on:

```txt
Operational reality
+
Technical depth
+
Systems integration
+
Hands-on delivery
```

The site positions FrontierHQ as:
- a consultancy
- a systems integrator
- a platform engineering partner

---

# Routing Structure

## Core Pages

```txt
/
├── /what-we-do
├── /how-we-work
├── /case-studies
├── /partners
├── /about
├── /contact
└── /legal
```

---

## Dynamic Routes

```txt
/services/[slug]
/case-studies/[slug]
/partners/[slug]
/legal/[slug]
```

---

# Forms

Contact forms use:

```txt
Netlify Forms
```

Submissions are available via:
- Netlify dashboard
- email notifications

Future integrations may include:
- Attio
- Slack
- HubSpot

---

# Analytics

Recommended analytics stack:

```txt
Plausible Analytics
```

Configured via:

```env
PUBLIC_PLAUSIBLE_DOMAIN=frontierhq.com
```

---

# Styling

Typography:
- Red Hat Display

Styling:
- Tailwind CSS
- Custom Frontier design tokens
- Brand colour utilities

---

# Future Enhancements

Potential future work:

- Insights / technical articles
- Search
- Partner logos
- Rich media case studies
- Team profiles
- Attio CRM integration
- Advanced analytics
- Image optimisation
- Portable Text custom renderers

---

# License

Internal FrontierHQ project.
