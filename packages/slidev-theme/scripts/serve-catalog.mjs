import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const packageDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const root = path.join(packageDir, 'catalog', 'dist')
const port = Number(process.env.PORT ?? 4173)
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
}

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? '/', `http://${request.headers.host}`).pathname)
  const candidate = path.resolve(root, `.${pathname}`)
  if (!candidate.startsWith(root)) {
    response.writeHead(403).end()
    return
  }

  let file = candidate
  try {
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html')
  } catch {
    file = path.join(root, 'index.html')
  }

  response.writeHead(200, { 'Content-Type': types[path.extname(file)] ?? 'application/octet-stream' })
  createReadStream(file).on('error', () => response.writeHead(404).end()).pipe(response)
}).listen(port, () => {
  console.log(`NUTMEG catalog: http://localhost:${port}`)
})
