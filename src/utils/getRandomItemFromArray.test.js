import { describe, expect, it, vi } from "vitest"
import { getRandomItemFromArray, getRandomItemsFromArray } from "./getRandomItemFromArray"

describe("getRandomItemFromArray", () => {
  const items = [
    { id: "item-1" },
    { id: "item-2" },
    { id: "item-3" },
    { id: "item-4" },
  ]

  it("should return random item from array", () => {
    // Arrange.
    vi.spyOn(global.Math, "random")
      .mockReturnValueOnce(0.5359313);

    const result = getRandomItemFromArray(items)

    // Assert.
    expect(result).toEqual({
      id: "item-3",
    })
  })
})

describe("getRandomItemsFromArray", () => {
  const items = [
    { id: "item-1" },
    { id: "item-2" },
    { id: "item-3" },
    { id: "item-4" },
  ]

  it("return count is 1 > should return random items from array", () => {
    // Arrange.
    vi.spyOn(global.Math, "random")
      .mockReturnValueOnce(0.5359313)

    const result = getRandomItemsFromArray(items, 1)

    // Assert.
    expect(result).toEqual([
      { id: "item-3" },
    ])
  })

  it("return count is 2 > should return random items from array", () => {
    // Arrange.
    vi.spyOn(global.Math, "random")
      .mockReturnValueOnce(0.5359313)
      .mockReturnValueOnce(0.9863412)

    const result = getRandomItemsFromArray(items, 2)

    // Assert.
    expect(result).toEqual([
      { id: "item-3" },
      { id: "item-4" },
    ])
  })

  it("return count is 3 > should return random items from array", () => {
    // Arrange.
    vi.spyOn(global.Math, "random")
      .mockReturnValueOnce(0.5359313)
      .mockReturnValueOnce(0.9863412)
      .mockReturnValueOnce(0.5983256)

    const result = getRandomItemsFromArray(items, 3)

    // Assert.
    expect(result).toEqual([
      { id: "item-3" },
      { id: "item-4" },
      { id: "item-3" },
    ])
  })
})