interface Course {
    title: string
    subtitle: string
    lessonsCount: number
}

function createCourseObject(title: string, subtitle: string) {
    const course = {
        title,
        subtitle
    } as Course

    return course
}

type CourseRecord = [string, string, number] // Explicit typing for the tuple

const courseRecord: CourseRecord = ['Typescript', 'Learn the basics', 100] //This is a tuple

function createCourseTuple(title: string, subtitle: string): CourseRecord {
    return [title, subtitle, 100]
}
