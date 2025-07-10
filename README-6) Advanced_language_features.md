# Advanced language features

## Typescript Tuples and how to use them

📁Related files:
/fundamentals/23-tuples.ts

This is a less known feature of Typescript that you may come across if doing RxJS (Angular framework).

- A tuple is a record in a database (outside of Typescript)
- A tuple looks like an array.

Everything you can do with a tuple, you can do with a custom object type (via Interface)
so this is not the most critical feature of Typescript.

See the differences here (Vasco recommends using an Object in real life over a tuple for this use case)

```ts
// Object
interface Course {
    title: string
    subtitle: string
    lessonsCount: number
}

function createCourseObject(title: string, subtitle: string) {
    const course = {
        title,
        subtitle
    } as Course

    return course
}

// Vs Tuple
type CourseRecord = [string, string, number] // Explicit typing for the tuple

const courseRecord: CourseRecord = ['Typescript', 'Learn the basics', 100] //This is a tuple

function createCourseTuple(title: string, subtitle: string): CourseRecord {
    return [title, subtitle, 100]
}
```

The use of a Tuple should be reserved when the output of the function needs to be a couple of values
that are completely unrelated to each other, and you don't want to define a custom object type just for the
return type of that function. A tuple may be more appropriate here.

Vasco says he rarely uses tuples in his own programs, except when using libraries such as RxJS.
He recommends rather defining custom object types.

## Understanding the Unknown type

📁Related files:
/fundamentals/24-unknown-type.ts

The `any` type is like an escape hatch for the type system and allows any value to be passed in, but
removes the benefits of the typing language.

This is different from `unknown`. 

- `any` and `unknown` are "catch-all" types
- `any` is far more permissive and will compile when typed against all types
-  You can assign any value to a variable of type `unknown` e.g.
```ts
let unknownValue: unknown

unknownValue = true
unknownValue = 10
unknownValue = 'Hello World'
unknownValue = []
unknownValue = {}
unknownValue = null
unknownValue = undefined
```

- However, you cannot assign a variable of type `unknown` to a more specific type without narrowing it first.

```ts
// Any type_____________

let anyValue: any

// All the following are accepted and will compile
let value1: unknown = anyValue
let value2: any = anyValue
let value3: boolean = anyValue
let value4: number = anyValue
let value5: string = anyValue
let value6: Array<any> = anyValue
let value7: object = anyValue
let value8: null = anyValue
let value9: undefined = anyValue

// Unknown type_____________

let unknownValue: unknown

// The following are accepted and will compile...
let value10: unknown = unknownValue
let value11: any = unknownValue
// ...however the rest will return a compilation error
let value12: boolean = unknownValue
let value13: number = unknownValue
let value14: string = unknownValue
let value15: Array<any> = unknownValue
let value16: object = unknownValue
let value17: null = unknownValue
let value18: undefined = unknownValue
```

Here is an example of narrowing the type - see the next lecture for further details.

```ts
function handleValue(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()) // safe, value is now known to be string
  }

  if (typeof value === 'number') {
    console.log(value.toFixed(2)) // safe, value is a number
  }
}
```

✅ TL;DR
- As a general rule try to avoid using both `any` and `unknown`.
- Use unknown when you want type safety but don’t yet know the type.
- Use any only when you want to intentionally bypass the type system.
- You must narrow unknown with type guards before using it.

## Understanding Type narrowing and Type predicates

📁Related files:
/fundamentals/25-type-predicates.ts

" Predicates in programming are simply functions that return a boolean to answer a yes/no question. 
Several JavaScript built-in array methods, such as filter, find, every, and some, use predicates 
to help with decision-making." [Source](https://www.freecodecamp.org/news/what-are-type-predicates-in-typescript/)


```ts
// Example, we want to do a type check before assigned to Course
// The usage of `x is y` makes this a type predicate function
// This allows the typescript compiler to convert the type from unknown to the know interface
function isCourse(value: unknown): value is Course {
    const course = value as Course
    return course?.title !== null && course?.subtitle !== null
}

if(isCourse(course)) {
    course.title // title: string
}

// See what happens if we simply use a boolean outcome opposed to a proper type predicate
function isCourseBoolean(value: unknown): boolean {
    const course = value as Course
    return course?.title !== null && course?.subtitle !== null
}

if(isCourseBoolean(course)) {
    course.title // TS2339: Property title does not exist on type unknown
}
```

## Understanding the never type

📁Related files:
/fundamentals/26-type-never.ts

The `never` type is one of the more strange types in this language.

You cannot assign anything to a variable typed as 'never'
```ts
let neverValue: never = 1 //TS2322: Type number is not assignable to type never
let neverValue2: never = "string" //TS2322: Type string is not assignable to type never
let neverValue3: never = true //TS2322: Type boolean is not assignable to type never
let neverValue4: never = [] //..etc
let neverValue5: never = {}

let anyValue: any
let neverValue6: never = anyValue
let neverValue7: never = null
let neverValue8: never = undefined
```

The `never` type is meant to be used by the inference system when it determines that a certain situation is *impossible* and can never happen.

```ts
type CourseStatus = "draft" | "published" // Only two values

let courseStatus: CourseStatus = "draft"

if(courseStatus === "draft") {
    console.log("draft")
} else if(courseStatus === "published") {
    console.log("published")
} else {
    const value = courseStatus // Inferred type becomes _never_
    // Code in here will never be executed and never be reached
}
```

The following shows an example of how using `never` in defensive programming can be helpful to identify when things are going ary:

```ts
type CourseStatus = "draft" | "published"

let courseStatus: CourseStatus = "draft"

if(courseStatus === "draft") {
    console.log("draft")
} else if(courseStatus === "published") {
    console.log("published")
} else {
    unexpectedError(courseStatus)
}
function unexpectedError(value: never) {
    throw new Error(`Unexpected value ${value}`)
}
```

If a dev then adds a new CourseStatus value, then a compilation error will render:

TS2345: Argument of type string is not assignable to parameter of type never

Note: Writing a function such as unexpectedError is called [Exhaustiveness checking](https://gibbok.github.io/typescript-book/book/exhaustiveness-checking/)


## Typescript intersection types

📁Related files:
/fundamentals/27-intersection-types.ts

An `intersection type` is the opposite of a `union type` and is a *combination* of types.

```ts
interface HasId {
    id: string
}

interface HasTitle {
    title: string
    description: string
}

type Course = HasId & HasTitle // Combination an intersection type

const course: Course = {
    id: "123",
    title: "Typescript",
    description: "Learn the basics"
}
```

✅ When to Use Intersection Types (&)
Use them when:

- You want to combine multiple types (including non-interfaces).
- You're working with union types, primitive types, or type aliases.
- You want maximum flexibility (e.g. with utility types or conditional types).
- You're composing things inline or dynamically.

```ts
type Timestamped = { createdAt: Date }
type User = { name: string }

type TimestampedUser = Timestamped & User
```

✅ When to Use interface extends
Use when:

- You're building clear, structured, named object shapes (especially in OOP-style code).
- You want to inherit a base structure and expand it.
- You want to augment existing interfaces (like in a declaration file or a third-party lib).

```ts
interface User {
  name: string;
}

interface Admin extends User {
  role: "admin";
}
```

