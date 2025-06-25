function createCourse(title, subtitle, lessonsCount) {
    console.log("Creating a course with Title: ".concat(title, ", Subtitle: ").concat(subtitle, " and LessonsCount: ").concat(lessonsCount));
    return {
        title: title,
        subtitle: subtitle,
        // lessonsCount
    };
}
var result = createCourse("Typescript", "Learn the basics", 10);
console.log('typeof createCourse:');
console.log(typeof createCourse);
var createCourse2 = function (title, subtitle, lessonsCount) {
    console.log("Creating a course with Title: ".concat(title, ", Subtitle: ").concat(subtitle, " and LessonsCount: ").concat(lessonsCount));
    return {
        title: title,
        subtitle: subtitle,
        lessonsCount: lessonsCount
    };
};
console.log('typeof createCourse2:');
console.log(typeof createCourse2);
