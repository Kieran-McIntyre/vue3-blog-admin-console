import { describe, expect, it } from "vitest"
import { createAuthor } from "./createAuthor"

describe('createAuthor', () => {
  it('should return correctly', () => {
    // Arrange.
    const authorData = {
      id: 'some-author-id',
      firstName: 'Author First Name',
      lastName: 'Author Last Name',
    }

    const author = createAuthor(authorData)

    // Assert.
    expect(author).toEqual(expect.objectContaining({
      firstName: "Author First Name",
      getFullName: expect.any(Function),
      id: "some-author-id",
      imageUrl: undefined,
      lastName: "Author Last Name",
      location: undefined,
    }))
  })
})