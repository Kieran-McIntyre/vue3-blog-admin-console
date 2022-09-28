import { describe, it, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import AuthorCreateView from "./index.vue"

describe("AuthorCreateView", () => {
  const mountComp = () => {
    return shallowMount(AuthorCreateView)
  }

  it("should render", () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })
})
