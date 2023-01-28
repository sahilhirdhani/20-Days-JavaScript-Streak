//Storing string in a localStorage

localStorage.setItem('firstName', 'Sahil')

console.log(localStorage) // Storage {firstName: 'Sahil', length: 1}


// Storing number in a local storage

localStorage.setItem('age', 19)

console.log(localStorage) // Storage {age: '19', firstName: 'Sahil', length: 2}


// If we are storing an array, an object or object array, we should stringify the object first. See the example below.


const skills = ['HTML', 'CSS', 'JS', 'React']

const skillsJSON = JSON.stringify(skills, undefined, 4)

localStorage.setItem('skills', skillsJSON)

console.log(localStorage) // Storage {age: '19', firstName: 'Sahil', skills: 'HTML,CSS,JS,React', length: 3}



// SetItem n GetItem

const user = {
  firstName: 'Sahil',
  age: 19,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)

localStorage.setItem('user', userText)

let firstName = localStorage.getItem('firstName')

let age = localStorage.getItem('age')

let skills = localStorage.getItem('skills')

console.log(firstName, age, skills) // 'Sahil', '19', '['HTML','CSS','JS','React']'


let skills = localStorage.getItem('skills')

let skillsObj = JSON.parse(skills, undefined, 4)

console.log(skillsObj) // ['HTML','CSS','JS','React']


localStorage.clear() // To clear everything stored in local storage







