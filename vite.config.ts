import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      render: path.resolve(__dirname, 'render')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './pages/main/index.html'),
        render: path.resolve(__dirname, './main/render/index.html')
      }
    }
  }
})
