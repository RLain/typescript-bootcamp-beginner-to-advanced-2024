interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;
}

function createCourse(title:string, subtitle:string, lessonsCount:number) {
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


type CreateCourse = (title:string, subtitle:string, lessonsCount:number) => Course;

const createCourse2: CreateCourse = (title:string, subtitle:string, lessonsCount:number) => {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);

    return {
        title,
        subtitle,
        lessonsCount
    }
}
console.log('typeof createCourse2:');
console.log(typeof createCourse2);
