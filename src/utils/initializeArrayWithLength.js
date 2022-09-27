/**
 * Returns an array with N number of items as desired.
 * @param {Number} arraySize - The desired array size. Defaults to 1.
 * @returns {Number[]}
 */
export const initializeArrayWithLength = (arraySize = 1) => {
  return [...Array(arraySize).keys()]
}