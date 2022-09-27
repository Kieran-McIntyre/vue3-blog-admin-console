import { ref } from 'vue'
import { defineStore } from 'pinia'
import { request } from "graphql-request"
import { fetchAllArticlesQuery } from "./queries"
import { logError } from '@/utils/logger'

export const useArticleStore = defineStore('article', () => {
  const articles = ref([])
  const isLoading = ref(true)

  const fetchAll = async () => {
    try {
      isLoading.value = true

      const result = await request("/graphql", fetchAllArticlesQuery)
      articles.value = result?.articles ?? []
    } catch (error) {
      logError('articleStore/fetchAll **fail**', {
        error: error.message,
      })
    } finally {
      isLoading.value = false
    }
  }

  return { 
    articles,
    isLoading,
    fetchAll 
  }
})
