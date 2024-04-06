import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { version } from '../package.json'
import groups from './services/groups'
import users from './services/users'

require('dotenv').config();

const app = new Hono()
const BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1`;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

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
