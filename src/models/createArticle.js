import { createAuthor } from "./createAuthor";
import format from "date-fns/format"

function getFormattedPublishedAt () {
  return format(new Date(this.publishedAt), "d LLL yyyy, HH:mm")
}

export function createArticle ({ 
  id, 
  title,
  heroImageUrl,
  author,
  publishedAt,
}) {
  return {
    id, 
    title, 
    heroImageUrl,
    publishedAt,
    author: author ? createAuthor(author) : null,
    getFormattedPublishedAt,
  };
}