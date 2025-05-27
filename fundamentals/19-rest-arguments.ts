interface Course {
    title: string,
    lessonsCount: number
}

const course1: Course = {
    title: "Typescript Bootcamp",
    lessonsCount: 100,
}

const course2: Course = {
    title: "Angular for Beginners",
    lessonsCount: 20,
}

// Simply adding the spread operator converts courses into a rest argument
function printCourses(message: string, ...courses: Course[]) {
    console.log(message)

    for(let course of courses) {
        console.log(course.title)
    }
}

printCourses("Welcome to the Angular University", course1, course2)