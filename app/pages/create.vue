<script setup lang="ts">
const name = ref("");
const type = ref("");
const loading = ref(false);

const imageUrl = ref<string>(
  "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY1/XY1_EN_42.png"
);

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
  imageUrl.value = res.imageUrl;
}

async function copyImgLink() {
  await navigator.clipboard.writeText(imageUrl.value);
}
</script>

<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <form method="POST" class="space-y-4" @submit.prevent="onSubmit">
      <div>
        <label for="">Name</label>
        <input
          v-model="name"
          type="text"
          class="block border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label for="">Type</label>
        <input
          v-model="type"
          type="text"
          class="block border border-gray-300 rounded-md"
          required
        />
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
      <p v-if="loading">Cargando...</p>
      <img :src="imageUrl" alt="" />
    </div>
  </div>
</template>
