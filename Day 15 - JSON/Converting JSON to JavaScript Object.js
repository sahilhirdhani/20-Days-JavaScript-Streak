const usersText = `{
"users":[
  {
    "firstName":"Sam",
    "lastName":"Mas",
    "age":19,
    "email":"sam@mas.com"
  },
  {
    "firstName":"Tim",
    "lastName":"Mit",
    "age":20,
    "email":"mit@tim.com"
  },
  {
  "firstName":"Jim",
  "lastName":"Mij",
  "age":21,
  "email":"jim@mij.com"
  }
]
}`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj)

/* {
  users: [
    {
      firstName: 'Sam',
      lastName: 'Mas',
      age: 19,
      email: 'sam@mas.com'
    },
    {
      firstName: 'Tim',
      lastName: 'Mit',
      age: 20,
      email: 'mit@tim.com'
    },
    {
      firstName: 'Jim',
      lastName: 'Mij',
      age: 21,
      email: 'jim@mij.com'
    }
  ]
} */