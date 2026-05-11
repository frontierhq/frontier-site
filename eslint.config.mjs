import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  prettier,
  {
    ignores: [
      'dist',
      '.astro',
      '.sanity',
      'node_modules',
      'apps/studio/.sanity/**',
      'apps/web/dist/**',
      'apps/web/.astro/**',
    ],
  },
]
