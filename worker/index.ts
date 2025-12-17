import { DurableObject } from 'cloudflare:workers'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

export interface Env {
  SOLAR_SCHEDULER: DurableObjectNamespace<SolarScheduler>
  USERNAME: SecretsStoreSecret
  PASSWORD: SecretsStoreSecret
}

type Bindings = {
  USERNAME: SecretsStoreSecret
  PASSWORD: SecretsStoreSecret
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/admin/*', async (c, next) => {
  const USERNAME = await c.env.USERNAME.get()
  const PASSWORD = await c.env.PASSWORD.get()
  const auth = basicAuth({
    username: USERNAME,
    password: PASSWORD,
  })
  return auth(c, next)
})

app.get('/admin', async (c) => {
  return c.text(`You are Authorized!`)
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// export default app satisfies ExportedHandler<Env>
export default app

export class SolarScheduler extends DurableObject {
  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env)
  }

  // other methods
}
