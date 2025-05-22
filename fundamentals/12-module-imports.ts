//imports

import {PAGE_SIZE} from "./11-module-exports";

const pageSize = PAGE_SIZE

export {
    PAGE_SIZE as MAX_PAGE_SIZE,
}

// import { COURSE_TOTAL, TYPESCRIPT_COURSE, printCourse } from "./13-default-exports"
import * as constants from "./13-default-exports"
constants.COURSE_TOTAL

import printCourse from "./13-default-exports"
printCourse({})