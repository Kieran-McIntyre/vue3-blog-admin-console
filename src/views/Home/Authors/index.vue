<script setup>
import { onMounted } from 'vue'
import { useAuthorStore } from '@/stores/author'
import content from "./content"

const authorStore = useAuthorStore()

onMounted(() => {
  authorStore.fetchAll()
})

</script>

<template>
  <section>
    <h1>{{ content.title }}</h1>
  </section>
</template>