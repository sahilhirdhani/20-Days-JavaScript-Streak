class Welcome 
{
  // code goes here
}
let greeting = new Welcome()
console.log(greeting) // Welcome{}


// Class Constructor

class Person 
{
  constructor(firstName, lastName) 
  {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person('Sahil', 'Hirdhani')

console.log(person) // Person {firstName: "Sahil", lastName: "Hirdhani"}

const person1 = new Person('Aniket', 'Saini')
const person2 = new Person('Madhav', 'Garg')

console.log(person) // Person {firstName: "Sahil", lastName: "Hirdhani"}
console.log(person1) // Person {firstName: "Aniket", lastName: "Saini"}
console.log(person2) // Person {firstName: "Madhav", lastName: "Garg"}


// Default values with constructor

class Person1 
{
  constructor(
    firstName = 'Sahil',
    lastName = 'Hirdhani',
    age = 19,
    country = 'India',
    city = 'Ajmer'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person3 = new Person1() 
const person4 = new Person1('Madhav', 'Garg', 19, 'India', 'Noida')

console.log(person3) // Person {firstName: "Sahil", lastName: "Hirdhani", age: 19, country: "India", city: "Ajmer"}

console.log(person4) // Person {firstName: "Madhav", lastName: "Garg", age: 19, country: "India", city: "Noida"}



// Class Methods

class Person2 
{
  constructor(firstName, lastName, age, country, city) 
  {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() 
  {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person5 = new Person('Sahil', 'Hirdhani', 19, 'India', 'Ajmer')

console.log(person5.getFullName()) // Sahil Hirdhani



//

class Person3 
{
  constructor(firstName, lastName, age, country, city) 
  {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() 
  {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() 
  {
    return this.score
  }
  get getSkills() 
  {
    return this.skills
  }
  set setScore(score) 
  {
    this.score += score
  }
  set setSkill(skill) 
  {
    this.skills.push(skill)
  }
  static favoriteSkill() 
  {
    const skills = ['HTML', 'CSS', 'JS', 'Python', 'Java']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() 
  {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
  
    if (hours < 10) 
    {
      hours = '0' + hours
    }
    if (minutes < 10) 
    {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

const person6 = new Person('Sahil', 'Hirdhani', 19, 'India', 'Ajmer')


//Properties with initial value

console.log(person6.score) // 0
console.log(person6.skills) // []


//Setter

person6.setScore = 1
person6.setSkill = 'HTML'
person6.setSkill = 'CSS'
person6.setSkill = 'JavaScript'


// Getter

console.log(person6.getScore) // 1, We do not need parenthesis to call a getter method

console.log(person6.getSkills) // ["HTML", "CSS", "JavaScript"]


// Static method

console.log(Person3.favoriteSkill()) // Node
console.log(Person3.showDateTime()) // 3.1.2023 22:33


// Inheritance

class Student extends Person3 
{
  saySomething() 
  {
    console.log('This is Student, child of the person class')
  }
}

const s1 = new Student('Sahil', 'Hirdhani', 19, 'India', 'Ajmer')

console.log(s1) 
/* Student {
  firstName: 'Sahil',
  lastName: 'Hirdhani',
  age: 19,
  country: 'India',
  city: 'Ajmer',
  score: 0,
  skills: []
} */

console.log(s1.saySomething()) // This is Student, child of the person class

console.log(s1.getFullName()) // Sahil Hirdhani

































































