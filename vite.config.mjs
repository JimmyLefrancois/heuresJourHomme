import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: ''
        },
        {
          src: 'icons',
          dest: ''
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
})