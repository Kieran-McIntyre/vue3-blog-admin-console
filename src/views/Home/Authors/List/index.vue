<script setup>
import { computed, onMounted } from "vue"
import { useRouter } from "vue-router"
import { useAuthorStore } from "@/stores/author"
import VListLayout from "@/components/layout/VListLayout/index.vue"
import content from "./content"

const authorStore = useAuthorStore()
const router = useRouter()

onMounted(() => {
  authorStore.fetchAll()
})

const handleClickCreate = () => {
  router.push({
    name: "ArticleCreate",
  })
}

const formatAuthor = (author) => {
  return {
    id: author.id,
    title: author.getFullName(),
    imageUrl: author.imageUrl,
    details: [
      { icon: "fa-location-dot", label: author.location },
    ],
    to: {
      name: "AuthorCreate",
      params: {
        id: author.id,
      },
    },
  }
}

const formattedAuthors = computed(() => {
  return authorStore.authors.map(formatAuthor)
})

</script>

<template>
  <VListLayout
    :title="content.title"
    :loading="authorStore.isLoading"
    :items="formattedAuthors"
    :is-image-circular="true"
    @click-create="handleClickCreate"
  />
</template>