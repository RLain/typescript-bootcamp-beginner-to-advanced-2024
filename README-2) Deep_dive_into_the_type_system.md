# Deep dive into the Typescript Type system

## Understanding the differences between const, let and var

• `const` is a constant variable that has an initial value assigned for read-only variables. You cannot reassign the value later on.
• `let` variable declaration allows you to reassign the value later on. This is scoped variable.
• `var` This functionally works the same as let and allows you to reassign, but this is _not_ a scoped variable. This is strange
and unintuitive....so it is strongly recommended to only use const & let. This is primarily allowed for backwards compatibility for Javascript.

As a general rule use `const` for the majority of variables, and update to `let` if you need to reassign the value.

## Typescript primitive types - numbers, strings and booleans + Template strings

📁Related files:
/fundamentals/02-primitive-types.ts

• Both `integer numbers (10)` and `non-integer numbers (10.12)` have a type of `number`
• "What happens when you define a string as a "let" mutable variable, and then append some extra text to the end of the string?"
    Answer: Strings are immutable, so the initial string value is not changed. Instead a new string is created with the new concatenated text
    and it gets assigned to the let variable. The Javascript runtime will then garbage collect the initial string as it has
    no more references to the program.

## Understanding Type Inference - the most powerful feature of Typescript

When writing typescript we have two primary options. We can explicitly annotate the type such as in the following 
stating the value will be a string:

```ts
const title: string = "Typescript Bootcamp"
```

The following is an example of how the compiler can _infer_ the type based on the value. On a .ts file, the 
title will show it has been interpreted as a `string` value.

```ts
const title = "Typescript Bootcamp"
```

## When to use Type Annotations and why

As a general rule, it is recommended to _not_ annotate everything as this bulks out the codebase unnecessarily. If
the value is very clear and the annotation is redundant, don't add.

However, there are scenarios where annotations cannot be avoided. In the following example, none of the values are known
meaning they default to `any`. 

```ts
function printCourse(title, subtitle, lessonsCount){
    let fullTitle = title + subtitle

    // Because no types are known and the infered type is 'any' this function will allow us to reassign the value to a number....
    fullTitle = 10;
}
```

## Typescript Static Type System vs Javascript Dynamic Type System

Javascript allows the variable assignment type to change at runtime. This is because there is no type safety in Javascript.

This means the printCourse example above, when executed (and with a return or console statement) will return 10 for fullTitle.

This means Javascript is considered a `Dynamic type system`. This can be unintuitive if you come from a static typed background.
Javascript provides a special keyword `typeof` that can be used to determine the type e.g.

```js
let title = "Typescript Bootcamp"

console.log('Type before:', typeof title)

title = 10

console.log('Type aftere:', typeof title)

//This will log
Type before: string
Type aftere: number
```

Dynamically typed systems can be hard to debug...which is why it is recommended to use statically typed systems ergo Typescript.


## Primitive Types - Objects

All properties inside an object will have either explicit or inferred types.

In general, when defining objects in your application there is no need to type them as an object. There is also
no need to define types explictly inline such as in course 2 below.

```ts
const course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals",
    lessonsCount: 10
}

//vs explicit typing

const course2 : {
    title: string;
    subtitle: string;
    lessonsCount: number;
} = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals",
    lessonsCount: 10
}
```

Here is an example of nested objects, but remember we generally don't need to define the types inline as done here:

```ts
const course : {
    title: string;
    subtitle: string;
    lessonsCount: number;
    author: {
        firstName: string;
        lastName: string;
    }
 = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals",
    lessonsCount: 10,
    author: {
        firstName: "John",
        lastName: "Doe"
    }
}
```

## Null vs undefined

📁Related files:
/fundamentals/03-null-undefined-chaining.ts

The following will return a type of `undefined`. This means the variable has *not yet been initialised*. The variable
has been declared in the program but no value has been assigned to it yet.

```ts
let title:string;

console.log('type of title; ', typeof title);
```

In the above example, if this existed in the codebase this would be a _mistake_. So undefined helps identify that there is a missing
value. 

If we then add conditional logic to the file, we can see that `undefined is equal to falsy`.

```ts
if (!title) {
    console.log('no title');
}
```

There is a separate reality that can occur, `optional values`.  

If we _explicitly_ define the value as null, there are two important things:

1) The typeof is now an `object`
2) The conditional logic still interprets `null as equal to falsy`.

```ts
let title2: string =  null

console.log('type of title2; ', typeof title2);

if (!title2) {
    console.log('no title (null)');
}

/* Which logs out
❯ node 03-null-undefined-chaining.js
type of title;  undefined
no title (undefined)
type of title2;  object
no title (null)*/
```

ℹ️ *Important*: Critical distinction here is the `null` is intentional and used to inform us and the codebase
that this intentionally does not have a value. `undefined` is _generally_....an accident/mistake. 

Other languages handle this differently, for example in Java it only uses null. So in the first case where Javascript
would return undefined, Java would return null in the runtime. Only in Javascript has this difference between undefined and
null been created for historical reasons. There is no real benefit to a developer to have this distinction and it can/does
cause confusion. The support of undefined is only in for backwards compatibility. 

Principles:
- If you have an optional variable in your program, and you know that the variable won't have a value, assign it the value of null
- Don't define the value as "undefined" ergo let title:string = undefined, this is confusing
- Use the truthy/falsy test in condition logic (see below note to self)
- Null is more familiar to a larger number of developers. Use null and don't use undefined explictly anywhere.

💡*Note to self*: When doing conditional logic you do not need to write out if(thingChecking === undefined){}, this can
be simplified to if(!thisChecking){} due to the falsy nature. 

## Optional chaining - how to avoid Null related errors

See 03-null-undefined-chaining.ts -> //optional chaining on how to avoid `TypeError: Cannot read properties of null (reading 'title')`

The core learning from this lecture is optional chaining is simpler than writing short-circuit programming ergo:

```ts
//Do this
if(course?.title){}

//Not this
if(course && course.title){}
```

What is curious, is that when using the optional chaining operator, if the nested path is not provided then the output becomes `undefined`

```ts
let course2 = null
console.log(course2?.title) // This becomes undefined as the deeper path of title is undefined.
```

Resume: https://www.udemy.com/course/complete-typescript-2-course/learn/lecture/32029400#questions


