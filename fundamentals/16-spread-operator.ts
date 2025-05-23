interface Course {
    title: string,
    subtitle: string,
    stats: {
        lessonsCount: number,
    }
}

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the fundamentals",
    stats: {
        lessonsCount: 0,
    }
}

// This is a shallow copy
const courseCopy = {
    ...course
}

console.log(course)
courseCopy.stats.lessonsCount = 5 //Changes here...

console.log(courseCopy)
console.log(course) // ...do change the original!

let course2: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the fundamentals",
    stats: {
        lessonsCount: 0,
    }
}

// This is a deep copy
const courseCopyDeep = {
    ...course,
    stats: {
        ...course.stats,
    }
}

console.log('___________________')
console.log(course2)
courseCopy.stats.lessonsCount = 5 //Changes here...

console.log(courseCopyDeep)
console.log(course2) // ...do not change the original
