import { ref } from 'vue'
import { defineStore } from 'pinia'
import { request } from "graphql-request"
import { fetchAllAuthorsQuery } from "./queries"
import { logError } from '@/utils/logger'

export const useAuthorStore = defineStore('author', () => {
  const authors = ref([])
  const isLoading = ref(true)

  /**
   * Fetches all Author records.
   * @returns {Promise}
   */
  const fetchAll = async () => {
    try {
      isLoading.value = true

      const result = await request("/graphql", fetchAllAuthorsQuery)
      authors.value = result?.authors ?? []
    } catch (error) {
      logError('authorStore/fetchAll **fail**', {
        error: error.message,
      })
    } finally {
      isLoading.value = false
    }
  }

  return { 
    authors,
    isLoading,
    fetchAll 
  }
})
