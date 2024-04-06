import { Hono } from 'hono'
import type { Variables } from '../utils/inject-db'

const app = new Hono<{ Variables: Variables }>()
export default app
