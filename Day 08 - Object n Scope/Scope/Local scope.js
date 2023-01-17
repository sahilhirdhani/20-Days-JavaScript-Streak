//Block and Function Scope

let a = 'JavaScript' // global scope
let b = 10 // global scope

function letsLearnScope() 
{
  console.log(a, b) // JavaScript 10
  let value = false // function scope, can be accessed anywhere in the function
  if (true) 
  { // variables declared here are accessible here only i.e. this block only so block scope
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  console.log(a, b, value) // JavaScript 10 true
}

letsLearnScope() /*  JavaScript 10
							Python 20 30 true
							JavaScript 10 true */

console.log(a, b) // JavaScript 10









