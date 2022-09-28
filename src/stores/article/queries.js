export const fetchAllArticlesQuery = `
  query Articles {
    articles {
        id
        title
        heroImageUrl
        publishedAt
        isPublished
        tags {
          id
          name
        }
        author {
          id
          firstName
          lastName
        }
      }
  }
`