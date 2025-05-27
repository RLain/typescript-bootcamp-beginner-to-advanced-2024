var course1 = {
    title: "Typescript Bootcamp",
    lessonsCount: 100,
};
var course2 = {
    title: "Angular for Beginners",
    lessonsCount: 20,
};
// Simply adding the spread operator converts courses into a rest argument
function printCourses(message) {
    var courses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        courses[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var course = courses_1[_a];
        console.log(course.title);
    }
}
printCourses("Welcome to the Angular University", course1, course2);
