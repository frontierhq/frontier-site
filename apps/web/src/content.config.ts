import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const relatedEntry = z.object({
  title: z.string(),
  slug: z.string(),
  summary: z.string().optional(),
})

const services = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    featured: z.boolean().optional(),
    summary: z.string().optional(),
    overview: z.string().optional(),
    positioning: z.string().optional(),
    sortOrder: z.number().optional(),
    capabilities: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    relatedCaseStudies: z.array(relatedEntry).default([]),
  }),
})

const partners = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    featured: z.boolean().optional(),
    partnerType: z.enum(['vendor', 'var']).optional(),
    category: z.string().optional(),
    summary: z.string().optional(),
    overview: z.string().optional(),
    logo: z.string().optional(),
    website: z.string().optional(),
    products: z.array(z.string()).default([]),
    capabilities: z.array(z.string()).default([]),
    relatedServices: z.array(relatedEntry).default([]),
  }),
})

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    featured: z.boolean().optional(),
    summary: z.string(),
    clientType: z.string().optional(),
    environment: z.array(z.string()).default([]),
    problem: z.string(),
    solution: z.string(),
    outcome: z.string(),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    services: z.array(relatedEntry).default([]),
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    hero: z.record(z.string(), z.string()).optional(),
    sections: z.array(z.unknown()).optional(),
  }),
})

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
})

export const collections = { services, partners, caseStudies, pages, legal }
