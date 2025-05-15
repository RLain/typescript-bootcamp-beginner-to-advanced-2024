//04-arrays-enums.ts
// arrays
var numbers = [1, 2, 3, 4];
numbers.push(4);
//numbers.push("Trying to add a string")
//________________________
//enums
var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 0] = "FREE";
    CourseType[CourseType["PREMIUM"] = 1] = "PREMIUM";
    CourseType[CourseType["PRIVATE"] = 2] = "PRIVATE";
    CourseType[CourseType["HIDDEN"] = 3] = "HIDDEN";
})(CourseType || (CourseType = {}));
var course = {
    title: "Typescript Bootcamp (plain enum)",
    type: CourseType.FREE
};
console.log(course);
// This then logs the type as a plain numeric value ->  { title: 'Typescript Bootcamp', type: 0 }
// You can also use string enums e.g.
var CourseType2;
(function (CourseType2) {
    CourseType2["FREE"] = "FREE";
    CourseType2["PREMIUM"] = "PREMIUM";
    CourseType2["PRIVATE"] = "PRIVATE";
    CourseType2["HIDDEN"] = "HIDDEN";
})(CourseType2 || (CourseType2 = {}));
var course2 = {
    title: "Typescript Bootcamp (string enum)",
    type: CourseType2.FREE
};
console.log(course2);
// This then returns a string at runtime = { title: 'Typescript Bootcamp (string enum)', type: 'FREE' }
// This becomes much more readable and the data is stored as the string (also more readable)
