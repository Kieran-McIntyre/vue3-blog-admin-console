import { vi, describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ArticleListView from './index.vue'
import { createTestingPinia } from '@pinia/testing'
import { useArticleStore } from '@/stores/article'
import { useRouter } from 'vue-router/dist/vue-router.mjs'

// @TODO: Update with 'vue-router'. 
// See https://github.com/vuejs/router/issues/1466#issuecomment-1183071611
vi.mock('vue-router/dist/vue-router.mjs', () => ({
  useRouter: vi.fn()
}));

describe('ArticleListView', () => {
  let store

  const mockRouterPushFn= vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    useRouter.mockReturnValue({ 
      push: mockRouterPushFn,
    })
  })

  const mountComp = () => {
    const mountedComp = shallowMount(ArticleListView, {
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
