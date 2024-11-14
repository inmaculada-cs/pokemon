<script setup lang="ts">
const pokemonList = ref([
  {
    name: "aña",
    type: "electric",
    image:
      "https://oaidalleapiprodscus.blob.core.windows.net/private/org-238aP4tGhqKJrNP6AUL9UK2s/pokemon-image/img-edsgnbnDppB4hnzXL2WDNsVC.png?st=2024-11-14T14%3A36%3A39Z&se=2024-11-14T16%3A36%3A39Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-14T03%3A50%3A57Z&ske=2024-11-15T03%3A50%3A57Z&sks=b&skv=2024-08-04&sig=21NKAYPcemRluhP%2Bj1xqqMxPHYOWMz2pCs7xSAbK/dw%3D", // Cualquier URL de una imagen
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
