import { initializeArrayWithLength } from "@/utils/initializeArrayWithLength";

/**
 * Returns a random item from the provided array.
 * @param {Array} items - The array of items.
 * @returns {Any}
 */
export const getRandomItemFromArray = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/**
 * Returns N number of random items from the provided array.
 * @param {Array} items - The array of items.
 * @param {Number} itemCount - The number of items to return. Defaults to 1.
 * @returns {Any}
 */
export const getRandomItemsFromArray = (items, itemCount = 1) => {
  return initializeArrayWithLength(itemCount).map(() => getRandomItemFromArray(items))
}