<script setup>
import content from "./content"

const navLinks = [
  {
    label: content.link.articles,
    icon: 'fa-book',
    route: { name: "Articles" },
  },
  {
    label: content.link.authors,
    icon: 'fa-users',
    route: { name: "Authors" },
  },
]
</script>

<template>
  <aside class="w-64 h-full bg-gray-800 shadow-sm">
    <div class="h-16 bg-gray-900" />

    <nav class="py-6 px-2 grid gap-2">
      <router-link
        v-for="navLink in navLinks"
        :key="navLink.routeName"
        :to="navLink.route"
        :class="{
          'group rounded px-3 py-3 rounded-md text-sm font-medium flex items-center': true,
          'text-gray-300 hover:bg-gray-700 hover:text-white': true,
        }"
        data-test="router-link"
      >
        <FontAwesomeIcon
          :icon="navLink.icon"
          :class="{
            'mr-3 h-5 w-5 flex-shrink-0 text-gray-400': true,
            'text-gray-300 group-hover:text-white': true,
          }"
          data-element="router-link-label"
        />

        {{ navLink.label }}
      </router-link>
    </nav>
  </aside>
</template>

<style scoped>
.router-link-active {
  @apply bg-gray-900 text-white hover:bg-gray-900 hover:text-white;
}

.router-link-active [data-element="router-link-label"] {
  @apply text-white;
}

</style>