import { describe, it, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import VHeader from "./index.vue"

describe("VHeader", () => {
  const mountComp = () => {
    return shallowMount(VHeader)
  }

  it("should render", () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })
})
