interface Course {
    title: string;
    subtitle: string;
    lessonsCount: number;
}

function createCourse(title: string, subtitle: string, lessonsCount: number) {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);

    return {
        title,
        subtitle,
        // lessonsCount
    } as Course
}

const result = createCourse("Typescript", "Learn the basics", 10)
console.log('typeof createCourse:');
console.log(typeof createCourse);


type CreateCourse = (title: string, subtitle: string, lessonsCount: number) => Course;

type OnCourseCreated = (course: Course) => void;

const createCourse2 = (title: string,
                       subtitle: string,
                       lessonsCount: number,
                       callback: OnCourseCreated) => {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);

    const course = {
        title,
        subtitle,
        lessonsCount
    }

    callback(course)

    return course
}
console.log('typeof createCourse2:');
console.log(typeof createCourse2);
