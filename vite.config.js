import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import obfuscator from "rollup-plugin-obfuscator"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    obfuscator({
      compact:true,
      controlFlowFlattening:true,
      deadCodeInjection:true,
      rotateStringArray:true,
      stringArrayEncoding:["base64"],
      disableConsolOutput:true,
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
