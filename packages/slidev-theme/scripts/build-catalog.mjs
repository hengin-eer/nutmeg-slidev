import { execFile } from 'node:child_process'
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const packageDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const repoDir = path.resolve(packageDir, '../..')
const outputDir = path.join(packageDir, 'catalog', 'dist')
const pages = process.argv.includes('--pages')
const basePrefix = pages ? '/nutmeg-slidev/' : '/'
const slidev = path.join(repoDir, 'node_modules', '.bin', process.platform === 'win32' ? 'slidev.cmd' : 'slidev')
const packageJson = JSON.parse(await readFile(path.join(packageDir, 'package.json'), 'utf8'))

async function buildDeck(source, output, base) {
  await execFileAsync(slidev, ['build', source, '--out', output, '--base', base], {
    cwd: packageDir,
    stdio: 'inherit',
  })
}

await rm(outputDir, { force: true, recursive: true })
await mkdir(outputDir, { recursive: true })
await cp(path.join(packageDir, 'catalog', 'portal'), outputDir, { recursive: true })
await cp(path.join(packageDir, 'assets'), path.join(outputDir, 'brand'), { recursive: true })

const portalIndex = path.join(outputDir, 'index.html')
const indexHtml = await readFile(portalIndex, 'utf8')
await writeFile(portalIndex, indexHtml.replaceAll('{{VERSION}}', packageJson.version))

// Slidev resolves --out from the directory holding the source Markdown file.
await buildDeck('catalog/slides.md', 'dist/slides', `${basePrefix}slides/`)
await buildDeck('catalog/contrast.md', 'dist/slides/contrast', `${basePrefix}slides/contrast/`)
await buildDeck('catalog/brand-gradient.md', 'dist/slides/brand-gradient', `${basePrefix}slides/brand-gradient/`)
