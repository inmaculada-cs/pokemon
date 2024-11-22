import { drizzle } from "drizzle-orm/libsql";
import invariant from "tiny-invariant";

invariant(process.env.NUXT_DB_FILE_NAME, "NUXT_DB_FILE_NAME not set");

export const db = drizzle(process.env.NUXT_DB_FILE_NAME);
