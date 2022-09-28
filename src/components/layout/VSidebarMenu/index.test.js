import { describe, it, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import VSidebarMenu from "./index.vue"
import content from "./content"

const stubs = {
  FontAwesomeIcon: true,
  "router-link": {
    template: "<div><slot /></div>",
  },
}

describe("VSidebarMenu", () => {
  const mountComp = () => {
    return shallowMount(VSidebarMenu, {
      global: {
        stubs,
      },
    })
  }

  it("should render", () => {
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
      const navLinks = wrapper.findAll("[data-test=\"router-link\"]")

      expect(navLinks.length).toBe(2)
      expect(navLinks.at(0).text()).toBe(content.link.articles)
      expect(navLinks.at(1).text()).toBe(content.link.authors)
    })
  })
})
