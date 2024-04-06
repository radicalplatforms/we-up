import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { pgTable, primaryKey, text, timestamp } from 'drizzle-orm/pg-core'

/**
 * Users
 */
export const users = pgTable('users', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  photoUrl: text('photo_url'),
  wakeTime: timestamp('wake_time', { withTimezone: true }).notNull().defaultNow(),
})

export const usersRelations = relations(users, ({ many }) => ({
  usersToGroups: many(usersToGroups),
  posts: many(posts),
}))

/**
 * Posts
 */
export const posts = pgTable('posts', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  userId: text('user_id').notNull(),
  photoUrl: text('photo_url'),
  timestamp: timestamp('timestamp', { withTimezone: true }).notNull().defaultNow(),
})

export const postsRelations = relations(posts, ({ one }) => ({
  users: one(users),
}))

/**
 * Groups
 */
export const groups = pgTable('groups', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  rules: text('rules'),
})

export const groupsRelations = relations(groups, ({ many }) => ({
  usersToGroups: many(usersToGroups),
  prompts: many(prompts),
}))

/**
 * Prompts
 */
export const prompts = pgTable('prompts', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  groupId: text('group_id').notNull(),
  date: timestamp('date', { withTimezone: true }).notNull().defaultNow(),
  text: text('text'),
  userId: text('user_id').notNull(),
})

export const promptsRelations = relations(prompts, ({ one }) => ({
  groups: one(groups),
  users: one(users),
}))

/**
 * Users to Groups
 */
export const usersToGroups = pgTable(
  'users_to_groups',
  {
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    groupId: text('group_id')
      .notNull()
      .references(() => groups.id, { onDelete: 'cascade' }),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.groupId] }),
    }
  }
)
