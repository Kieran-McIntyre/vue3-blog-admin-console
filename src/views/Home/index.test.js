import { describe, it, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import HomeView from "./index.vue"

describe("HomeView", () => {
  const mountComp = () => {
    return shallowMount(HomeView)
  }

  it("should render", () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })
})
