import {
  boolean,
  mysqlEnum,
  mysqlTable,
  smallint,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const saasTool = mysqlTable("saasTool", {
  id: smallint("id", { unsigned: true }).autoincrement().primaryKey(),
  name: varchar("name", { length: 50 }).unique().notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
  excerpt: varchar("excerpt", { length: 100 }).notNull(),
  pricingModel: mysqlEnum("pricingModel", [
    "Free",
    "Paid",
    "Freemium",
    "Open Source"
  ]).notNull(),
  imageUrl: varchar("imageUrl", { length: 300 }).notNull(),
  websiteUrl: varchar("websiteUrl", { length: 300 }).notNull(),
  upvotes: smallint("upvotes", { unsigned: true }).default(0).notNull(),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  tags: varchar("tags", { length: 300 }).notNull(),
});

export type PricingModel = "Free" | "Paid" | "Freemium" | "Open Source";

export type SaasTool = typeof saasTool.$inferSelect;
