export const graphQLSchema = `
  input ArticleInput {
    title: String
    content: String
    isPublished: Boolean
    publishedAt: String
    tags: [TagInput]
    author: AuthorInput
  }

  input AuthorInput {
    id: ID!
    firstName: String!
    lastName: String!
    description: String
    imageUrl: String
    location: String
  }

  input TagInput {
    id: ID!
    name: String
  }

  type Article {
    id: ID!
    title: String!
    content: String
    heroImageUrl: String
    tags: [Tag]
    publishedAt: String
    isPublished: Boolean
    author: Author
  }

  type Tag {
    id: ID!
    name: String!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    description: String
    imageUrl: String
    location: String
  }

  type Mutation {
    createArticle(input: ArticleInput!): Article
    updateArticle(id: ID!, input: ArticleInput!): Article
  }

  type Query {
    articles: [Article]
    article(id: ID, title: String): Article
    authors: [Author]
    author(id: ID): Author
  }
`