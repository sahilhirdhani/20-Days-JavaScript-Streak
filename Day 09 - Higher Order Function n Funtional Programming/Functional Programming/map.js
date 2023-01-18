const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare) // [1, 4, 9, 16, 25]


const countries = ['India', 'Pakistan', 'Bangladesh', 'Nepal', 'Bhutan']

const countriesToUpperCase = countries.map((country) => country.toUpperCase())

console.log(countriesToUpperCase)
// [ 'INDIA', 'PAKISTAN', 'BANGLADESH', 'NEPAL', 'BHUTAN' ]

