<script setup lang="ts">
const { data } = useFetch("/api/list-pokemon");
</script>

<template>
  <div>
    <div class="container py-8 px-2 sm:px-6">
      <div class="grid grid-cols-2 gap-4">
        <template v-for="pokemon in data" :key="pokemon.name">
          <div class="p-2 border rounded">
            <img :src="pokemon.imageUrl" alt="" />
            <p>Name: {{ pokemon.name }}</p>
            <p>Type: {{ pokemon.type }}</p>
            <p>Created: {{ new Date(pokemon.timestamp) }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
