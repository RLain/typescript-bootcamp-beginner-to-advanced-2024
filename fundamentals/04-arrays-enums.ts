//04-arrays-enums.ts

// arrays
const numbers = [1,2,3,4]

numbers.push(4)

//numbers.push("Trying to add a string")

//________________________

//enums

enum CourseType {
    FREE,
    PREMIUM,
    PRIVATE,
    HIDDEN
}

const course = {
    title: "Typescript Bootcamp (plain enum)",
    type: CourseType.FREE
}

console.log(course)
// This then logs the type as a plain numeric value ->  { title: 'Typescript Bootcamp', type: 0 }

// You can also use string enums e.g.

enum CourseType2 {
    FREE = "FREE",
    PREMIUM = "PREMIUM",
    PRIVATE = "PRIVATE",
    HIDDEN = "HIDDEN",
}

const course2 = {
    title: "Typescript Bootcamp (string enum)",
    type: CourseType2.FREE
}

console.log(course2)
// This then returns a string at runtime = { title: 'Typescript Bootcamp (string enum)', type: 'FREE' }
// This becomes much more readable and the data is stored as the string (also more readable)