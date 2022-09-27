<script setup>
import { reactive } from 'vue'
import content from './content'

const state = reactive({
    searchValue: ''
})

</script>

<template>
  <div class="h-full flex-1 bg-red-200 flex items-center">
    <div class="h-8 w-8 bg-pink-800" />

    <input
      class="h-full flex-1 focus:outline-none p-4"
      v-model="state.searchValue"
      :placeholder="content.placeholder"
    >
  </div>
</template>