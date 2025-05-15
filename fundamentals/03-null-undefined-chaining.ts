// undefined
let title: string;

console.log('type of title; ', typeof title);

if (!title) {
    console.log('no title (undefined)');
}

// null
let title2: string = null

console.log('type of title2; ', typeof title2);

if (!title2) {
    console.log('no title (null)');
}

// optional chaining

// The following works fine:
let course = {
    title: "Typescript Bootcamp"
}

if (course.title) {
    console.log(`Title (defined object): ${course.title}`);
}

let course2 = null

// However, the following will throw an error = TypeError: Cannot read properties of null (reading 'title')
// if(course2.title){
//     console.log(`Title (optional chaining): ${course2.title}`);
// }

// To avoid this in Typescript, first check if the value itself is truthy, then execute the rest of the statement
if (course2 && course2.title) {
    // Noting this won't print to the terminal as the first check would've failed
    console.log(`Title 2 (short circuit evaluation): ${course2.title}`);
}

// ℹ️ https://www.geeksforgeeks.org/short-circuit-evaluation-in-programming/

if (course?.title) {
    // Noting this won't print to the terminal as the first check would've failed
    console.log(`Title (optional chaining): ${course.title}`);
}

console.log(course2?.title) // This becomes undefined
if (course2?.title) {
    console.log(`Title (optional chaining): ${course2.title}`);
}

// null coalescing operator

console.log('null coalescing operator_____________')

let course3 = null
const title3 = course3?.textfields.title ?? "No title found" // If the path is undefined then the string is returned

// Note there are edge cases where using the OR operator would behave in an unexpected way, which is why we want to use ??
// 🙅‍♀️const title3 = course3?.textfields.title || "No title found"

// let course4 = {
//     textFields: {
//         title: "Typescript Bootcamp",
//     }
// }

let course4 = null

// ✅ Good practise: Check if the field exists and add appropriate error handling
function logCourseTitle(course) {
    if (!course4?.textFields) {
        console.error('textFields not defined')
        return
    }


    // Note optional chaining is not necessary here due to the above check and would be redundant.
    if (course4.textFields.title) {
        console.log(`Title logCourseTitle: ${course4.textFields?.title}`);
    }
}

logCourseTitle(course4)

// 🙅‍♀️Not recommended: Rely solely on optional chaining as this simply returns nothing....
function logCourseTitle2(course) {
    if (course4?.textFields?.title) {
        console.log(`Title logCourseTitle: ${course4.textFields?.title}`);
    }
}

logCourseTitle2(course4)




