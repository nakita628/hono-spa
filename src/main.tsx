import { hc } from 'hono/client'
import { render, useEffect, useState } from 'hono/jsx/dom'

import type { AppType } from './index'

const client = hc<AppType>('/').api

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('...')

  useEffect(() => {
    client.hello
      .$get()
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])

  return (
    <main>
      <h1>{message}</h1>
      <button type="button" onClick={() => setCount((n) => n + 1)}>
        count: {count}
      </button>
    </main>
  )
}

const root = document.getElementById('root')
if (!root) throw new Error('#root not found')

render(<App />, root)
