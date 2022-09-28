<script setup>
import { RouterView } from 'vue-router'
import content from "./App.content"
</script>

<template>
  <div class="w-full h-screen">
    <RouterView class="w-full h-full" />
  </div>

  <div class="block md:hidden fixed z-20 w-screen h-screen top-0 left-0 bg-gray-900 flex items-center justify-center">
    <p class="text-gray-100 text-center italic text-lg">
      {{ content.mobileNotSupported }}
    </p>
  </div>
</template>