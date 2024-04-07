import { eq } from 'drizzle-orm'
import { inArray } from 'drizzle-orm'
import { Hono } from 'hono'
import { groups, posts, prompts, usersToGroups } from '../schema'
import type { Variables } from '../utils/inject-db'
import injectDB from '../utils/inject-db'

const app = new Hono<{ Variables: Variables }>()

type GroupType = {
  userId: string
  rules: string
}

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
    // look over
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
    // look over
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
  const body = await c.req.json()
  if (body.timestamp && typeof body.timestamp === 'string') {
    body.timestamp = new Date(body.timestamp)
  }
  return c.json(
    (
      await c
        .get('db')
        .insert(posts)
        .values({ ...body })
        .returning()
    )[0]
  )
})

export default app
