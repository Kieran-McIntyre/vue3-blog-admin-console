<script setup>
import { computed, onMounted } from "vue"
import { useRouter } from "vue-router"
import VListLayout from "@/components/layout/VListLayout/index.vue"
import { useArticleStore } from "@/stores/article"
import content from "./content"

const articleStore = useArticleStore()
const router = useRouter()

onMounted(() => {
  articleStore.fetchAll()
})

const handleClickCreate = () => {
  router.push({
    name: "ArticleCreate",
  })
}

const formatArticle = (article) => {
  return {
    id: article.id,
    title: article.title,
    imageUrl: article.heroImageUrl,
    details: [
      { icon: "fa-user", label: article.author.getFullName() },
      { icon: "fa-calendar", label: article.getFormattedPublishedAt() },
    ],
    to: {
      name: "ArticleCreate",
      params: {
        id: article.id,
      },
    },
  }
}

const formattedArticles = computed(() => {
  return articleStore.articles.map(formatArticle)
})

</script>

<template>
  <VListLayout
    :title="content.title"
    :loading="articleStore.isLoading"
    :items="formattedArticles"
    @click-create="handleClickCreate"
  />
</template>