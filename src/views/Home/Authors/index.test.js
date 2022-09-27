import { vi, describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AuthorsView from './index.vue'
import { createTestingPinia } from '@pinia/testing'
import { useAuthorStore } from '@/stores/author'

describe('AuthorsView', () => {
  let store

  const mountComp = () => {
    const mountedComp = shallowMount(AuthorsView, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn,
        })],
      },
    })

    store = useAuthorStore()
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
