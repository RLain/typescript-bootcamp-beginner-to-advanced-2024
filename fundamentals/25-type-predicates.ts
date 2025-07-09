interface Course {
    readonly title: string,
    subtitle: string,
    lessonsCount?: number //Note this is optional
}

const course: unknown = {
    title: "Typescript course",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
}


// Example, we want to do a type check before assigned to Course
// The usage of `x is y` makes this a type predicate function
// This allows the typescript compiler to convert the type from unknown to the know interface
function isCourse(value: unknown): value is Course {
    const course = value as Course
    return course?.title !== null && course?.subtitle !== null
}

if(isCourse(course)) {
    course.title // title: string
}

// See what happens if we simply use a boolean outcome opposed to a proper type predicate
function isCourseBoolean(value: unknown): boolean {
    const course = value as Course
    return course?.title !== null && course?.subtitle !== null
}

if(isCourseBoolean(course)) {
    course.title // TS2339: Property title does not exist on type unknown
}
