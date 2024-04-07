import { eq } from 'drizzle-orm'
import { inArray } from 'drizzle-orm'
import type { Context } from 'hono'
import { Hono } from 'hono'
import { env } from 'hono/adapter'
import { groups, posts, prompts, usersToGroups } from '../schema'
import type { Variables } from '../utils/inject-db'
import injectDB from '../utils/inject-db'
import type { GroupType, CloudflareResponse, Post } from '../utils/type-definitions'

const app = new Hono<{ Variables: Variables }>()

app.get('/', injectDB, async (c) => {
  return c.json(await c.get('db').select().from(groups).execute())
})

app.get('/:groupId', injectDB, async (c) => {
  const param = c.req.param('groupId')
  const currentDate = new Date()
  const groupData = await c.get('db').query.groups.findMany({
    where: eq(groups.id, param),
    with: {
      usersToGroups: {
        columns: { userId: false, groupId: false },
        with: { user: true },
      },
    },
  })
  const promptData = await c.get('db').select().from(prompts).where(eq(prompts.groupId, param))
  const filteredData = promptData.filter((item) => {
    const itemDate = new Date(item.date)
    return itemDate.toDateString() === currentDate.toDateString()
  })
  const users = groupData[0].usersToGroups.map((userToGroup) => userToGroup.user.id)
  const postData = await c.get('db').select().from(posts).where(inArray(posts.userId, users))
  const postFiltered = postData.filter((item) => {
    const itemDate = new Date(item.timestamp)
    return itemDate.toDateString() === currentDate.toDateString()
  })

  return c.json({ group: groupData, prompt: filteredData, post: postFiltered })
})

app.post('/join', injectDB, async (c) => {
  const body = await c.req.json()
  return c.json(
    (
      await c
        .get('db')
        .insert(usersToGroups)
        .values({ ...body })
        .returning()
    )[0]
  )
})

app.post('/', injectDB, async (c) => {
  const body = (await c.req.json()) as GroupType
  return c.json(
    await c.get('db').transaction(async (tx) => {
      const newGroup = (
        await tx
          .insert(groups)
          .values({ ...body })
          .onConflictDoNothing()
          .returning()
      )[0]

      await tx.insert(usersToGroups).values({
        userId: body.userId,
        groupId: newGroup.id,
      })

      return newGroup
    })
  )
})

app.post('/leave', injectDB, async (c) => {
  const body = await c.req.json()
  return c.json(
    (
      await c
        .get('db')
        .delete(usersToGroups)
        .where(eq(usersToGroups.userId, body.user_id))
        .returning()
    )[0]
  )
})

app.post('/prompt', injectDB, async (c) => {
  const body = await c.req.json()
  return c.json(
    (
      await c
        .get('db')
        .insert(prompts)
        .values({ ...body })
        .returning()
    )[0]
  )
})

app.post('/post', injectDB, async (c) => {
  const body = (await c.req.formData()) as FormData
  const file = body.get('file') as unknown as File
  const send = new FormData()
  send.append('file', file, file.name)
  const { CLOUDFLARE_ACCOUNT_ID } = env<{ CLOUDFLARE_ACCOUNT_ID: string }>(c as Context)
  const { CLOUDFLARE_API_TOKEN } = env<{ CLOUDFLARE_API_TOKEN: string }>(c as Context)
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
  const resJson = (await response.json()) as CloudflareResponse
  const photo_url = resJson.result.variants[4]

  const userId = body.get('userId')
  const postBody = { userId, photoUrl: photo_url, timestamp: new Date() } as Post
  return c.json((await c.get('db').insert(posts).values(postBody).returning())[0])
})

export default app
