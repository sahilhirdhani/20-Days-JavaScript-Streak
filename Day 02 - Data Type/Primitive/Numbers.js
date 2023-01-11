let age = 19
let mass = 85

const g = 9.8
const PI = 3.14

//Math Object
// g = 10 -- gives error constant can't be changed

const pi = Math.PI

console.log(g,pi) //9.8 3.141592653589793

console.log(Math.round(pi)) // round off to 3
console,log(Math.round(g)) // round off to 10

console.log(Math.floor(pi)) // round down to 3
console.log(Math.floor(g)) // round down to 9

console.log(Math.ceil(pi)) // round up to 4
console.log(Math.ceil(g)) // round up to 10

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

//Absolute value
console.log(Math.abs(-10)) // 10

//Square root
console.log(Math.sqrt(100)) // 10
console.log(Math.sqrt(2)) // 1.4142135623730951

//Power
console.log(Math.pow(3, 2)) // 9

//Log(return natural log)
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(Math.E))) // 1

//Trigno
console.log(Math.sin(0)) // 0
console.log(Math.sin(Math.PI/3)) // 0.8660254037844386





