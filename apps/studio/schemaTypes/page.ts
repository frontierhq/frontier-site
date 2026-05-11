import {defineArrayMember, defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {name: 'eyebrow', title: 'Eyebrow', type: 'string'},
        {name: 'headingPrimary', title: 'Heading Primary', type: 'text', rows: 2},
        {name: 'headingAccent', title: 'Heading Accent', type: 'text', rows: 2},
        {name: 'subHeading', title: 'Subheading', type: 'text', rows: 3},
        {name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string'},
        {name: 'primaryCtaUrl', title: 'Primary CTA URL', type: 'string'},
        {name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string'},
        {name: 'secondaryCtaUrl', title: 'Secondary CTA URL', type: 'string'},
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'textSection',
          title: 'Text Section',
          type: 'object',
          fields: [
            {name: 'heading', title: 'Heading', type: 'string'},
            {name: 'body', title: 'Body', type: 'text', rows: 5},
          ],
        }),
        defineArrayMember({
          name: 'servicesSection',
          title: 'Services Section',
          type: 'object',
          fields: [
            {name: 'heading', title: 'Heading', type: 'string'},
            {
              name: 'services',
              title: 'Services',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'service'}]}],
            },
          ],
        }),
        defineArrayMember({
          name: 'caseStudiesSection',
          title: 'Case Studies Section',
          type: 'object',
          fields: [
            {name: 'heading', title: 'Heading', type: 'string'},
            {
              name: 'caseStudies',
              title: 'Case Studies',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'caseStudy'}]}],
            },
          ],
        }),
      ],
    }),
  ],
})
