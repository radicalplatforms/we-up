import { eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { users } from '../schema'
import type { Variables } from '../utils/inject-db'
import injectDB from '../utils/inject-db'
import { env } from 'hono/adapter'


const app = new Hono<{ Variables: Variables }>()

const { CLOUDFLARE_ACCOUNT_ID } = env<{ CLOUDFLARE_ACCOUNT_ID: string }>(c)
const { CLOUDFLARE_API_TOKEN } = env<{ CLOUDFLARE_API_TOKEN: string }>(c)

app.get('/:email', injectDB, async (c) => {
  const param = c.req.param('email')
  return c.json(
    await c.get('db').query.users.findFirst({
      where: eq(users.email, decodeURIComponent(param)),
      with: {
        usersToGroups: {
          columns: { userId: false, groupId: false },
          with: { group: true },
        },
      },
    })
  )
})

app.post('/', injectDB, async (c) => {
  const body = (await c.req.formData()) as FormData
  const file = body.get('file')
  const send = new FormData()
  send.append('file', file, file.name)
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      },
      body: send,
    }
  )
  const resJson = await response.json()
  const photo_url = resJson.result.variants[4]
  const userBody = { name: body.get('name'), email: body.get('email'), wakeTime: body.get('wakeTime'), photoUrl: photo_url }
  return c.json(
    (
      await c
        .get('db')
        .insert(users)
        .values({...userBody})
        .returning()
    )[0]
  )
})

app.put('/:userId', injectDB, async (c) => {
  const param = c.req.param('userId')
  const body = (await c.req.formData()) as FormData
  const file = body.get('file')
  const send = new FormData()
  send.append('file', file, file.name)
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      },
      body: send,
    }
  )
  const resJson = await response.json()
  const photo_url = resJson.result.variants[4]
  const userBody = { name: body.get('name'), email: body.get('email'), wakeTime: body.get('wakeTime'), photoUrl: photo_url }
  return c.json(
    (
      await c
        .get('db')
        .update(users)
        .set({ ...userBody })
        .where(eq(users.id, param))
        .returning()
    )[0]
  )
})

export default app
