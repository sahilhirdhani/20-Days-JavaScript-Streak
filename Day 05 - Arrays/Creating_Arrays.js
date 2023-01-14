const numbers = [0, 3.14, 9.81, 37, 98.6, 100] 

const fruits = ['banana', 'orange', 'mango', 'lemon']

const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']


console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)



//Array with items of different data-tpes
const arr = [
    'Sahil',
    250,
    true,
    { country: 'India', city: 'Ajmer' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]
console.log(arr)


//Creating array using split
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words) // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


//Accessing array items using index
let firstFruit = fruits[0] 
console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon

lastFruit = fruits[fruits.length - 1]
console.log(lastFruit)  // lemon




console.log(numbers.length)  // 6
console.log(numbers) // [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]) // 0
console.log(numbers[5]) // 100

console.log(numbers[numbers.length - 1]) // 100



console.log(webTechs)
console.log(webTechs.length) // 7
console.log(webTechs[0]) // HTML
console.log(webTechs[6]) // MongoDB
console.log(webTechs[webTechs.length - 1]) // MongoDB i.e. last index










