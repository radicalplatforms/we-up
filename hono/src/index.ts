import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { version } from '../package.json'
import groups from './services/groups'
import users from './services/users'

const app = new Hono()

app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Internal Service Error', 500)
})

app.use('*', logger(), async (c, next) => {
  c.header('X-Logger-Middleware', 'Executed')
  await next()
})

app.use('*', prettyJSON(), async (c, next) => {
  c.header('X-PrettyJson-Middleware', 'Executed')
  await next()
})

app.get('/', async (c) => {
  return c.text(`We Up API v${version}`)
})

const routes = app.route('/api/user', users).route('/api/group', groups)

export default app
export type AppType = typeof routes
