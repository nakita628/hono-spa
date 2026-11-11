/** @jsxImportSource hono/jsx */
import { Hono } from 'hono'
import { renderToString } from 'hono/jsx/dom/server'

const app = new Hono()

const api = app.basePath('/api').get('/hello', (c) => c.json({ message: 'Hello Hono🔥' }))

// 画面は 1 つだけ。中身はブラウザ側の src/main.tsx が描く。
app.get('/', (c) =>
  c.html(
    `<!doctype html>${renderToString(
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Hono🔥 SPA</title>
          <script type="module" src={import.meta.env.PROD ? '/static/main.js' : '/src/main.tsx'} />
        </head>
        <body>
          <div id="root" />
        </body>
      </html>,
    )}`,
  ),
)

export type AppType = typeof api

export default app
