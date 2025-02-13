import { sql } from "drizzle-orm"
import {
  AnyPgColumn,
  integer,
  pgTable,
  timestamp,
  uniqueIndex,
  varchar
} from "drizzle-orm/pg-core"

export const usersTable = pgTable(
  "users",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    email: varchar({ length: 254 }).notNull().unique(),
    passwordHash: varchar("password_hash", { length: 255 }).notNull()
  },
  (table) => [uniqueIndex("emailUniqueIndex").on(lower(table.email))]
)

export function lower(email: AnyPgColumn) {
  return sql`lower(${email})`
}