let neverValue: never = 1 //TS2322: Type number is not assignable to type never
let neverValue2: never = "string" //TS2322: Type string is not assignable to type never
let neverValue3: never = true //TS2322: Type boolean is not assignable to type never
let neverValue4: never = [] //..etc
let neverValue5: never = {}

let anyValue: any
let neverValue6: never = anyValue
let neverValue7: never = null
let neverValue8: never = undefined

//_________________

type CourseStatus = "draft" | "published" | "archived"

let courseStatus: CourseStatus

if(courseStatus === "draft") {
    console.log("draft")
} else if(courseStatus === "published") {
    console.log("published")
}
else if(courseStatus === "archived") {
    console.log("archived")
}
else {
    unexpectedError(courseStatus)
}
function unexpectedError(value: never) {
    throw new Error(`Unexpected value ${value}`)
}

