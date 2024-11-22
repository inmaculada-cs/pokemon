import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import invariant from "tiny-invariant";
import { pokemonTable } from "./schemas";

invariant(process.env.NUXT_DB_FILE_NAME, "NUXT_DB_FILE_NAME not set");

const client = createClient({ url: process.env.NUXT_DB_FILE_NAME! });
export const db = drizzle(client, {
  schema: {
    pokemonTable,
  },
});
