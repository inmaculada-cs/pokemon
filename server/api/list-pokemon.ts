import { db } from "~~/server/database/client";
import { pokemonTable } from "../database/schemas";

export default defineEventHandler(async (event) => {
  const pokemon = await db.select().from(pokemonTable);
  return pokemon;
});
