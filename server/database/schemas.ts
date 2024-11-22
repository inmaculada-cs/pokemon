import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const pokemonTable = sqliteTable("pokemon", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),

  name: text("name").notNull(),
  type: text("type").notNull(),
  imageUrl: text("image_url").notNull(),

  likes: integer("likes").notNull().default(0),

  timestamp: integer("timestamp", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
});
