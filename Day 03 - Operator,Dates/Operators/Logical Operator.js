const check0 = 4 > 3 && 10 > 5 // true 
const check1 = 4 > 3 && 10 < 5 // false
const check2 = 4 < 3 && 10 < 5  // false 

const check3 = 4 > 3 || 10 > 5 // true
const check4 = 4 > 3 || 10 < 5 // true
const check5 = 4 < 3 || 10 < 5 // false

//! Negation examples

let check6 = 4 > 3 // true
let check7 = !(4 > 3) //  false
let isLightOn = true
let isLightOff = !isLightOn // false
let isEmployes = !true // false