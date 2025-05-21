interface Course {
    readonly title: string,
    subtitle: string,
    lessonsCount?: number, // ? makes this optional
}

const course: Course = {
    title: "Typescript course",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
}

course.title = "Hello world" // No longer allowed 'Attempt to assign to const or readonly variable'

interface AdvancedCourse extends Course {
    mentor: string
}
