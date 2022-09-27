import { vi, describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import VSidebarMenu from './index.vue'
import { useRoute } from 'vue-router/dist/vue-router.mjs'
import content from "./content"

// @TODO: Update with 'vue-router'. 
// See https://github.com/vuejs/router/issues/1466#issuecomment-1183071611
vi.mock('vue-router/dist/vue-router.mjs', () => ({
  useRoute: vi.fn()
}));

const stubs = {
  'router-link': {
    template: "<div><slot /></div>"
  },
}

describe('VSidebarMenu', () => {
  beforeEach(() => {
    useRoute.mockReturnValue({ name: "Home" })
  })

  const mountComp = () => {
    return shallowMount(VSidebarMenu, {
      global: {
        stubs,
      },
    })
  }

  it('should render', () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })

  describe("markup", () => {
    it("should render all router links", () => {
      // Arrange.
      const wrapper = mountComp()

      // Assert.
      const navLinks = wrapper.findAll('[data-test="router-link"]')

      expect(navLinks.length).toBe(2)
      expect(navLinks.at(0).text()).toBe(content.link.articles)
      expect(navLinks.at(1).text()).toBe(content.link.authors)
    })

    it("router link is active > should render correctly", () => {
      // Arrange.
      useRoute.mockReturnValue({ name: "Articles" })
      const wrapper = mountComp()

      // Assert.
      expect(wrapper.find('[data-test="router-link"]').classes())
        .toEqual(expect.arrayContaining(["bg-red-200"]))
    })

    it("router link is NOT active > should render correctly", () => {
      // Arrange.
      const wrapper = mountComp()

      // Assert.  
      expect(wrapper.find('[data-test="router-link"]').classes())
        .toEqual(expect.not.arrayContaining(["bg-red-200"]))
    })
  })
})
