# Deep dive into the Typescript Type system

## Understanding the differences between const, let and var

- `const` is a constant variable that has an initial value assigned for read-only variables. You cannot reassign the value later on.
- `let` variable declaration allows you to reassign the value later on. This is scoped variable.
- `var` This functionally works the same as let and allows you to reassign, but this is _not_ a scoped variable. This is strange
and unintuitive....so it is strongly recommended to only use const & let. This is primarily allowed for backwards compatibility for Javascript.

As a general rule use `const` for the majority of variables, and update to `let` if you need to reassign the value.

## Typescript primitive types - numbers, strings and booleans + Template strings

📁Related files:
/fundamentals/02-primitive-types.ts

- Both `integer numbers (10)` and `non-integer numbers (10.12)` have a type of `number`
- "What happens when you define a string as a "let" mutable variable, and then append some extra text to the end of the string?"
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

## Optional chaining - when to use it or not

✅ Good practise: Check if the field exists and add appropriate error handling
```ts
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
```

🙅‍♀️Not recommended: Rely solely on optional chaining as this simply returns nothing....

```ts
function logCourseTitle2(course) {
    if (course4?.textFields?.title) {
        console.log(`Title logCourseTitle: ${course4.textFields?.title}`);
    }
}
```

## The Null Coalescing operator

The null coalescing operator, often represented as ??, is a binary operator that returns the left-hand operand 
if it's not null or undefined, otherwise it evaluates and returns the right-hand operand. 
It's a way to provide a default value when a variable might be null or undefined, simplifying conditional 
assignments and avoiding null reference exceptions.


## Primitive Types: Arrays

📁Related files:
/fundamentals/04-arrays-enums.ts

Arrays are type safe:

```ts
const numbers = [1,2,3,4]

numbers.push(4) // Allowed via Type inference
numbers.push("Trying to add a string") // This throws an error: TS2345: Argument of type string is not assignable to parameter of type number
```

## Typescript enums

See 04-arrays-enums.ts for examples on plain number enums vs string enums.

📚Additional reading: [TypeScript Enums or Union Types: Which One Should You Use?](https://medium.com/@sanyagubrani/typescript-enums-or-union-types-which-one-should-you-use-377ecae947af)

This linked page above explains some great considerations when choosing enums vs union types
```ts
//Enums are a way of defining a set of named constants
export enum Status {
  Successful = 'successful',
  Failed = 'failed',
  Skipped = 'skipped',
}

//Union Types are another way to represent a fixed set of values
export type Status = 'successful' | 'failed' | 'skipped';
```

Use enums when:
- You need a set of related constants (like days of the week or HTTP status codes)
- You want to take advantage of enum-specific features (like reverse mapping)
- You’re working on a project where the slight increase in code size doesn’t matter 
    - Enums get compiled into JavaScript objects. This means that for every enum, there’s a bit of extra code generated
    - This extra code can slightly increase the size of your final bundle. For small projects, this isn’t a big deal. But for larger projects, especially web apps where every byte counts, it might make you think twice.
- Enums can make refactoring easier by updating all references in one place.

Use union types when:
- You’re working with simple string (or number) options
- You’re dealing with APIs or JSON data
- You want to keep your compiled JavaScript as lean as possible
- Union types are more JavaScript-like and reduce bundle size.

## The Any type and why we should avoid it

📁Related files:
/fundamentals/05-any-type.ts

- If the Typescript compiler is unable to identify what the type should be, it will infer it as `any`
- We can also explicitly assign the type `any`

We can see in the following that the `any` type literally allows the value to be anything...including null, undefined, objects, arrays etc.

```ts
let lessonsCount:any = 10;

lessonsCount = "Now a string"

lessonsCount = true

let numbers : any[] = [10, 20, "Hello", true] //Whan even is this!
```

This means the `any` type kind of "bypasses" the type system (in double quotes because any itself is a type). It removes all the value of using Typescript.

### How to avoid implicit any types with the noImplicitAny Compiler flag

The following will infer the property types as `any` ergo title: any, lessonsCount: any

```ts
function printCourse(title, lessonsCounts){
    console.log(title, lessonsCounts)
}
```

This is a problem because if a developer accidentally switches the inputs ergo printCourse(10, "Course name") the compiler
will *not* flag any issues!

We can test this quickly using the compiler in our terminal $ tsc --noImplicitAny 05-any-type.ts

And then formally add to the `tsconfig.json` file inside the `compilerOptions` object. See docs [here](https://www.typescriptlang.org/tsconfig/#noImplicitAny).

Key takeaways:
- Avoid using `any` in your program period
- Enable the `noImplicitAny` compilerOption on your tsconfig.json file


## Union types

📁Related files:
/fundamentals/06-union-type.ts

```ts
let uniqueIdentifier: number | string = 1000 // Union type - but a contrived example

uniqueIdentifier = "201ef72bb-49e3-40ef-8331-sdflskfjw8r324"

const keys: (number | string)[] = [] // Union type - but a contrived example
```

In general:
- Using union types to define two very different types e.g. number | string is discouraged
- It would rather be used to define something like number | null, or string | null

```ts
let courseId : number | null = null // Union type - more common reality
```


## Non null assertion operator

📁Related files:
/fundamentals/07-non-null-assertion-operator.ts

This operator is denoted by an ! after the key name e.g. courseId!

The following is telling the compiler that courseId won't be null, otherwise without this ! and if --strictNullChecks is enabled
error TS18047: 'courseId' is possibly 'null' will throw. 

```ts
let courseId: number | null

courseId!.toString()
```

⚠️ *Important*: This will _only_ address _compilation_ requirements and not prevent issues at runtime. For context, adding the
non null assertion operator to the above allows the file to compile, however if we run the .js file using Node, we get an error ->
TypeError: Cannot read properties of undefined (reading 'toString'). This is because courseId is undefined and has not yet been initialised
....so the compiler operator doesn't actually solve the underlying runtime issue, it _bypasses_ the compiler check. 

Only use this operator sparingly on a systematic basis. If you find yourself using often then your declarations of your types
are likely incorrect. You should only use when you have more information than the compiler.

## Strict null checks

📁Related files:
/fundamentals/06-union-types.ts _(yes this is the right file! We used an old one)_

All types by default are nullable, this is to enable backwards compatiability to older versions of Typescript. 

Note that the following type and declarations will not throw any compilation errors!

```ts
let courseId2: number = 1000;

courseId2 = null //This is allowed!
courseId2 = undefined //This is allowed!
```

Unless....we enable `strictNullChecks` when compiling. This now enforces the | null declaration

```ts
let courseId2: number | null = 1000; // | null is required to compile

courseId2 = null
courseId2 = undefined
```

## Literal types

If you assign a constant with an initial value, the type _becomes_ the value.

This is different to `let` which has a type inference ergo

```ts
let title = "Typescript Bootcamp" // title: string

let lessonCount = 10 // lessonsCount: number
```

Whereas with a defined constant, the type becomes the literal value...
```ts
const title = "Typescript Bootcamp"; // type = "Typescript Bootcamp"

const lessonCount = 10 // type = 10
```

We can combine union types with a `let` variable to inform the compiler of the expected values ergo

```ts
let pageSize: 10 | 15 | 20 = 10

pageSize = 11 // TS2322: Type 11 is not assignable to type 10 | 15 | 20
```

## Type alias

When using union types to define the allowed types for a variable, we don't want to have to potentially repeat multiple
times in the codebase in different places. We can rather create a `type alias`.

```ts
type pageSizes = 10 | 15 | 20

let pageSize: pageSizes
pageSize = 10
```

The most common type alias is using an `Interface`


## Defining custom object types

📁Related files:
/fundamentals/09-interfaces.ts

An interface allows us to define the data structure for a variable.

```ts
interface Course {
    title: string,
    subtitle: string,
    lessonsCount?: number, // ? makes this optional
}

const course: Course = {
    title: "Typescript course",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
}
```

By default, all properties can be written too.

```ts
interface Course {
    title: string,
    subtitle: string,
    lessonsCount?: number,
}

const course: Course = {
    title: "Typescript course",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
}

course.title = "Hello world" // This is allowed
```

If we want a property to be read only we can simply add this declaration:

```ts
interface Course {
    readonly title: string,
    subtitle: string,
    lessonsCount?: number, // ? makes this optional
}

const course: Course = {
    title: "Typescript course",
    subtitle: "Learn the fundamentals",
    lessonsCount: 10
}

course.title = "Hello world" // No longer allowed 'Attempt to assign to const or readonly variable'
```

## Type alias vs interfaces

_Both of these_ allow us to define a custom object type:

```ts
type Course = { // also allows readonly and optional properties
    title: string,
    subtitle: string,
    lessonCount: number
}

interface Course {
    title: string,
    subtitle: string,
    lessonsCount: number, 
}
```

Realities:
- You can use them interchangeably. 
- Typescript themselves recommends `using Interfaces to define custom objects`
- `Type alias is generally best for Union types`
- There is also a practical difference, Interfaces can be extended, Type aliases cannot

```ts
interface AdvancedCourse extends Course {
    mentor: string
}

type AdvancedCourse extends Course {
    //This is not allowed....TS2304: Cannot find name extends
}
```

## Type assertions

📁Related files:
/fundamentals/10-type-assertion.ts

In the rare situation where we know more about the value than the compiler, we can use Type assertions.

This is done using the `as` keyword, and overrides the inferred type. This means we can access the correct
values from the type.

```ts
// The following infers to type of HTMLElement as this is the only information it knows
const input = document.getElementById("input-field")

input.value //TS2339: Property value does not exist on type HTMLElement

// This is a type assertion
const input2 = document.getElementById("input-field") as HTMLInputElement

input2.value //Whereas this is known
```

Type assertions are very valuable when we know more than the compiler, however `we should avoid over using them`.
Most of the time the compilers infer correctly. 

As example of when this is commonly used is when querying an element from a REST API and defining the json response properly.

The following is an older syntax and called 'casting':
```ts
// This is an example of casting - this is an older syntax as using the 'as' keyword is more modern/recommended
const input3 = <HTMLInputElement> document.getElementById("input-field")

input3.value //Whereas this is known
```

There is also the following defensive mechanism:
```ts
//Typescript also has a defensive mechanism when it has an expectation of what _should_ be allowed:
// TS2352: Conversion of type HTMLElement to type string may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to unknown first.
const input4 = document.getElementById("input-field") as string

input4.value //Won't work

//To override this defense mechanism (this would be extremely rare! Question if you are using....)
const input5 = (document.getElementById("input-field") as any) as string
```

