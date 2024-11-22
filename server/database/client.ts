import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import invariant from "tiny-invariant";

invariant(process.env.NUXT_DB_FILE_NAME, "NUXT_DB_FILE_NAME not set");

const client = createClient({ url: process.env.DB_FILE_NAME! });
export const db = drizzle(client);
