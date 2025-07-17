# Object Orientated Programming (OOP) in Typescript

## Introduction to Typescript Classes

📁Related files:
/classes/src/01-classes-intro.ts

Typescript supports _both_ OOP and functional programming well. OOP is less frequently used these days as there is nothing
it can do that we can't do with plain functions. The latter is more common and easier to understand and reason about. However
it is still important to have a basic understanding of OOP as lots of frameworks still use it.

## Writing our first Typescript Class - The Constructor

📁Related files:
/classes/src/01-classes-intro.ts (yes same as previous)

A class is a language construct where we have data and behaviour that are tightly related together.

There are three core parts to a class:

1) Defining the member variables
2) Defining the constructor
3) Defining the behaviour via methods

### Member variables

By default, these are mutable and publicly visible

```ts
class Course {
// These are the member variables
    title: string
    lessonsCount: number
    creationDate: Date

    constructor(title: string, lessonsCount: number, creationDate: Date) {
        this.title = title
        this.lessonsCount = lessonsCount
        this.creationDate = creationDate
    }
}
````

This means you don't need to explicitly add the `public` keyword as it is implicit if no other keyword exists (e.g. private/protected)
```ts
class Course {
    public title: string // public is redundant here
//...etc
}
````

Here is an example of a mutation happening
```ts
const course = new Course("Typescript", 100, new Date(2000,1,1))
course.title = "New value"

console.log("Course", course)
```
Will mutate the title value:
```bash
Course Course {
  title: 'New value',
  lessonsCount: 100,
  creationDate: 2000-01-31T22:00:00.000Z
}
```

If we change a member variable to be private, then then it can only be mutated using a method inside the class

```ts
class Course {
    private title: string
//...etc
}

// This is no longer allowed - TS2341: Property title is private and only accessible within class Course
course.title = "New value" 
```

We can use a method to change a private variable

```ts
class Course {
    private title: string
//...etc
    updateTitle(newTitle: string) {
        this.title = newTitle
    }
}

// This is allowed
const course = new Course("Typescript", 100, new Date(2000,1,1))
course.updateTitle("New value")
```


Most of the time you want to keep the data `private` and only allow mutation _inside_ the class. This is OOP
best practise and is called `encapsulation`. If someone wants to modify the data, they need to explicitly call
a data modification method. 

You can also radically simplify how a class is defined like so

```ts
class CourseSimple {
    constructor(
        private title: string,
        private lessonsCount: number,
        private creationDate: Date) {
    }

    updateTitle(newTitle: string) {
        this.title = newTitle
    }
}

const newCourse = new CourseSimple("Typescript", 100, new Date(2000,1,1))
newCourse.updateTitle("New value")
console.log("newCourse", newCourse)
```




