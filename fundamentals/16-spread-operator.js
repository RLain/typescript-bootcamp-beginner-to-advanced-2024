var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the fundamentals",
    stats: {
        lessonsCount: 0,
    }
};
// This is a shallow copy
var courseCopy = __assign({}, course);
console.log(course);
courseCopy.stats.lessonsCount = 5; //Changes here...
console.log(courseCopy);
console.log(course); // ...do change the original!
var course2 = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the fundamentals",
    stats: {
        lessonsCount: 0,
    }
};
// This is a deep copy
var courseCopyDeep = __assign(__assign({}, course), { stats: __assign({}, course.stats) });
console.log('___________________');
console.log(course2);
courseCopy.stats.lessonsCount = 5; //Changes here...
console.log(courseCopyDeep);
console.log(course2); // ...do not change the original
