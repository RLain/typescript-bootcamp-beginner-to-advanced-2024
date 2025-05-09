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

Resume: https://www.udemy.com/course/complete-typescript-2-course/learn/lecture/31638638#questions/19036486


