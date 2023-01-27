/* ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared. */

let firstName = 'Sahil'
let fullName = firstName + ' ' + lastName
console.log(fullName)

// Uncaught ReferenceError: lastName is not defined



// SyntaxError

let square = 2 x 2
console.log(square)

// Uncaught SyntaxError: Unexpected identifier 'x'

console.log('Hello, world")
// VM33:1 Uncaught SyntaxError: Invalid or unexpected token


// TypeError

let num = 10
console.log(num.toLowerCase())

// Uncaught TypeError: num.toLowerCase is not a function