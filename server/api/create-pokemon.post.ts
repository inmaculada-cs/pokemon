import { OpenAI } from "openai";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { name, type } = await readBody<{ name: string; type: string }>(event);

  try {
    const openai = new OpenAI({
      apiKey: config.openaiApiKey,
    });

    const pokemon = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Generate a pokemon card, like a tcg card, for a pokemon called ${name} of pokemon tcg card type ${type} with no background and no extra card aside from the front of the card.`,
    });

    const imageUrl =
      pokemon.data[0].url ??
      "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM9/SM9_EN_14.png";

    return {
      imageUrl: imageUrl,
    };
  } catch (error) {
    console.error(error);
    return {
      imageUrl:
        "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM9/SM9_EN_14.png",
    };
  }
});
