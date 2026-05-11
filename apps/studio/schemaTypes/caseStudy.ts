import {defineField, defineType} from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'clientType',
      title: 'Client Type',
      type: 'string',
      options: {
        list: [
          {title: 'Financial Services', value: 'Financial Services'},
          {title: 'Retail', value: 'Retail'},
          {title: 'Public Sector', value: 'Public Sector'},
          {title: 'Healthcare', value: 'Healthcare'},
          {title: 'Energy', value: 'Energy'},
          {title: 'Technology', value: 'Technology'},
        ],
      },
    }),

    defineField({
      name: 'environment',
      title: 'Environment',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'problem',
      title: 'Challenge',
      type: 'text',
      rows: 8,
    }),

    defineField({
      name: 'solution',
      title: 'Approach',
      type: 'text',
      rows: 10,
    }),

    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'text',
      rows: 8,
    }),

    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'services',
      title: 'Related Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'clientType',
    },
  },
})
