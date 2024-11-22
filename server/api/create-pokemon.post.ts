import { OpenAI } from "openai";
import { db } from "~~/server/database/client";
import { pokemonTable } from "../database/schemas";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { name, type } = await readBody<{ name: string; type: string }>(event);

  try {
    const openai = new OpenAI({
      apiKey: config.openaiApiKey,
    });

    const imageData = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Generate a tcg card, similar to a pokemon tcg card, 
        for a pocket monster called ${name} of type ${type} (based on pokemon tcg types). 
        The image must contain the card and only the front side of the card, 
        with no additional details. Again, the resulting image must contain ONLY the front side of the card and nothing else. 
        Show the name of the monster on top (the name must be the exact name received), then its art, and then its data. 
        For the data, generate random stats and moves based on those used in pokemon tcg cards. Don't show any hands in the image, no external objects, no background, only the card.`,
    });

    const imageUrl =
      imageData.data[0].url ??
      "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM9/SM9_EN_14.png";

    const [pokemon] = await db
      .insert(pokemonTable)
      .values({
        name: name,
        type: type,
        imageUrl: imageUrl,
      })
      .returning();

    return {
      pokemon,
    };
  } catch (error) {
    console.error(error);
    return {
      pokemon: null,
    };
  }
});
