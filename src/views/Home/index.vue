<script setup>
import { RouterView } from 'vue-router'
import VSidebarMenu from '@/components/layout/VSidebarMenu/index.vue'
import VHeader from '@/components/layout/VHeader/index.vue'
</script>

<template>
  <div class="flex flex-1">
    <VSidebarMenu />

    <main class="bg-red-800 flex-1 flex flex-col">
      <VHeader />
      <RouterView />
    </main>
  </div>
</template>
