export const fetchAllArticlesQuery = `
  query Articles {
    articles {
        id
        title
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