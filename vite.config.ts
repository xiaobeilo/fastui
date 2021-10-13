import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImport from 'vite-plugin-babel-import';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImport([
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        ignoreStyles: [],
        style(name) {
          return `antd/lib/${name}/style/index.css`;
        },
      },
    ])
  ],
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
