import { describe, it, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import VCard from "./index.vue"

const stubs = {
  Skeletor: true,
  FontAwesomeIcon: true,
  "router-link": {
    template: "<div><slot /></div>",
  },
}

const defaultProps = {
  item: {
    id: 0,
    to: {},
  },
}

describe("VCard", () => {
  const mountComp = ({ props = defaultProps } = {}) => {
    return shallowMount(VCard, {
      global: {
        stubs,
      },
      props,
    })
  }

  it("should render", () => {
    // Arrange.
    const wrapper = mountComp()

    // Assert.
    expect(wrapper.exists()).toBe(true)
  })

  describe("markup", () => {
    it("is loading > should render loading state", () => {
      // Arrange.
      const wrapper = mountComp({
        props: {
          ...defaultProps,
          loading: true,
        },
      })

      // Assert.
      expect(wrapper.find("skeletor-stub").exists()).toBe(true)
      expect(wrapper.find("[data-test=\"card-image\"]").exists()).toBe(false)
      expect(wrapper.find("[data-test=\"card-details\"]").exists()).toBe(false)
    })

    it("is NOT loading > should render item details", () => {
      // Arrange.
      const item = {
        title: "Some card title",
        imageUrl: "some-image-url",
        details: [
          { icon: "some-icon-name-one", label: "some icon label one" },
          { icon: "some-icon-name-two", label: "some icon label two" },
        ],
        to: {
          name: "SomeRouteName",
        },
      }

      const wrapper = mountComp({
        props: {
          loading: false,
          item,
        },
      })

      // Assert.
      expect(wrapper.find("skeletor-stub").exists()).toBe(false)

      expect(wrapper.find("[data-test=\"card-title\"]").text()).toBe(item.title)
      expect(wrapper.find("[data-test=\"card-image\"]").attributes().src).toBe(item.imageUrl)

      expect(wrapper.findAll("[data-test=\"card-detail\"]").length).toBe(2)
      expect(wrapper.findAll("[data-test=\"card-detail\"]").at(0).text())
        .toBe(item.details[0].label)
      expect(wrapper.findAll("[data-test=\"card-detail-icon\"]").at(0).attributes().icon)
        .toBe(item.details[0].icon)
      expect(wrapper.findAll("[data-test=\"card-detail\"]").at(1).text())
        .toBe(item.details[1].label)
      expect(wrapper.findAll("[data-test=\"card-detail-icon\"]").at(1).attributes().icon)
        .toBe(item.details[1].icon)
    })

    it("is circular image > should render correctly", () => {
      // Arrange.
      const wrapper = mountComp({
        props: {
          ...defaultProps,
          isImageCircular: true,
        },
      })

      // Assert.
      expect(wrapper.find("[data-test=\"card-image\"]").classes()).toEqual([
        "h-20",
        "w-20",
        "rounded-full",
      ])
    })

    it("is NOT circular image > should render correctly", () => {
      // Arrange.
      const wrapper = mountComp({
        props: {
          ...defaultProps,
          isImageCircular: false,
        },
      })

      // Assert.
      expect(wrapper.find("[data-test=\"card-image\"]").classes()).toEqual([
        "h-20",
        "w-20",
        "rounded",
      ])
    })
  })
})
