<script setup>
import { RouterView } from "vue-router"
import VSidebarMenu from "@/components/layout/VSidebarMenu/index.vue"
import VHeader from "@/components/layout/VHeader/index.vue"
</script>

<template>
  <div class="flex flex-1">
    <VSidebarMenu />

    <main class="bg-gray-100 flex-1 flex flex-col">
      <VHeader />

      <section class="overflow-auto">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <RouterView />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
