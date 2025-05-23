function saveCourse(course, callback) {
    // Simulating a backend call
    setTimeout(function () {
        callback("success");
    }, 1000);
}
saveCourse({ title: "Typescript Bootcamp" }, function () {
    console.log("Save successful");
});
function saveCourse2(course, callback) {
    var _this = this;
    this.course = course;
    setTimeout(function () {
        var _a;
        callback((_a = _this.course.title) !== null && _a !== void 0 ? _a : "unknown course");
    }, 1000);
}
var callBack = function (title) { return console.log("Save successful.", title); };
saveCourse2({ title: "Typescript Bootcamp" }, callBack);
