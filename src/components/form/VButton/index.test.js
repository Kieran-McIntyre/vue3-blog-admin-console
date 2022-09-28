import { describe, it, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import VButton, { ButtonType } from "./index.vue"

describe("VButton", () => {
  const mountComp = ({ props = {} } = {}) => {
    return shallowMount(VButton, {
      props,
    })
  }

  it("should render", () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })

  it("clicks button > should emit event", () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.emitted()).toEqual({})

    // Act.
    wrapper.find("[data-test=\"button\"]").trigger("click")

    // Assert.
    expect(wrapper.emitted()).toEqual({
      click: [[]],
    })
  })

  describe("markup", () => {
    it("type is Primary > should render correctly", () => {
      // Arrange.
      const wrapper = mountComp({
        props: {
          type: ButtonType.Primary,
        },
      })

      // Assert.
      expect(wrapper.classes()).toEqual(expect.arrayContaining([
        "border-transparent", 
        "bg-indigo-600", 
        "text-white", 
        "hover:bg-indigo-700", 
        "focus:ring-indigo-500",
      ]))
    })

    it("type is Secondary > should render correctly", () => {
      // Arrange.
      const wrapper = mountComp({
        props: {
          type: ButtonType.Secondary,
        },
      })

      // Assert.
      expect(wrapper.classes()).toEqual(expect.arrayContaining([
        "border-gray-300",
        "bg-white",
        "text-gray-700",
        "hover:bg-gray-50",
        "focus:ring-indigo-500",
      ]))
    })
  })
})
