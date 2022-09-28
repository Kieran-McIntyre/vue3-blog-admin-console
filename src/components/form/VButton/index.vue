<script>
export const ButtonType = {
  Primary: "primary",
  Secondary: "secondary",
}
</script>

<script setup>
import { computed } from "vue"

const props = defineProps({
  type: {
    type: String,
    default: ButtonType.Primary,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}

const isTypePrimary = computed(() => props.type === ButtonType.Primary)
const isTypeSecondary = computed(() => props.type === ButtonType.Secondary)

</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="{
      'inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm focus:ring-offset-2 focus:outline-none focus:ring-2': true,
      'border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500': isTypePrimary,
      'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500': isTypeSecondary,
    }"
    @click="handleClick"
    data-test="button"
  >
    <slot />
  </button>
</template>