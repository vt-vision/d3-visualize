import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/d3-visualize/',
    plugins: [],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                network3d: new URL('network3d.html', import.meta.url).pathname
            },
        }
    },
})
