# Typescript functions in depth

## Introduction to Typescript functions

📁Related files:
/fundamentals/22-introduction-to-functions.ts

In this lecture, Vasco went through the basics of creating a function: Using the function syntax, adding typed properties etc.

However, the thing I want to document as interesting is the Type Assertion vs Type Annotation options:

This is *Type Annotation* and the compiler will require the output to confirm to the annotation structure (Course).
If we comment out or don't include a property such as lessonsCount, the compiler will flag a error.
```ts
function createCourse(title:string, subtitle:string, lessonsCount:number): Course {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);

    return {
        title,
        subtitle,
        lessonsCount
    } // No assertion here, rather the function has an annotation using : Course
}
```


This is *Type Assertion* and a critical difference to annotation is that the `compiler will not validate that the output conforms to the assert structure`!
This means you can cast an object that is missing properties or has incorrect types and the compiler won't flag it. Big difference.
```ts
function createCourse(title:string, subtitle:string, lessonsCount:number) {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);

    return {
        title,
        subtitle,
        lessonsCount
    } as Course //This is the assertion
}
```

As a general rule, use `Type Annotation` as it gives stronger type safety and will assist with development. `Type assertion` is for limited
use cases such as type coercion or in the rare event that you know more that the compiler (but this may indicate a deeper approach issue).

## Side track: Coercion vs Conversion

Type coercion is when a value is implicitly or explicitly converted from one type to another. This can happen:

- Automatically (implicit coercion) e.g. const isTrue = 'false' == false; // true
- Manually (explicit coercion) e.g. const str = String(true);  // "true"

It is important to understand that implicit coercion can lead to bugs.

🛑 Coercion vs. Conversion (Casting)

- Coercion: Happens implicitly or via type assertions (not guaranteed to succeed at runtime).
- Conversion: Happens explicitly and often with runtime functions (Number(), parseInt()).

✅ Best Practice
- Avoid unnecessary coercion.
- Prefer type-safe conversion.
- Use type assertions (as) only when absolutely necessary, and be sure the structure is truly correct.

Additional reading
- https://hackernoon.com/what-is-type-coercion-and-type-casting-in-javascript

## Typescript functions at Runtime - Function values

📁Related files:
/fundamentals/22-introduction-to-functions.ts _(yes using the same file as previous lecture!)_

```ts
const result = createCourse("Typescript", "Learn the basics", 10)
console.log(typeof createCourse);
```
Will log the following:
```bash
❯ tsc 22-introduction-to-functions.ts
❯ node 22-introduction-to-functions.js
Creating a course with Title: Typescript, Subtitle: Learn the basics and LessonsCount: 10
function
```

In this lecture Vasco also reiterated that there is both the normal function and arrow function approaches, and how functions
can be passed around in the code which is useful for callbacks which will be covered in an upcoming lecture.

## Typescript custom function types

📁Related files:
/fundamentals/22-introduction-to-functions.ts _(yes still using the same file as previous lecture!)_

Remember that in Typescript nearly everything has a type associated to it. Every function is a value that can
be assigned to a variable and passed around to other functions as an input parameter.

```ts
// 1) Add the type of 'Function' here is redundant and not particularly helpful to add.
// It can take any argument of any type and any value of any type, so not very Type safe...
const createCourse2: Function = (title:string, subtitle:string, lessonsCount:number) => {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);
    
// 2) We rather create a function type:    
type CreateCourse = (title:string, subtitle:string, lessonsCount:number) => Course;
// And define as the return type of the function
const createCourse2: CreateCourse = (title:string, subtitle:string, lessonsCount:number) => {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);

    return {
        title,
        subtitle,
        lessonsCount
    }
}
```

This defined type provides the usual type safety if trying to pass in a value of the wrong type e.g. title here:
```ts
const createCourse2: CreateCourse = (title:number, subtitle:string, lessonsCount:number) => {
    //...etc
}
```
Or if you don't include an expected input parameter e.g.
```ts
type CreateCourse = (title:string, subtitle:string, lessonsCount:number) => Course;

const createCourse2: CreateCourse = (title:string, subtitle:string, lessonsCount:number) => {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);

    return {
        title,
        subtitle,
        // lessonsCount will trigger TS2322: Type is not assignable to type CreateCourse
    }
}
```

We can also define Function types for callbacks, which can be very useful for making
async programs type safe.

```ts
type OnCourseCreated = (course: Course) => void;

const createCourse2 = (title: string,
                       subtitle: string,
                       lessonsCount: number,
                       // See how the type is assigned here
                       callback: OnCourseCreated) => {
    console.log(`Creating a course with Title: ${title}, Subtitle: ${subtitle} and LessonsCount: ${lessonsCount}`);

    const course = {
        title,
        subtitle,
        lessonsCount
    }

    callback(course) // This then does type checking here.

    return course
}
```



➡️Note to self, redo Section 5 Lecture 46 - not quite landing. Need to understand callbacks better