import { describe, it, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import VListLayout from "./index.vue"

describe("VListLayout", () => {
  const defaultProps = {
    title: "Some title",
    items: [],
  }

  const mountComp = ({ props = defaultProps } = {}) => {
    return shallowMount(VListLayout, {
      props,
    })
  }

  it("should render", () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })
})
