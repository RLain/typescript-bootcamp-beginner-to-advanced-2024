const date = new Date() // This Date constructor is built using OOP

date.toString() // this is using the toString method on the Date constructor
date.toISOString() // Another method on the constructor


// This creates a blueprint of what a Course contains
// 1) The top section defines the data
class Course {
    // These are the member variables
    private title: string
    lessonsCount: number
    creationDate: Date
    inferredString = ""

    // We then need a way to initialise the data. This is done using the constructor
    // which is a special method that intialises the class. The only time this is called
    // is when are creating a new instance of the class
    constructor(title: string, lessonsCount: number, creationDate: Date) {
        this.title = title
        this.lessonsCount = lessonsCount
        this.creationDate = creationDate
    }

    // 2) The next section defines the behaviours using methods
    age(){
        const ageInMs = new Date().getTime() - this.creationDate.getTime()

        return Math.round(ageInMs / (1000 * 60 * 24))
    }

    updateTitle(newTitle: string) {
        this.title = newTitle
    }
}

const course = new Course("Typescript", 100, new Date(2000,1,1))
console.log("Course age", course.age())

course.updateTitle("New value")

console.log("Course", course)



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
