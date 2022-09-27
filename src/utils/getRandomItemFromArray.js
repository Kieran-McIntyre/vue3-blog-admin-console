import { initializeArrayWithLength } from "@/utils/initializeArrayWithLength";

export const getRandomItemFromArray = (items = []) => {
    const randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
}

export const getRandomItemsFromArray = (items = [], itemCount = 1) => {
    return initializeArrayWithLength(itemCount).map(() => getRandomItemFromArray(items))
}