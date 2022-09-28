import { describe, it, beforeEach, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthorStore } from '.'
import { request } from "graphql-request"
import { fetchAllAuthorsQuery } from "./queries"

vi.mock("graphql-request", () => ({
  request: vi.fn()
}))

describe('Author store', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    setActivePinia(createPinia())
    request.mockResolvedValue({})
  })

  describe("fetchAll", () => {
    it("should set loading to true", () => {
      // Arrange.
      const authorStore = useAuthorStore()
      authorStore.isLoading = false

      // Act.
      authorStore.fetchAll()

      // Assert.
      expect(authorStore.isLoading).toBe(true)
    })

    it("should call API with correct payload", () => {
      // Arrange.
      const authorStore = useAuthorStore()

      // Act.
      authorStore.fetchAll()

      // Assert.
      expect(request).toHaveBeenCalledTimes(1)
      expect(request).toHaveBeenCalledWith("/graphql", fetchAllAuthorsQuery)
    })

    it("should update articles with response data", async () => {
      // Arrange.
      const expectedAuthors = [
        { id: 1, firstName: "Author", lastName: "One" },
        { id: 2, firstName: "Author", lastName: "Two" },
        { id: 3, firstName: "Author", lastName: "Three" },
      ]

      request.mockResolvedValue({
        authors: expectedAuthors
      })

      const authorStore = useAuthorStore()

      // Assert.
      expect(authorStore.authors).toEqual([])

      // Act.
      await authorStore.fetchAll()

      // Assert.
      expect(authorStore.authors).toEqual([
        expect.objectContaining(expectedAuthors[0]),
        expect.objectContaining(expectedAuthors[1]),
        expect.objectContaining(expectedAuthors[2]),
      ])
    })

    it("request has resolved > should set loading to false", async () => {
      // Arrange.
      const authorStore = useAuthorStore()
      authorStore.isLoading = true

      // Act.
      await authorStore.fetchAll()

      // Assert.
      expect(authorStore.isLoading).toBe(false)
    })
  })
})