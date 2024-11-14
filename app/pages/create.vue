<script setup lang="ts">
function onSubmit() {
  show.value = true;
}

const show = ref(false);
const name = ref("");
const type = ref("");

const pokemonIn = {
  name: "",
  type: "",
};

const pokemonOut = {
  image: "",
};
</script>

<template>
  <div>
    <NuxtLink to="/">Inicio</NuxtLink>
    <form method="POST" class="space-y-4" @submit.prevent="onSubmit">
      <div>
        <label for="">Nombre</label>
        <input
          v-model="name"
          type="text"
          class="block border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label for="">Tipo</label>
        <input
          v-model="type"
          type="text"
          class="block border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        class="inline-flex px-4 py-2 rounded-md bg-blue-500 text-white"
      >
        Enviar
      </button>
    </form>
    <div class="pt-8" v-if="show">
      <p>Enviaste los siguientes datos:</p>
      <p>Nombre: {{ name }}</p>
      <p>Tipo: {{ type }}</p>
    </div>
  </div>
</template>
