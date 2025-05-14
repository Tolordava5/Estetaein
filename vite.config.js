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
