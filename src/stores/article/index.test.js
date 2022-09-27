import { describe, it, beforeEach, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useArticleStore } from '.'
import { request } from "graphql-request"
import { fetchAllArticlesQuery } from "./queries"

vi.mock("graphql-request", () => ({
  request: vi.fn()
}))

describe('Article store', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    setActivePinia(createPinia())
    request.mockResolvedValue({})
  })

  describe("fetchAll", () => {
    it("should set loading to true", () => {
      // Arrange.
      const articleStore = useArticleStore()
      articleStore.isLoading = false

      // Act.
      articleStore.fetchAll()

      // Assert.
      expect(articleStore.isLoading).toBe(true)
    })

    it("should call API with correct payload", () => {
      // Arrange.
      const articleStore = useArticleStore()

      // Act.
      articleStore.fetchAll()

      // Assert.
      expect(request).toHaveBeenCalledTimes(1)
      expect(request).toHaveBeenCalledWith("/graphql", fetchAllArticlesQuery)
    })

    it("should update articles with response data", async () => {
      // Arrange.
      const expectedArticles = [
        { id: 1, title: "Article Title 1" },
        { id: 2, title: "Article Title 2" },
      ]

      request.mockResolvedValue({
        articles: expectedArticles
      })

      const articleStore = useArticleStore()

      // Assert.
      expect(articleStore.articles).toEqual([])

      // Act.
      await articleStore.fetchAll()

      // Assert.
      expect(articleStore.articles).toEqual(expectedArticles)
    })

    it("request has resolved > should set loading to false", async () => {
      // Arrange.
      const articleStore = useArticleStore()
      articleStore.isLoading = true

      // Act.
      await articleStore.fetchAll()

      // Assert.
      expect(articleStore.isLoading).toBe(false)
    })
  })
})