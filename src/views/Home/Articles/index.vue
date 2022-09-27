<script setup>
import { onMounted } from 'vue'
import { useArticleStore } from '@/stores/article'
import content from "./content"

const articleStore = useArticleStore()

onMounted(() => {
  articleStore.fetchAll()
})

</script>

<template>
  <section>
    <h1>{{ content.title }}</h1>
  </section>
</template>