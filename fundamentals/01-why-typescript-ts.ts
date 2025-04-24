const name2 = "Typescript Bootcamp"

function printCourseName(name: string){
    // ⬅️ The IDE knows name is a string so offers auto-complete when typing a period after name ergo name.
    // toUpperCase() is simply one of the options that shows.
    console.log("The course name is " + name.toUpperCase())
}

printCourseName(name2)
// The following will now show an error, as Typescript is able to flag during _compilation_
printCourseName(100) //TS2345: Argument of type number is not assignable to parameter of type string
printCourseName([0,1,2]) //TS2345: Argument of type number[] is not assignable to parameter of type string

// 💡To run this file use $ tsc 01-why-typescript-ts.ts