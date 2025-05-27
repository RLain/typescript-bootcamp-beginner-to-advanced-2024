interface Course {
    title: string,
    subtitle: string,
    lessonsCount: number,

}

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the fundamentals",
    lessonsCount: 0,
}

function printCourse(course: Course) {
    console.log(`1- Title: ${course.title} Subtitle: ${course.subtitle}, LessonsCount: ${course.lessonsCount}`)
}

printCourse(course)

function printCourse2(course: Course) {
    const title = course.title,
        subtitle = course.subtitle,
        lessonsCount = course.lessonsCount

    console.log(`2- Title: ${title} Subtitle: ${subtitle}, LessonsCount: ${lessonsCount}`)
}

printCourse2(course)

function printCourse3(course: Course) {
    const { title, subtitle, lessonsCount } = course //This is destructuring

    console.log(`3- Title: ${title} Subtitle: ${subtitle}, LessonsCount: ${lessonsCount}`)
}

printCourse3(course)

function printCourse4(course: Course) {
    const { title, ...rest } = course //This is destructuring

    console.log(`3- Title: ${title} Subtitle: ${rest.subtitle}, LessonsCount: ${rest.lessonsCount}`)
}

printCourse4(course)
