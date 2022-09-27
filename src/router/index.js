import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Articles from '@/views/Home/Articles/index.vue'
import Authors from '@/views/Home/Authors/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: {
        name: "Articles"
      },
      children: [
        {
          path: 'articles',
          name: "Articles",
          component: Articles,
        },
        {
          path: 'authors',
          name: "Authors",
          component: Authors,
        },
      ]
    },
  ]
})

export default router
