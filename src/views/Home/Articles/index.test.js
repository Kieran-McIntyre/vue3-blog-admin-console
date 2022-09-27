import { vi, describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ArticlesView from './index.vue'
import { createTestingPinia } from '@pinia/testing'
import { useArticleStore } from '@/stores/article'

describe('ArticlesView', () => {
  let store

  const mountComp = () => {
    const mountedComp = shallowMount(ArticlesView, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn,
        })],
      },
    })

    store = useArticleStore()
    return mountedComp
  }

  it('should render', () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })

  it("should fetch articles", () => {
    // Arrange.
    store.fetchAll = vi.fn()
    mountComp()

    // Assert.
    expect(store.fetchAll).toHaveBeenCalledTimes(1)
  })
})
