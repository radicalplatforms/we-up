import { eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { users } from '../schema'
import type { Variables } from '../utils/inject-db'
import injectDB from '../utils/inject-db'

const app = new Hono<{ Variables: Variables }>()

app.get('/:email', injectDB, async (c) => {
  const param = c.req.param('email')
  const res = await c.get('db').query.users.findFirst({
    where: eq(users.email, decodeURIComponent(param)),
    with: {
      usersToGroups: {
        columns: { userId: false, groupId: false },
        with: { group: true },
      },
    },
  })
  if (res) {
    return c.json(res)
  }
  return c.notFound()
})

app.post('/', injectDB, async (c) => {
  const body = await c.req.json()
  if (body.wakeTime && typeof body.wakeTime === 'string') {
    body.wakeTime = new Date(body.wakeTime)
  }
  return c.json(
    (
      await c
        .get('db')
        .insert(users)
        .values({ ...body })
        .returning()
    )[0]
  )
})

app.put('/:userId', injectDB, async (c) => {
  const param = c.req.param('userId')
  const body = await c.req.json()
  if (body.wakeTime && typeof body.wakeTime === 'string') {
    body.wakeTime = new Date(body.wakeTime)
  }
  return c.json(
    (
      await c
        .get('db')
        .update(users)
        .set({ ...body })
        .where(eq(users.id, param))
        .returning()
    )[0]
  )
})

export default app
