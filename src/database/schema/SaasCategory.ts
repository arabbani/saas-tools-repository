import { mysqlTable, tinyint, varchar } from "drizzle-orm/mysql-core";

export const saasCategory = mysqlTable("saasCategory", {
  id: tinyint("id", { unsigned: true }).autoincrement().primaryKey(),
  name: varchar("name", { length: 50 }).unique().notNull(),
});

export type Saasategory = typeof saasCategory.$inferSelect;
