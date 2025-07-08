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

Resume: https://www.udemy.com/course/complete-typescript-2-course/learn/lecture/33048002#questions

