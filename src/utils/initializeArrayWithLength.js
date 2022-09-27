export const initializeArrayWithLength = (arrayLength = 0) => {
    return [...Array(arrayLength).keys()]
}