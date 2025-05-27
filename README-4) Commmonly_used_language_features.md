# Commonly used language features

## Arrow functions vs normal functions - understanding the `this` context

📁Related files:
/fundamentals/14-arrow-functions.ts

Here is an example of using normal functions with a callback

```ts
function saveCourse(course, callback: Function) {
    // Simulating a backend call
    setTimeout(function () {
        callback("success")
    }, 1000)
}

saveCourse({title: "Typescript Bootcamp"},
    function () {
        console.log("Save successful")
    })
```

Here is an example of a simpler syntax using an arrow function

```ts
function saveCourse2(course, callback: Function) { //Note we have kept this as a normal function as Vasco prefers it.
    // Simulating a backend call with an annonymous arrow function [1]
    setTimeout(() => {
        callback("success")
    }, 1000)
}

saveCourse2({title: "Typescript Bootcamp"},
    () => console.log("Save2 successful")) //annonymous arrow function [1]
```

The arrow syntax makes it easier to define functions as values. There is a _fundamental_ difference between 
normal and arrow functions. The 'this context'.

It is important to be aware that _each normal function has its own 'this' context_. In the above where we use
_normal_ functions, the saveCourse() has a 'this' context. And the nexted setTimeout() has it's own.

_However_, when we nest a arrow function, inside a normal function, such as in saveCourse2, the arrow function
inherits it's parent functions 'this' context, and does not have its own. We will cover this in more detail when we get to OOP.

```ts
function saveCourse2(course, callback: Function) {
    this.course = course //Normal functions allow this to be used. This will come up later in the course when we discuss OOP

    setTimeout(() => {
        // This function is inhereting the 'this' context from the outside
        callback(this.course.title ?? "unknown course")
    }, 1000)
}

const callBack = (title: string) => console.log("Save successful.", title)
saveCourse2({title: "Typescript Bootcamp"}, callBack)
```

Some general heuristics:
[1] When creating anonymous functions e.g. function(){}/()=> rather use `arrow functions`.

## Default function parameters

📁Related files:
/fundamentals/15-default-functions.ts

Here is an example of defaulting the lessonsCount number to 0:
```ts
function printCourse(title: string, subtitle: string, lessonsCount: number = 0){
    console.log(`Title: ${title}, Subtitle: ${subtitle}, lessonsCount: ${lessonsCount}`)
}

printCourse("Typescript Bootcamp", "Learning fundamentals", 10)

printCourse("Typescript Bootcamp 2", "Learning fundamentals")

/*
❯ node 15-default-functions.js
Title: Typescript Bootcamp, Subtitle: Learning fundamentals, lessonsCount: 10
Title: Typescript Bootcamp 2, Subtitle: Learning fundamentals, lessonsCount: 0
 */
```

We can do this for all the properties:

```ts
function printCourse(title: string = "Unknown", subtitle: string = "Unknown", lessonsCount: number = 0){
    console.log(`Title: ${title}, Subtitle: ${subtitle}, lessonsCount: ${lessonsCount}`)
}

// Don't need to pass in anything
printCourse()

/*
❯ node 15-default-functions.js
Title: Unknown, Subtitle: Unknown, lessonsCount: 0
 */
```

When providing default values, the compiler can infer the type and we can simplify

```ts
function printCourse(title = "Unknown", subtitle = "Unknown", lessonsCount = 0){
    console.log(`Title: ${title}, Subtitle: ${subtitle}, lessonsCount: ${lessonsCount}`)
}
```

## Object spread operator

📁Related files:
/fundamentals/16-spread-operator.ts

```ts
interface Course {
    title: string,
    subtitle: string,
    stats: {
        lessonsCount: number,
    }
}

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the fundamentals",
    stats: {
        lessonsCount: 0,
    }
}

const courseCopy = {
    ...course
}
```

Side note:
"A `shallow` copy duplicates the top-level properties of an object, but nested objects are still referenced. 
A `deep` copy duplicates all levels of an object, creating entirely new instances of nested objects."
[Source](https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-shallow-copy-and-deep-copy)

There is a critical different to a shallow vs deep copy. Any changes to nested references in a shallow copy _will_ 
affect the original. Whereas a deep copy is completely independent and will not affect the original. [Read for more context](https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-shallow-copy-and-deep-copy)

The spread operator allows us to easily create a `shallow` copy. 

```ts
// This is a shallow copy
const courseCopy = {
    ...course
}

console.log(course)
courseCopy.stats.lessonsCount = 5 //Changes here...

console.log(courseCopy)
console.log(course) // ...do change the original!

console.log('___________________')

// This is a deep copy
const courseCopyDeep = {
    ...course,
    stats: {
        ...course.stats,
    }
}

console.log(course2)
courseCopy.stats.lessonsCount = 5 //Changes here...

console.log(courseCopyDeep)
console.log(course2) // ...do not change the original
```

There is no existing method/approach in Typescript to create a deep copy in a quick way (the method I used above
would not be quick if multiple nestings/deeper nestings!)

Vasco recommends using the [npm package clone-deep](https://www.npmjs.com/package/clone-deep).


## Typescript Object Destructuring

📁Related files:
/fundamentals/17-object-destructuring.ts

```ts
function printCourse3(course: Course) {
    const { title, subtitle, lessonsCount } = course //This is destructuring

    console.log(`3- Title: ${title} Subtitle: ${subtitle}, LessonsCount: ${lessonsCount}`)
}

function printCourse4(course: Course) {
    const { title, ...rest } = course //This is using the spread operator (remember rest can be named anything)

    console.log(`4- Title: ${title} Subtitle: ${rest.subtitle}, LessonsCount: ${rest.lessonsCount}`)
}
```

## Typescript Array Spread & Destructuring Operators

📁Related files:
/fundamentals/18-array-spread-destructuring.ts

Here is an example of using the spread operator:
```ts
const numbers = [1, 2, 3]

const moreNumbers = [...numbers, 4, 5, 6]

console.log(moreNumbers) // Returns [ 1, 2, 3, 4, 5, 6 ]
```

This is an example of destructuring:
```ts
// Destructuring
const [ first, second, ...remainder] =  moreNumbers

console.log('Numbers', first, second)
console.log('Remainder', remainder)

// Numbers 1 2
// Remainder [ 3, 4, 5, 6 ]
```

## Typescript Rest Arguments/Parameters

📁Related files:
/fundamentals/19-rest-arguments.ts


Vasco starts this lecture by explaining that we have a function that we want to be able to pass in multiple courses too. 
This naturally led to the following being built (note to future self, I was typing this intuitively before he did which is
interesting from a way-embedded-into-brain realisation):
```ts
function printCourses(message: string, courses: Course[]) {
    console.log(message)

    for(let course of courses) {
        console.log(course.title)
    }
}

printCourses("Welcome to the Angular University", [course1, course2])
```

But there is a nicer way to write this leveraging off Typescript Rest Arguements. This makes the syntax a little bit more readable
and user friendly, and allows us to pass in an undetermined amount of inputs e.g. course1 -> courseN.

```ts
// Simply adding the spread operator converts courses into a rest argument
function printCourses(message: string, ...courses: Course[]) {
    console.log(message)

    for(let course of courses) {
        console.log(course.title)
    }
}

printCourses("Welcome to the Angular University", course1, course2) //Note we no longer pass into an array here.
```

## Debugging Typescript in the browser


Resume: https://www.udemy.com/course/complete-typescript-2-course/learn/lecture/32981850#questions