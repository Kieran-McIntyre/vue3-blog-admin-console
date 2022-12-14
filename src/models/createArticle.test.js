import { describe, expect, it } from "vitest"
import { createArticle } from "./createArticle"

describe("createArticle", () => {
  it("has author > should return formatted article", () => {
    // Arrange.
    const articleData = {
      id: "some-article-id", 
      title: "Some article title",
      heroImageUrl: "some-image-url",
      publishedAt: "2022-09-28T11:55:59.741Z",
      author: {
        id: "some-author-id",
        firstName: "Author First Name",
        lastName: "Author Last Name",
      },
    }

    const article = createArticle(articleData)

    // Assert.
    expect(article).toEqual(expect.objectContaining({
      author:  {
        firstName: "Author First Name",
        getFullName: expect.any(Function),
        id: "some-author-id",
        imageUrl: undefined,
        lastName: "Author Last Name",
        location: undefined,
      },
      getFormattedPublishedAt:  expect.any(Function),
      heroImageUrl: "some-image-url",
      id: "some-article-id",
      publishedAt: "2022-09-28T11:55:59.741Z",
      title: "Some article title",
    }))
  })

  it("does NOT have author > should return formatted article", () => {
     // Arrange.
     const articleData = {
      id: "some-article-id", 
      title: "Some article title",
      heroImageUrl: "some-image-url",
      publishedAt: "2022-09-28T11:55:59.741Z",
    }

    const article = createArticle(articleData)

    // Assert.
    expect(article).toEqual(expect.objectContaining({
      author: null,
      getFormattedPublishedAt:  expect.any(Function),
      heroImageUrl: "some-image-url",
      id: "some-article-id",
      publishedAt: "2022-09-28T11:55:59.741Z",
      title: "Some article title",
    }))
  })

  describe("getters", () => {
    describe("getFormattedPublishedAt", () => {
      it("does NOT have publishedAt date > should return empty string", () => {
        // Arrange.
        const articleData = {}

        const article = createArticle(articleData)
        
        // Assert.
        expect(article.getFormattedPublishedAt()).toBe("")
      })

      it("has publishedAt date > should return formatted date", () => {
        // Arrange.
        const articleData = {
          publishedAt: "2022-09-28T11:55:59.741Z",
        }

        const article = createArticle(articleData)
        
        // Assert.
        expect(article.getFormattedPublishedAt()).toBe("28 Sep 2022, 12:55")
      })
    })
  })
})