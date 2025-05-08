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

Resume: https://www.udemy.com/course/complete-typescript-2-course/learn/lecture/31425314#overview
