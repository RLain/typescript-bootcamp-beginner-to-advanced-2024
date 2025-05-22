# Deep dive into the the Typescript Modules, Imports and Exports

## Introduction to Typescript Modules - Exports and Imports

📁Related files:
/fundamentals/11-module-exports.ts
/fundamentals/12-module-imports.ts

Each file in Typescript is considered an `isolated module`. This means anything defined on a file such as a 
constant name is unique _per file_ by default. You can have the same constant on multiple files....

Image we have two files, the following will not work:

1) exports.ts
```ts
const PAGE_SIZE = 10
```

2) imports.ts
```ts
const pageSize = PAGE_SIZE // TS2552: Cannot find name PAGE_SIZE. Did you mean pageSize?
```

We need to explicitly export the PAGE_SIZE variable, and import into the second file like so:

1) exports.ts
```ts
export const PAGE_SIZE = 100
```

2) imports.ts
```ts
import { PAGE_SIZE } from "./11-module-exports";

const pageSize = PAGE_SIZE
```

We can export/import anything including objects, arrays, interfaces, functions, types etc.

## Typescript Module Re-Exports: Building an Import Barrel

We can rename things when we export them like tso:

1) imports.ts
```ts
import {PAGE_SIZE} from "./11-module-exports"

const pageSize = PAGE_SIZE

export {
    PAGE_SIZE as MAX_PAGE_SIZE,
}
```

2) exports.ts
```ts
import { MAX_PAGE_SIZE } from "./12-module-imports"
```

The next thing to ask is why would we do this? What is the benefit of importing something, 
renaming it then exporting and importing back into to the original place (or a new place)?

A core benefit of this capability is creating a centralised place to import things from (this is Matt's index.ts approach at FMS!)

For example, image we have a directory containing multiple files:
- src/course-model.ts
- src/feature-1.ts
- src/feature-2.ts

We could simply import things from their source e.g. if we need something from feature-1 on feature-2, we import directly.

But this can become confusing. It is easier to set up an explicit file that manages all exports such as the following:

index.ts
```ts
import { Course } from "./course-model"
import { loadAllCourses } from "./feature-1"
import { saveCourse } from "./feature-2"

export {
    Course,
    loadAllCourses,
    saveCourse
}
```

Then we can simply import from this centralised source e.g.
```ts
import { saveCourse } from "./index.ts"
```

Side note, at FMS we would create an index.ts for a directory and then export everything from the source files such as

index.ts
```ts
export * from './utility'
```

ℹ️ After this lecture, I did some additional reading on barrel files and they `seem quite controversial`.
"Barrel files are like the index of a book, great for keeping things organized, but if the book sucks, no amount of indexing will save it."
- https://flaming.codes/posts/barrel-files-in-javascript/
- https://tkdodo.eu/blog/please-stop-using-barrel-files

## Typescript Module Default Exports and The Import as syntax

📁Related files:
/fundamentals/12-module-imports.ts
/fundamentals/13-default-exports.ts

When importing things into a file, you could state them individually as follows

```ts
import { COURSE_TOTAL, TYPESCRIPT_COURSE, printCourse } from "./13-default-exports"
```

However, there is also this approach:
```ts
import * as constants from "./13-default-exports"

//The things can then be referenced like follows
constants.COURSE_TOTAL
```

There is also the capability to define an export as the default for that file, this is useful if there is something
that regularly needs accessing. On the source file itself simply add the `default` property:

```ts
export default function printCourse(course){
  console.log(`The course title is ${course.title}`)
}
```

This then allows you to import like so, which is slightly more convenient to import
```ts
import printCourse from "./13-default-exports"
printCourse({})
```















