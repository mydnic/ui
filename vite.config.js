import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        vue()
    ],

    build: {
        cssCodeSplit: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: 'src/js/index.js',
            name: 'mydnic-ui',
            formats: ['es', 'cjs', 'umd'],
            fileName: format => `mydnic-ui.${format}.js`
        },
        rollupOptions: {
            // make sure to externalize deps that should not be bundled
            // into your library
            input: {
                main: path.resolve(__dirname, 'src/js/index.js')
            },
            external: ['vue'],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'ui.css') { return 'mydnic-ui.css' }
                    return assetInfo.name
                },
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
