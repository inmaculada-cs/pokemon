import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./server/database/migrations",
  schema: "./server/database/schemas.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.NUXT_DB_FILE_NAME!,
  },
});
