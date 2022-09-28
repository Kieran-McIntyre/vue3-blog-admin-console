import { ref } from 'vue'
import { defineStore } from 'pinia'
import { request } from "graphql-request"
import { fetchAllArticlesQuery } from "./queries"
import { logError } from '@/utils/logger'
import { createArticle } from '@/models/createArticle'

export const useArticleStore = defineStore('article', () => {
  const articles = ref([])
  const isLoading = ref(true)

  /**
   * Fetches all Article records.
   * @returns {Promise}
   */
  const fetchAll = async () => {
    try {
      isLoading.value = true

      const result = await request("/graphql", fetchAllArticlesQuery)
      const articleData = result?.articles ?? []

      articles.value = articleData.map(createArticle)
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
