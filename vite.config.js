import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import javascriptObfuscator from "rollup-plugin-javascript-obfuscator"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    javascriptObfuscator({
  compact: true,
  controlFlowFlattening: true,
  deadCodeInjection: true,
  debugProtection: false,
  disableConsoleOutput: true,

  // 🔑 Add these to get random class/function/variable names:
  renameGlobals: true,           // Renames global variables/functions
  identifierNamesGenerator: 'hexadecimal', // or 'mangled'

  // Optional: makes it even more unpredictable
  stringArray: true,
  rotateStringArray: true,
  stringArrayEncoding: ['base64'],
}),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
