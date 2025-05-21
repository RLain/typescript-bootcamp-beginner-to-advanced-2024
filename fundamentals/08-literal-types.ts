const title = "Typescript Bootcamp"

const lessonCount = 10

let pageSize: 10 | 15 | 20 = 10

pageSize = 11

type Course = {
    title: string,
    subtitle: string,
    lessonCount: number
}

type AdvancedCourse extends Course {
    //This is not allowed....TS2304: Cannot find name extends
}