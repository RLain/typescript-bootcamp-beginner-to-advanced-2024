interface Course {
    title: string;
    subtitle: string;
    lessonsCount: number;
}

const courseTitle = "Typescript Bootcamp",
    courseSubtitle = "Learn the language",
    lessonsCount = 20

const course: Course = {
    title: courseTitle,
    subtitle: courseSubtitle,
    lessonsCount //This is an example of shorthand notation.
}

// We can simplify further ...
const title = "Typescript Bootcamp",
    subtitle = "Learn the language"

const course2: Course = {
    title, //This is an example of shorthand notation.
    subtitle, //This is an example of shorthand notation.
    lessonsCount //This is an example of shorthand notation.
}