import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const dataset = process.env.SANITY_STUDIO_DATASET || 'development'

const isProduction = dataset === 'production'

console.log(dataset, isProduction)

export default defineConfig({
  name: 'default',
  title: isProduction ? 'Frontier CMS [PRODUCTION]' : 'Frontier CMS [DEVELOPMENT]',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
