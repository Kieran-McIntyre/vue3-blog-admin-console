import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home/index.vue"
import Articles from "@/views/Home/Articles/index.vue"
import ArticleList from "@/views/Home/Articles/List/index.vue"
import ArticleCreate from "@/views/Home/Articles/Create/index.vue"
import Authors from "@/views/Home/Authors/index.vue"
import AuthorList from "@/views/Home/Authors/List/index.vue"
import AuthorCreate from "@/views/Home/Authors/Create/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      redirect: {
        name: "Articles",
      },
      children: [
        {
          path: "articles",
          name: "Articles",
          component: Articles,
          redirect: {
            name: "ArticleList",
          },
          children: [
            {
              path: "list",
              name: "ArticleList",
              component: ArticleList,
            },
            {
              path: "create/:id?",
              name: "ArticleCreate",
              component: ArticleCreate,
            },
          ],
        },
        {
          path: "authors",
          name: "Authors",
          component: Authors,
          redirect: {
            name: "AuthorList",
          },
          children: [
            {
              path: "list",
              name: "AuthorList",
              component: AuthorList,
            },
            {
              path: "create/:id?",
              name: "AuthorCreate",
              component: AuthorCreate,
            },
          ],
        },
      ],
    },
  ],
})

export default router
