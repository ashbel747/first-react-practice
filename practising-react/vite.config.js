// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name
const repoName = 'first-react-practice'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 very important
})
