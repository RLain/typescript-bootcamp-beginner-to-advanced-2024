const name = "Typescript Bootcamp"

function printCourseName(name){
    console.log("The course name is " + name.toUpperCase())
}

printCourseName(name)
// The following will throw an error, but Javascript is unable to flag this until runtime.
printCourseName(100)
printCourseName([0,1,2])

// 💡To run this file simply cd into the dir and run $ node 01-why-typescript.js