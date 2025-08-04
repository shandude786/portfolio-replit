import { build } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function buildForVercel() {
  await build({
    root: resolve(__dirname, 'client'),
    build: {
      outDir: resolve(__dirname, 'dist/public'),
      emptyOutDir: true
    }
  })
}

buildForVercel()