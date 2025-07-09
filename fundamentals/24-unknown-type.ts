// Any type_____________

let anyValue: any

anyValue = true
anyValue = 10
anyValue = 'Hello World'
anyValue = []
anyValue = {}
anyValue = null
anyValue = undefined

// All the following are accepted and will compile
let value1: unknown = anyValue
let value2: any = anyValue
let value3: boolean = anyValue
let value4: number = anyValue
let value5: string = anyValue
let value6: Array<any> = anyValue
let value7: object = anyValue
let value8: null = anyValue
let value9: undefined = anyValue

// Unknown type_____________

let unknownValue: unknown

unknownValue = true
unknownValue = 10
unknownValue = 'Hello World'
unknownValue = []
unknownValue = {}
unknownValue = null
unknownValue = undefined

// The following are accepted and will compile...
let value10: unknown = unknownValue
let value11: any = unknownValue
// ...however the rest will return a compilation error
let value12: boolean = unknownValue
let value13: number = unknownValue
let value14: string = unknownValue
let value15: Array<any> = unknownValue
let value16: object = unknownValue
let value17: null = unknownValue
let value18: undefined = unknownValue

console.log(unknownValue)

function handleValue(value: unknown) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase()) // safe, value is now known to be string
    }

    if (typeof value === 'number') {
        console.log(value.toFixed(2)) // safe, value is a number
    }
}
