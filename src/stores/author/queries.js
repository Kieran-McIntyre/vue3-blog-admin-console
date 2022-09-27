export const fetchAllAuthorsQuery = `
    query Authors {
        authors {
            id
            firstName
            lastName
        }
    }
`