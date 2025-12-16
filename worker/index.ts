import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

type Bindings = {
  USERNAME: string
  PASSWORD: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/admin/*', async (c, next) => {
  const auth = basicAuth({
    username: c.env.USERNAME,
    password: c.env.PASSWORD,
  })
  return auth(c, next)
})

app.get('/admin', (c) => {
  return c.text('You are Authorized!')
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
