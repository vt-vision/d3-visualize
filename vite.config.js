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
                network3d: new URL('network3d.html', import.meta.url).pathname
            },
        }
    },
})
