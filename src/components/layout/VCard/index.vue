<script setup>
import { Skeletor } from 'vue-skeletor';

defineProps({
  item: {
    type: Object,
    required: true,
  },
  isImageCircular: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <router-link
    :to="item.to"
    :class="{
      'first:rounded-t-lg last:rounded-b-lg w-full border-t first:border-0 px-6 py-4 flex items-center': true,
      'hover:bg-gray-50 cursor-pointer': !loading,
      'cursor-default': loading,
    }"
    data-test="card-body"
  >
    <Skeletor
      v-if="loading"
      :circle="isImageCircular"
      size="80"
    />

    <img
      v-else
      :src="item.imageUrl"
      :class="{
        'h-20 w-20': true,
        'rounded': !isImageCircular,
        'rounded-full': isImageCircular,
      }"
      data-test="card-image"
    >

    <div class="ml-4 flex-1">
      <p
        class="text-indigo-600 font-medium"
        data-test="card-title"
      >
        <Skeletor
          v-if="loading"
          class="max-w-sm"
        />

        <template v-else>
          {{ item.title }}
        </template>
      </p>

      <Skeletor
        v-if="loading"
        class="mt-1 flex max-w-xs"
      />

      <div
        v-else
        class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
        data-test="card-details"
      >
        <div
          v-for="detail in item.details"
          :key="detail.icon"
          class="mt-2 flex items-center text-sm text-gray-500"
          data-test="card-detail"
        >
          <FontAwesomeIcon
            :icon="detail.icon"
            class="mr-1.5 h-3 w-3 flex-shrink-0 text-gray-400"
            data-test="card-detail-icon"
          />

          {{ detail.label }}
        </div>
      </div>
    </div>
  </router-link>
</template>