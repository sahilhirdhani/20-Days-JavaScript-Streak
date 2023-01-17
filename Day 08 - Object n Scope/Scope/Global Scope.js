let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file

function letsLearnScope() 
{
  console.log(a, b) // JavaScript 10
  if (true) 
  {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b) // JavaScript 10
}

letsLearnScope() // JavaScript 10
					// Python 100
					// JavaScript 10

console.log(a, b) // JavaScript 10