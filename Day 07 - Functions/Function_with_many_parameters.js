function sumArrayValues(arr) 
{
  let sum = 0;
  for (let i = 0; i < arr.length; i++) 
  {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers)); // 15



// Unlimited Parameters

function sumAllNums() 
{
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4) // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]


function sumAllNums() 
{
  let sum = 0
  for (let i = 0; i < arguments.length; i++) 
  {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173





// Unlimited Parameters using arrow function


const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4) // [1, 2, 3, 4]



const sumAllNums = (...args) => 
{
  let sum = 0
  for (const element of args) 
  {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

