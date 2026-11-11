import build from '@hono/vite-build/node'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // 開発: Vite がソースを配信し、それ以外（/api と HTML）を Hono（src/index.tsx）に渡す。
    devServer({ entry: 'src/index.tsx' }),
    // 本番（`vite build`）: src/index.tsx に静的ファイルの配信と起動のコードを足して、dist/index.js に出す。
    // 依存はすべてバンドルするので、実行時に node_modules は要らない。
    build({ entry: 'src/index.tsx', staticRoot: './dist', port: 8787 }),
  ],
  // SPA（`vite build --mode client`）: index.html は無いのでエントリを指定し、
  // src/index.tsx の HTML から参照できるように dist/static/main.js へ固定の名前で出す。
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/main.tsx',
      output: {
        entryFileNames: 'static/[name].js',
        chunkFileNames: 'static/[name]-[hash].js',
        assetFileNames: 'static/[name].[ext]',
      },
    },
  },
})
