import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginInsapect from "vite-plugin-inspect"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginInsapect(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
