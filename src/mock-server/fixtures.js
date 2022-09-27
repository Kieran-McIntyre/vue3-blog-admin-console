import { faker } from "@faker-js/faker";
import { initializeArrayWithLength } from "@/utils/initializeArrayWithLength";

const AUTHOR_RECORD_COUNT = 4
const TAG_RECORD_COUNT = 6
const ARTICLE_RECORD_COUNT = 10

export const tags = initializeArrayWithLength(TAG_RECORD_COUNT)
    .map(() => {
        const name = faker.music.genre()
        const id = name.toLowerCase()
        
        return { id, name }
    })

export const authors = initializeArrayWithLength(AUTHOR_RECORD_COUNT)
    .map(() => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    }))

export const articles = initializeArrayWithLength(ARTICLE_RECORD_COUNT)
    .map(() => ({
        id: faker.datatype.uuid(),
        title: faker.hacker.phrase(),
    }))