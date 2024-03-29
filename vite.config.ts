/// <reference types="vitest" />
/// <reference types="vite/client" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/hw-s2-vite/",
  test: {
    globals: true,
    environment: 'jsdom',

    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,

    setupFiles: './src/test/setup.ts',
  },
})
