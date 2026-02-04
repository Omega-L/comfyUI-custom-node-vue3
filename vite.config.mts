import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [vue(), tailwindcss(),],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, './src/main.ts'),
            formats: ['es'],
            fileName: 'main'
        },
        rollupOptions: {
            external: [
                '../../../scripts/app.js',
                '../../../scripts/ui.js'
            ],
            output: {
                dir: 'web',
                entryFileNames: 'main.js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.names?.some(name => name.endsWith('.css'))) {
                        return 'css/[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            }
        },
        sourcemap: true,
        minify: false
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production')
    }
})