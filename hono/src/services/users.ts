import { Hono } from 'hono'
import type { Variables } from '../utils/inject-db'
import injectDB from '../utils/inject-db'
import { users} from '../schema'
import { eq } from 'drizzle-orm'

const app = new Hono<{ Variables: Variables }>()

app.get('/:email', injectDB, async (c) => {
    const param = c.req.param('email')
    console.log(param)
    return c.json(await c.get('db').select().from(users).where(eq(users.email, param)).execute());
  });

app.post('/', injectDB, async (c) => {
    const body = await c.req.json()
    return c.json(await c.get('db').insert(users).values({...body}).returning());
});

app.put('/', injectDB, async (c) => {
    const body = await c.req.json()
    return c.json(await c.get('db').update(users).set({...body}).returning());
});

export default app
