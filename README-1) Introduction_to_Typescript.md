# 👩‍💻 Udemy Course: [Typescript Bootcamp: Beginner To Advanced (2024 Edition)](https://www.udemy.com/course/complete-typescript-2-course)

ℹ️This course replaces the [previous course](https://github.com/RLain/typescript-complete-developers-guide) I started. I really
enjoy how Vasco teaches having completed two of his Angular University courses at the point of deciding to swap to his Typescript course.
_____________________

# Introduction to Typescript

- [Course code repo](https://github.com/angular-university/typescript-bootcamp)
- Set up:
    • [NodeJs](https://nodejs.org/en) - LTS for a stable version
    • IDE - Webstorm/VSCode
    • [Git](https://git-scm.com/) - Version control

## Why Typescript?

📁Related files:
/fundamentals/01-why-typescript-js.js
/fundamentals/01-why-typescript-ts.ts

- When building in Javascript, it is very easy to write mistakes and not realise until runtime.
- Typescript allows you to catch errors at compilation time (much quicker to pick up and resolve)
- Using Typescript has type safety advantages _and_ also powerful autocomplete capabilities. See the .ts file for an example.

🗣️ Note to self: Typescript makes it easier _to develop_. It is purely to help developers build the codebase. It would be 
limiting to develop on Javascript due to the runtime error delays. 


## Compiling Typescript

- IDEs generally come with a built in Typescript compiler. This means without a tsconfig file, or Typescript installed, your IDE
will flag type errors.
- To explicitly compile the Typescript use the `typescript` package and run using $ tsc
- Once a file is compiled, it will generate a plain .js file e.g. 01-why-typescript.ts.js (is .ts compiled into .js)
- The plain .js file will be created _even_ if there is an error in the compilation...

## Running in a browser

- We set up a simple HTTP server by: 
1. Running $ npm init to set up a Node env in the /fundamentals dir
2. Running $ npm i [lite-server](https://www.npmjs.com/package/lite-server)
3. Adding `"start": "lite-server"` to the package.json script. Note this has hot reload capabilities.
4. Added `index.html` to our /fundamentals dir then spinning up a HTML template by writing html:5 in the file
5. Run $npm run start - then open the Local access URL e.g. http://localhost:3001

ℹ️Hot reload means that when the .ts file is compiled using `tsc` it will automatically refresh on the server. To make life
easier when building, we can run $ tsc --watch --noEmitOnError 01-why-typescript.ts.ts which will start the compilation in watch mode.
Whenever we change the version and save the file, the new version will automatically be applied to our browser.

