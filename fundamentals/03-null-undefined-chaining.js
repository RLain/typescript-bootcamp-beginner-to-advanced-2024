// undefined
var title;
console.log('type of title; ', typeof title);
if (!title) {
    console.log('no title (undefined)');
}
// null
var title2 = null;
console.log('type of title2; ', typeof title2);
if (!title2) {
    console.log('no title (null)');
}
// optional chaining
// The following works fine:
var course = {
    title: "Typescript Bootcamp"
};
if (course.title) {
    console.log("Title (defined object): ".concat(course.title));
}
var course2 = null;
// However, the following will throw an error = TypeError: Cannot read properties of null (reading 'title')
// if(course2.title){
//     console.log(`Title (optional chaining): ${course2.title}`);
// }
// To avoid this in Typescript, first check if the value itself is truthy, then execute the rest of the statement
if (course2 && course2.title) {
    // Noting this won't print to the terminal as the first check would've failed
    console.log("Title 2 (short circuit evaluation): ".concat(course2.title));
}
// ℹ️ https://www.geeksforgeeks.org/short-circuit-evaluation-in-programming/
if (course === null || course === void 0 ? void 0 : course.title) {
    // Noting this won't print to the terminal as the first check would've failed
    console.log("Title (optional chaining): ".concat(course.title));
}
console.log(course2 === null || course2 === void 0 ? void 0 : course2.title);
if (course2 === null || course2 === void 0 ? void 0 : course2.title) {
    console.log("Title (optional chaining): ".concat(course2.title));
}
