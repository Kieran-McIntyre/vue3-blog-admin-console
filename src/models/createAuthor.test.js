import { describe, expect, it } from "vitest"
import { createAuthor } from "./createAuthor"

describe("createAuthor", () => {
  it("should return formatted author", () => {
    // Arrange.
    const authorData = {
      id: "some-author-id",
      firstName: "Author First Name",
      lastName: "Author Last Name",
      location: "London, UK",
      imageUrl: "some-image-url",
    }

    const author = createAuthor(authorData)

    // Assert.
    expect(author).toEqual(expect.objectContaining({
      firstName: "Author First Name",
      getFullName: expect.any(Function),
      id: "some-author-id",
      imageUrl: "some-image-url",
      lastName: "Author Last Name",
      location: "London, UK",
    }))
  })

  describe("getters", () => {
    describe("getFullName", () => {
      it("does NOT have any names > should return empty string", () => {
        // Arrange.
        const authorData = {
          id: "some-author-id",
        }

        const author = createAuthor(authorData)

        // Assert.
        expect(author.getFullName()).toBe("")
      })

      it("only has firstName > should return firstName", () => {
        // Arrange.
        const authorData = {
          id: "some-author-id",
          firstName: "John",
        }

        const author = createAuthor(authorData)

        // Assert.
        expect(author.getFullName()).toBe("John")
      })

      it("only has lastName > should return lastName", () => {
        // Arrange.
        const authorData = {
          id: "some-author-id",
          lastName: "Doe",
        }

        const author = createAuthor(authorData)

        // Assert.
        expect(author.getFullName()).toBe("Doe")
      })

      it("has firstName AND lastName > should return full name", () => {
        // Arrange.
        const authorData = {
          id: "some-author-id",
          firstName: "John",
          lastName: "Doe",
        }

        const author = createAuthor(authorData)

        // Assert.
        expect(author.getFullName()).toBe("John Doe")
      })
    })
  })
})