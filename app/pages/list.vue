<script setup lang="ts">
const pokemonList = ref([
  {
    name: "Pikachu",
    type: "electric",
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY1/XY1_EN_42.png", // Cualquier URL de una imagen
  },
  {
    name: "Charizard",
    type: "fire",
    image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM9/SM9_EN_14.png",
  },
]);
</script>

<template>
  <div class="container py-8 px-2 sm:px-6">
    <div class="grid grid-cols-2 gap-4">
      <template v-for="pokemon in pokemonList" :key="pokemon.name">
        <div class="p-2 border rounded">
          <p>{{ pokemon.name }}</p>
          <img :src="pokemon.image" alt="" />
        </div>
      </template>
    </div>
  </div>
</template>
