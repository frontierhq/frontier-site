# Frontier Website

FrontierHQ's marketing website, built with Astro, Tailwind CSS, TypeScript and Netlify.

Content lives in the repository alongside the site code. Repeatable content is stored in Astro content collections under `apps/web/src/content`; bespoke page layout and messaging remains code-owned in `apps/web/src/pages` and `apps/web/src/components`.

## Development

Requirements: Node.js 22.12+ and npm.

```bash
npm install
npm run dev:web
```

The site runs at `http://localhost:4321`.

## Content

```txt
apps/web/src/content/
├── case-studies/   # Structured case studies
├── legal/          # Markdown legal documents
├── pages/          # Page-level SEO, hero and section data
├── partners/       # Partner records
└── services/       # Service records
```

Astro validates each collection at build time through `apps/web/src/content.config.ts`. Content changes are reviewed and deployed through the normal Git and Netlify workflow:

```txt
Edit content → commit/PR → Netlify build → static deployment
```

## Commands

```bash
npm run dev:web       # Start the site locally
npm run typecheck     # Check Astro and TypeScript types
npm run build:web     # Build the production site
npm run content:validate
npm run lint
npm run format:check
```

Netlify deploys `apps/web` with `npm run build:web` and publishes `apps/web/dist`.
