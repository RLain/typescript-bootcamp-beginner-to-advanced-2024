// Union types___________

let uniqueIdentifier: number | string = 1000

uniqueIdentifier = "201ef72bb-49e3-40ef-8331-sdflskfjw8r324"

const keys: (number | string)[] = []

let courseId : number | null = 1000

courseId = null

// Intersection type_________

interface HasId {
    id: string
}

interface HasTitle {
    title: string
    description: string
}

type Course = HasId & HasTitle // Combination an intersection type

const course: Course = {
    id: "123",
    title: "Typescript",
    description: "Learn the basics"
}





