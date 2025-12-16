import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.use(
  "/admin/*",
  basicAuth({
    username: "admin",
    password: "secret",
  })
)

app.get('/admin', (c) => {
  return c.text('You are Authorized!')
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
