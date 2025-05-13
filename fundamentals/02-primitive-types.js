// To run $ tsc --watch 02-primitive-types.ts and in a separate terminal $ node 02-primitive-types.ts
// Primitive types: number
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log('Total', total);
// Primitive types: string
var title = "Typescript Bootcamp"; // Can also use single quotes. Both are accepted by the compiler
var subtitle = "Learn the language fundamentals";
// ℹ️ Strings in both Typescript and Javascript are _immutable_ meaning even if we turned a const into a let
// the strings themselves cannot be mutated. Once the value is assigned at runtime in memory, this string themselves cannot be mutated.
// If we want to modify the string, it needs to have a completely new string assigned.
var fullTitle = title + "- " + subtitle;
console.log('Full title:', fullTitle);
// There is also a third character than can be used for strings aside from single and double quotes, this is backticks
// This allows us to do a template literal:
var titleUsingBackticks = "Typescript Bootcamp: ".concat(subtitle);
// Primitive types: boolean
var published = true;
if (published) {
    console.log('The course is published:', title);
}
function printCourse(title, subtitle, lessonsCount) {
    var fullTitle = title + subtitle;
    // Because no types are known and the infered type is 'any' this function will allow us to reassign the value to a number....
    fullTitle = 10;
}
// Primitive types: Objects
var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals",
    lessonsCount: 10
};
// course.fullTitle = ""; // This will complain as this property does not exist on the object
console.log('type of course: ', typeof course);
