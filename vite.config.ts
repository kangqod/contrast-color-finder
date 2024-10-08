import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
      exclude: ['./src/*', './lib/constants.ts', './lib/main.test.ts']
    })
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: './lib/main.ts',
      name: 'color-contrast-finder',
      fileName: 'color-contrast-finder'
    }
  },
  server: {
    open: true
  }
})
