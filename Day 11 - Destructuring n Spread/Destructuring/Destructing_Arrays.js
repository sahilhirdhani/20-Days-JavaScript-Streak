const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree) // 1 2 3 


const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp) // 2.72 3.14 9.81 37 100



// Additional comma helps skipping the value

let names = ['Sam', 'Tim', 'Jim', 'John']
let [, secondPerson, , fourthPerson] = names

console.log(secondPerson, fourthPerson) // Tim John


// We can use default value in case the value of array for that index is undefined or missing

names = [undefined, 'Tim', 'Jim']
let [
  firstName = 'Sam',
  secondName,
  thirdName,
  fourthName = 'John'
] = names

console.log(firstName, secondName, thirdName, fourthName) // Sam Tim Jim John


// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]




















































