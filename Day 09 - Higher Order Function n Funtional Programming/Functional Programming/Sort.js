// Sorting String Values

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']



// Sorting Numeric values

const numbers = [9.81, 3.14, 100, 37]
console.log(numbers.sort()) // [100, 3.14, 37, 9.81]

numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]



// Sorting Object Arrays

const users = [
  { name: 'Sam', age: 150 },
  { name: 'Tim', age: 50 },
  { name: 'Jim', age: 100 },
  { name: 'Pam', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users)
/* [
  { name: 'Pam', age: 22 },
  { name: 'Tim', age: 50 },
  { name: 'Jim', age: 100 },
  { name: 'Sam', age: 150 }
] */







