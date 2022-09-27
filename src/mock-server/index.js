import { createServer as createMirageServer, Model, belongsTo, hasMany } from "miragejs"
import { createGraphQLHandler } from "@miragejs/graphql"
import { graphQLSchema } from "./schema"
import { tags, articles, authors } from "./fixtures";
import { getRandomItemFromArray, getRandomItemsFromArray } from "@/utils/getRandomItemFromArray";

const ARTICLE_TAG_COUNT = 2

export const createMockServer = () => {
  createMirageServer({
    models: {
      author: Model,
      tag: Model,
      article: Model.extend({
        tags: hasMany(),
        author: belongsTo(),
      }),
    },

    routes () {
      this.post("/graphql", createGraphQLHandler(graphQLSchema, this.schema))
    },

    seeds (server) {
      // Create Tag records.
      const tagRecords = tags.map(tag => server.create("tag", tag))

      // Create Author records.
      const authorRecords = authors.map(author => server.create("author", author))

      // Create Article records.
      articles.map(article => {
        return server.create("article", {
          ...article,
          author: getRandomItemFromArray(authorRecords),
          tags: getRandomItemsFromArray(tagRecords, ARTICLE_TAG_COUNT),
        })
      })
    },
  })
}