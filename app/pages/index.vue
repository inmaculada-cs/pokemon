<script setup lang="ts">
async function useGPT() {
  const res = await $fetch("", {
    method: "POST",
  });
  return res;
}
</script>

<template>
  <form action="">
    <input type="text" />
    <button>Enviar</button>
  </form>
</template>
