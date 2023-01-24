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

const usersObj = JSON.parse(usersText, (key, value) => 
{
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)
/* {
  users: [
    {
      firstName: 'SAM',
      lastName: 'MAS',
      age: 19,
      email: 'sam@mas.com'
    },
    {
      firstName: 'TIM',
      lastName: 'MIT',
      age: 20,
      email: 'mit@tim.com'
    },
    {
      firstName: 'JIM',
      lastName: 'MIJ',
      age: 21,
      email: 'jim@mij.com'
    }
  ]
} */