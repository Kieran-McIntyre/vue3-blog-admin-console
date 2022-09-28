<script setup>
import { computed } from "vue"
import VButton, { ButtonType } from "@/components/form/VButton/index.vue"
import VCard from "@/components/layout/VCard/index.vue"
import { initializeArrayWithLength } from "@/utils/initializeArrayWithLength";
import content from "./content"

const LOADING_ITEMS_COUNT = 10;

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
   loading: {
    type: Boolean,
    default: false,
  },
  isImageCircular: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["clickCreate"])

const handleClickCreate = () => {
  emit("clickCreate")
}

const loadingListItems = initializeArrayWithLength(LOADING_ITEMS_COUNT)
  .map((index) => ({
    id: index,
    to: {},
  }))

const listItems = computed(() => {
  if (props.loading) return loadingListItems
  return props.items
})

</script>

<template>
  <div class="flex items-center mb-4 justify-between">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900">
      {{ title }}
    </h1>

    <VButton
      @click="handleClickCreate"
      :type="ButtonType.Primary"
    >
      {{ content.create }}
    </VButton>
  </div>

  <div class="grid bg-white shadow rounded-lg">
    <VCard 
      v-for="item in listItems"
      :key="item.id"
      :item="item"
      :is-image-circular="isImageCircular"
      :loading="loading"
    />
  </div>
</template>