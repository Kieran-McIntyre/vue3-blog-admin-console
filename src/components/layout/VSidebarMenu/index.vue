<script setup>
import { useRoute } from 'vue-router'
import content from "./content"

const currentRoute = useRoute();
const navLinks = [
  {
    label: content.link.articles,
    route: { name: "Articles" },
  },
  {
    label: content.link.authors,
    route: { name: "Authors" },
  },
]

/**
 * Tests whether the provided routeName is active or not.
 * @param {String} routeName - The route name to test.
 * @returns {Boolean} - Returns true if active. Returns false if inactive.
 */
const isRouteSelected = (routeName) => {
  return routeName === currentRoute.name
}

</script>

<template>
  <aside class="w-64 h-full bg-blue-600">
    <div class="h-16 bg-green-400" />
    <nav>
      <router-link
        v-for="navLink in navLinks"
        :key="navLink.routeName"
        :to="navLink.route"
        :class="{
          'bg-blue-200': !isRouteSelected(navLink.route.name),
          'bg-red-200': isRouteSelected(navLink.route.name),
        }"
        data-test="router-link"
      >
        {{ navLink.label }}
      </router-link>
    </nav>
  </aside>
</template>