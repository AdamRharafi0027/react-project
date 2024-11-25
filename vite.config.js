import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-project/', // Replace 'your-repo-name' with the actual repository name
  build: {
    outDir: 'build', // Change the output directory to 'build'
  },
})


