# hono-spa

Hono だけで作る最小の SPA。React は使わず、画面は `hono/jsx/dom`、サーバーは `hono`。

```
src/index.tsx   サーバー: /api と、SPA の入れ物になる HTML
src/main.tsx   ブラウザ: 画面（hono/jsx/dom）と API 呼び出し（hono/client）
```

```sh
pnpm install
pnpm dev        # http://localhost:8787
pnpm build      # dist/index.js（サーバー）と dist/static/main.js（ブラウザ）
pnpm start      # node dist/index.js
pnpm typecheck
```
