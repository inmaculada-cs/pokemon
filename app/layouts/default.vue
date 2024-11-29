<template>
  <div>
    <div class="w-full py-2 bg-sky-500 text-white">
      <div class="flex items-center gap-x-4 px-4">
        <NuxtLink to="/">Inicio</NuxtLink>
        <NuxtLink to="/create">Crear</NuxtLink>
        <NuxtLink to="list">Ver</NuxtLink>
      </div>
    </div>
    <slot />
  </div>
</template>
