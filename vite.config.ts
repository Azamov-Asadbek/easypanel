import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import eslint from 'vite-plugin-eslint'
import htmlPlugin from 'vite-plugin-html-config'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
  },
  plugins: [
    react(),
    htmlPlugin({
      favicon: '/fav.svg',
      metas: [
        {
          charset: 'UTF-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ],
    }),
    svgrPlugin(),
    tsconfigPaths(),
    checker({
      overlay: true,
      typescript: true,
    }),
    eslint({
      cache: false,
      include: ['./src/**/*.tsx', './src/**/*.ts'],
    }),
    Unfonts({
      google: {
        preconnect: false,
        display: 'block',
        text: 'ViteAwsom',
        injectTo: 'head-prepend',
        families: [
          {
            name: 'Inter',
            defer: true,
          },
        ],
      },
    }),
  ],
})
