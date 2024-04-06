import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

/**
 * Items
 */
export const items = pgTable('items', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  brand: text('brand'),
  photoUrl: text('photo_url'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  authorUsername: text('author_username').notNull(),
})
