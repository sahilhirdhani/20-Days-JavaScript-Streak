// Higher Order Function
/* Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback. */

// CallBack
/* A callback is a function which can be passed as parameter to other function. See the example below. */

const callback = (n) => 
{
  return n ** 2
}

function cube(callback, n) 
{
  return callback(n) * n
}
​
console.log(cube(callback, 3)) // 27