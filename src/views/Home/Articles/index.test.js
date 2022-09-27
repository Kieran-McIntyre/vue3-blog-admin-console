import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ArticlesView from './index.vue'

describe('ArticlesView', () => {
  const mountComp = () => {
    return shallowMount(ArticlesView)
  }

  it('should render', () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })
})
