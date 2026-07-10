#!/usr/bin/env node

import { spawn } from 'node:child_process'
import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
const skipInstall = args.includes('--skip-install')
const destination = args.filter(arg => arg !== '--skip-install')

if (destination.length !== 1 || destination[0].startsWith('-')) {
  console.error('Usage: npm create @timdaik/nutmeg-slides@<version> -- <directory>')
  process.exit(1)
}

const target = resolve(process.cwd(), destination[0])
const template = resolve(dirname(fileURLToPath(import.meta.url)), '../template')

if (target === process.cwd()) {
  console.error('Create the deck in a new directory, not the current directory.')
  process.exit(1)
}

await mkdir(target, { recursive: true })
if ((await readdir(target)).length > 0) {
  console.error(`The destination is not empty: ${target}`)
  process.exit(1)
}

await cp(template, target, { recursive: true })

const packagePath = resolve(target, 'package.json')
const packageJson = JSON.parse(await readFile(packagePath, 'utf8'))
packageJson.name = basename(target).toLowerCase().replace(/[^a-z0-9-]/g, '-') || 'nutmeg-slides'
await writeFile(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`)

if (skipInstall) {
  console.log(`Created ${target}. Run npm install --ignore-scripts in that directory.`)
  process.exit(0)
}

await new Promise((resolveInstall, rejectInstall) => {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  const child = spawn(npm, ['install', '--ignore-scripts'], {
    cwd: target,
    shell: false,
    stdio: 'inherit',
  })
  child.once('error', rejectInstall)
  child.once('exit', code => code === 0 ? resolveInstall() : rejectInstall(new Error(`npm install failed (${code})`)))
})

console.log(`\nReady: cd ${destination[0]} && npm run dev`)
