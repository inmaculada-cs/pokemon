import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text('name'),
  type: text('type'),
  imageUrl: text('image_url')
});
