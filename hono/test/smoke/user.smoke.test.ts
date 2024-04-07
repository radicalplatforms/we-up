import { drizzle } from 'drizzle-orm/postgres-js'
import type { Context } from 'hono'
import postgres from 'postgres'
import app from '../../src/index'
import * as schema from '../../src/schema'
import { clean, provision } from '../utils/db'

/**
 * Users Smoke Tests
 *
 * Smoke testing, also known as 'build verification testing', is a type of
 * software testing that comprises a non-exhaustive set of tests that aim at
 * ensuring that the most critical functions work. The result of this testing is
 * used to decide if a build is stable enough to proceed with further testing.
 *
 * Here we are testing the set of "users" APIs in a non-exhaustive way. A good
 * guideline is to hit every endpoint and not dig deep into edge cases.
 */

const DB_NAME = 'users_smoke_test'
const DB_PORT = 5555
const DB_URL = `postgres://localhost:${DB_PORT}/${DB_NAME}`

// NOTE: Beware of jest hoisting!
//       .mock() will be automatically hoisted to the top of the code block,
//       because of this function decomposition is not possible without overhead
jest.mock('../../src/utils/inject-db', () => {
  const originalModule = jest.requireActual('../../src/utils/inject-db')
  return {
    __esModule: true,
    ...originalModule,
    default: async (c: Context, next: Function) => {
      c.set('db', drizzle(postgres(DB_URL), { schema }))
      await next()
    },
  }
})

const testUser1 = {
  name: 'John Doe',
  email: encodeURI('john@example.com'),
  photoUrl: 'https://example.com/john.jpg',
  wakeTime: '2024-04-06T08:00:00+00:00',
}

const testUser2 = {
  name: 'John Doe',
  email: 'john@example.com',
  photoUrl: 'https://example.com/john.jpg',
}

type userType = {
  name: string
  email: string
  photoUrl: string
}

beforeAll(async () => {
  await provision(DB_NAME)
})

describe('[Smoke] Items: simple test on each endpoint, no seeding', () => {
  afterAll(async () => {
    await clean(DB_NAME)
  })

  test('POST /items: should create and return one item', async () => {
    const res = await app.request('/api/user', {
      method: 'POST',
      body: JSON.stringify(testUser1),
      headers: { 'Content-Type': 'application/json' },
    })
    expect(res.status).toBe(200)
    const resJSON = await res.json()

    expect(resJSON as userType).toMatchObject(testUser2)
  })

  test('GET /items: should return no items', async () => {
    const res = await app.request('/api/user/john@example.com')
    expect(res.status).toBe(200)
    const { email, name, photoUrl } = (await res.json()) as userType

    expect({ email, name, photoUrl }).toEqual(testUser2)
  })
})
