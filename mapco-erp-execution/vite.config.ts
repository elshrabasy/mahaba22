import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: './', // 🔥 مهم جداً لحل الشاشة البيضاء في Electron

  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
