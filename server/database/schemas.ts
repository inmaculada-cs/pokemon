import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const pokemonTable = sqliteTable("pokemon", {
  id: int("id").primaryKey({ autoIncrement: true }).notNull(),

  name: text("name").notNull(),
  type: text("type").notNull(),
  imageUrl: text("image_url").notNull(),

  likes: int("likes").notNull().default(0),

  timestamp: int("timestamp", { mode: "timestamp_ms" }).default(
    sql`(unixepoch())`
  ),
});
