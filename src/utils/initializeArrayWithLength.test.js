import { describe, it, expect } from "vitest";
import { initializeArrayWithLength } from "./initializeArrayWithLength"

describe("initializeArrayWithLength", () => {
  it.each([
    [0, []],
    [1, [0]],
    [2, [0, 1]],
    [3, [0, 1, 2]],
    [4, [0, 1, 2, 3]],
    [5, [0, 1, 2, 3, 4]],
  ])("given array size of '%i' > should return %s)", (arraySize, expectedResult) => {
    // Arrange.
    const result = initializeArrayWithLength(arraySize)

    // Assert.
    expect(result).toEqual(expectedResult);
  });
})