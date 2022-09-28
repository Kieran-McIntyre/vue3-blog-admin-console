import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ArticleCreateView from './index.vue'

describe('ArticleCreateView', () => {
  const mountComp = () => {
    return shallowMount(ArticleCreateView)
  }

  it('should render', () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })
})
