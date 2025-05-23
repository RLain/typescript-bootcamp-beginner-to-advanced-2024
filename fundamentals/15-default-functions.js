function printCourse(title, subtitle, lessonsCount) {
    if (title === void 0) { title = "Unknown"; }
    if (subtitle === void 0) { subtitle = "Unknown"; }
    if (lessonsCount === void 0) { lessonsCount = 0; }
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", lessonsCount: ").concat(lessonsCount));
}
printCourse();
/*
❯ node 15-default-functions.js
Title: Typescript Bootcamp, Subtitle: Learning fundamentals, lessonsCount: 10
Title: Typescript Bootcamp 2, Subtitle: Learning fundamentals, lessonsCount: 0
 */ 
