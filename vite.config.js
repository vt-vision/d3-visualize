import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/kg-visualize/',
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                network2d: resolve(__dirname, 'pages', 'network2d.html'),
                network3d: resolve(__dirname, 'pages', 'network3d.html'),
            },
        }
    }
})
