//Anonymous Function

const anonymousFun = function() 
{
  console.log('Anonymous function's values are stored in anonymousFun'
  )
}



//Expression Function

const square = function(n) 
{
  return n * n
}

console.log(square(2)) // 4


//Self Invoking Functions

let squaredNum = (function(n) 
{
  return n * n
})(10)

console.log(squaredNum) // 10


//Arrow Function
function square(n) 
{
  return n * n
}

console.log(square(2)) // 4

const square = n => 
{
  return n * n
}

console.log(square(2))  // 4

// if we have only one line in the code block, it can be written as follows, explicit return

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Sahil', 'Hirdhani'))


















