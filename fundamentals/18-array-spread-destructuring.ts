const numbers = [1, 2, 3]

const moreNumbers = [...numbers, 4, 5, 6]

console.log(moreNumbers)

// Destructuring
const [ first, second, ...remainder] =  moreNumbers

console.log('Numbers', first, second)
console.log('Remainder', remainder)
