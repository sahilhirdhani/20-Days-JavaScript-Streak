// Variables

let firstName = 'Sahil'
let lastName = 'Hirdhani'
let country = 'India'
let city = 'Ajmer'

const PI = Math.PI
const gravity = 9.81

// arrays
const names = ['Sam', 'Tim', 'Jim', 'Pam']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['India', 'U.A.E.', 'Australia', 'Canada', 'Russia']
const languages = ['Arabic', 'English', 'French', 'Hindi', 'Sanskrit']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['kiwi', 'orange', 'mango', 'apple']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']


// Function

// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// function which calculates a square of a number
const square = (n) => n * n

// a function which generate random hexa colors
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

// a function which shows date and time
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}


// Loops

for (let i = 0; i < n; i++){
    console.log()
}

// declaring an array variable
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}


// iterating an array using for of
for( const name of names) {
    console.log(name.toUpperCase())
}

// iterating array using forEach 
names.forEach((name) => name.toUpperCase())


const person = {
  firstName: 'Sahil',
  lastName: 'Hirdhani',
  age: 19,
  country: 'India',
  city: 'Ajmer',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isEmployes: false
}
for(const key in person) {
    console.log(key)
}



// Classes
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}


