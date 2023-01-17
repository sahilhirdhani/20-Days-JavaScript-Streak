//Creating an object

const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

let person = {
  firstName: 'Sahil',
  lastName: 'Hirdhani',
  age: 19,
  country: 'India',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'DBMS',
    'Python'
  ]
}
console.log(person) /*{
  firstName: 'Sahil',
  lastName: 'Hirdhani',
  age: 19,
  country: 'India',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'DBMS',
    'Python'
  ]
}*/


// getting values from the objects

console.log(person.firstName) // Sahil
console.log(person.lastName) // Hirdhani
console.log(person.age) // 19

//or we can use square brackets to access the values of the object

console.log(person['firstName']) // Sahil
console.log(person['lastName']) // Hirdhani
console.log(person['age']) // 19



//creating object function

person = {
  firstName: 'Sahil',
  lastName: 'Hirdhani',
  age: 19,
  country: 'India',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'DBMS',
    'Python'
  ],
  getFullName: function() 
  {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName()) // Sahil Hirdhani


//Setting new key for an object

person.title = 'Student'
person.skills.push('GarageBand')
person.isEmployed = false

person.getPersonInfo = function() 
{
  let fullName = this.getFullName()
  let statement = `My name is ${fullName}.\nI am a ${this.title}.\nI live in ${this.country}.`
  return statement
}

console.log(person)
/* {
  firstName: 'Sahil',
  lastName: 'Hirdhani',
  age: 19,
  country: 'India',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'DBMS',
    'Python',
    'GarageBand'
  ],
  getFullName: [Function: getFullName],
  title: 'Student',
  isEmployed: false,
  getPersonInfo: [Function (anonymous)]
} */

console.log(person.getPersonInfo())
/* My name is Sahil Hirdhani.
I am a Student.
I live in India. */


//Object Methods

//Object.assign: To copy an object without modifying the original object

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
/* {
  firstName: 'Sahil',
  lastName: 'Hirdhani',
  age: 19,
  country: 'India',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'DBMS',
    'Python',
    'GarageBand'
  ],
  getFullName: [Function: getFullName],
  title: 'Student',
  isEmployed: false,
  getPersonInfo: [Function (anonymous)]
} */


//Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson)
console.log(keys)
/* [
  'firstName',
  'lastName',
  'age',
  'country',
  'skills',
  'getFullName',
  'title',
  'isEmployed',
  'getPersonInfo'
] */


//Object.values:To get values of an object as an array

const values = Object.values(copyPerson)
console.log(values)
/* [
  'Sahil',
  'Hirdhani',
  19,
  'India',
  [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'DBMS',
    'Python',
    'GarageBand'
  ],
  [Function: getFullName],
  'Student',
  false,
  [Function (anonymous)]
] */


//Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson)
console.log(entries)
/* [
  [ 'firstName', 'Sahil' ],
  [ 'lastName', 'Hirdhani' ],
  [ 'age', 19 ],
  [ 'country', 'India' ],
  [
    'skills',
    [
      'HTML',
      'CSS',
      'JavaScript',
      'Java',
      'DBMS',
      'Python',
      'GarageBand'
    ]
  ],
  [ 'getFullName', [Function: getFullName] ],
  [ 'title', 'Student' ],
  [ 'isEmployed', false ],
  [ 'getPersonInfo', [Function (anonymous)] ]
] */


//hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty('firstName')) // true
console.log(copyPerson.hasOwnProperty('score')) // false





