import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { execFileSync } from 'node:child_process'

const DEVELOPMENT_EXPORT = path.resolve('apps/studio/development.tar.gz')
const PRODUCTION_EXPORT = path.resolve('apps/studio/production.tar.gz')

function findNdjsonFile(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const nested = findNdjsonFile(fullPath)
      if (nested) return nested
    }

    if (entry.isFile() && entry.name.endsWith('.ndjson')) {
      return fullPath
    }
  }

  return null
}

function extractArchive(archivePath) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sanity-diff-'))

  execFileSync('tar', ['-xzf', archivePath, '-C', tmpDir])

  const ndjsonPath = findNdjsonFile(tmpDir)

  if (!ndjsonPath) {
    const files = execFileSync('find', [tmpDir, '-type', 'f'], {
      encoding: 'utf8',
    })

    throw new Error(
      `Could not find an .ndjson file inside ${archivePath}\nFiles found:\n${files}`
    )
  }

  return ndjsonPath
}

function readDataset(archivePath) {
  const ndjsonPath = extractArchive(archivePath)
  const contents = fs.readFileSync(ndjsonPath, 'utf8')

  return contents
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .filter((doc) => !doc._id.startsWith('_.'))
}

function normalize(doc) {
  const clone = structuredClone(doc)

  delete clone._rev
  delete clone._updatedAt
  delete clone._createdAt

  return JSON.stringify(clone)
}

function getLabel(doc) {
  return doc.title || doc.name || doc.slug?.current || doc._id
}

const developmentDocs = readDataset(DEVELOPMENT_EXPORT)
const productionDocs = readDataset(PRODUCTION_EXPORT)

const developmentMap = new Map(
  developmentDocs.map((doc) => [
    doc._id,
    {
      normalized: normalize(doc),
      label: getLabel(doc),
    },
  ])
)

const productionMap = new Map(
  productionDocs.map((doc) => [
    doc._id,
    {
      normalized: normalize(doc),
      label: getLabel(doc),
    },
  ])
)

const added = []
const changed = []
const removed = []

for (const [id, doc] of developmentMap.entries()) {
  if (!productionMap.has(id)) {
    added.push(doc.label)
    continue
  }

  if (productionMap.get(id).normalized !== doc.normalized) {
    changed.push(doc.label)
  }
}

for (const [id, doc] of productionMap.entries()) {
  if (!developmentMap.has(id)) {
    removed.push(doc.label)
  }
}

console.log('\n=== DATASET DIFF ===\n')

console.log(`Added (${added.length})`)
added.forEach((id) => console.log(`  + ${id}`))

console.log(`\nChanged (${changed.length})`)
changed.forEach((id) => console.log(`  ~ ${id}`))

console.log(`\nRemoved (${removed.length})`)
removed.forEach((id) => console.log(`  - ${id}`))

console.log('\nDone.\n')
