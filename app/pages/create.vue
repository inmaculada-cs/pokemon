<script setup lang="ts">
const name = ref("");
const type = ref("");
const loading = ref(false);
const message = ref("");

const imageUrl = ref<string>("");

async function onSubmit() {
  loading.value = true;
  const res = await $fetch("/api/create-pokemon", {
    method: "POST",
    body: {
      name: name.value,
      type: type.value,
    },
  });
  loading.value = false;
  if (res.pokemon) {
    imageUrl.value = res.pokemon.imageUrl;
  } else {
    message.value = "An error ocurred";
  }
}

const pokemonTypes = [
  "Fire",
  "Fighting",
  "Water",
  "Dragon",
  "Lightning",
  "Grass",
  "Fairy",
  "Psychic",
  "Darkness",
  "Metal",
  "Colorless",
];

async function copyImgLink() {
  await navigator.clipboard.writeText(imageUrl.value);
}
</script>

<template>
  <div class="mx-auto max-w-5xl">
    <form
      method="POST"
      class="space-y-4 max-w-md w-full mx-auto"
      @submit.prevent="onSubmit"
    >
      <div class="flex flex-col">
        <label for="">Name</label>
        <input v-model="name" type="text" required />
      </div>
      <div class="flex flex-col">
        <label for="">Type</label>
        <select name="type" v-model="type" required>
          <template v-for="opt in pokemonTypes" :key="opt.value">
            <option :value="opt">{{ opt }}</option>
          </template>
        </select>
      </div>
      <div class="flex items-center gap-x-4">
        <button
          type="submit"
          class="inline-flex px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Send
        </button>
        <button
          class="inline-flex px-4 py-2 rounded-md bg-green-500 text-white"
          type="button"
          @click="copyImgLink"
        >
          Copy img link
        </button>
      </div>
    </form>
    <div class="pt-8">
      <div v-if="loading" class="flex items-center justify-center">
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <div v-if="!loading === imageUrl.length > 0">
        <div class="max-w-md mx-auto">
          <img :src="imageUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
