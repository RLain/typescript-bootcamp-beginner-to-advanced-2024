// The following infers to type of HTMLElement as this is the only information it knows
const input = document.getElementById("input-field")

input.value //TS2339: Property value does not exist on type HTMLElement

// This is a type assertion
const input2 = document.getElementById("input-field") as HTMLInputElement

input2.value //Whereas this is known

// This is an example of casting - this is an older syntax as using the 'as' keyword is more modern/recommended
const input3 = <HTMLInputElement> document.getElementById("input-field")

input3.value //Whereas this is known

//Typescript also has a defensive mechanism when it has an expectation of what _should_ be allowed:
// TS2352: Conversion of type HTMLElement to type string may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to unknown first.
const input4 = document.getElementById("input-field") as string

input4.value //Won't work

//To override this defense mechanism (this would be extremely rare!)
const input5 = (document.getElementById("input-field") as any) as string

