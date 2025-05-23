function saveCourse(course, callback: Function) {
    // Simulating a backend call
    setTimeout(function () {
        callback("success")
    }, 1000)
}

saveCourse({title: "Typescript Bootcamp"},
    function () {
        console.log("Save successful")
    })


function saveCourse2(course, callback: Function) {
    this.course = course

    setTimeout(() => {
        callback(this.course.title ?? "unknown course")
    }, 1000)
}

const callBack = (title: string) => console.log("Save successful.", title)
saveCourse2({title: "Typescript Bootcamp"}, callBack)