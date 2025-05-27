var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the fundamentals",
    lessonsCount: 0,
};
function printCourse(course) {
    console.log("1- Title: ".concat(course.title, " Subtitle: ").concat(course.subtitle, ", LessonsCount: ").concat(course.lessonsCount));
}
printCourse(course);
function printCourse2(course) {
    var title = course.title, subtitle = course.subtitle, lessonsCount = course.lessonsCount;
    console.log("2- Title: ".concat(title, " Subtitle: ").concat(subtitle, ", LessonsCount: ").concat(lessonsCount));
}
printCourse2(course);
function printCourse3(course) {
    var title = course.title, subtitle = course.subtitle, lessonsCount = course.lessonsCount; //This is destructuring
    console.log("3- Title: ".concat(title, " Subtitle: ").concat(subtitle, ", LessonsCount: ").concat(lessonsCount));
}
printCourse3(course);
