import { defineConfig } from 'vite'
import { resolve } from 'path'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
    plugins: [basicSsl()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                network3d: new URL('network3d.html', import.meta.url).pathname
            },
        }
    },
})
