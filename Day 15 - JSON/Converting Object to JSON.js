const usersText = {
users:[
  {
    firstName:"Sam",
    lastName:"Mas",
    age:19,
    email:"sam@mas.com"
  },
  {
    firstName:"Tim",
    lastName:"Mit",
    age:20,
    email:"mit@tim.com"
  },
  {
  firstName:"Jim",
  lastName:"Mij",
  age:21,
  email:"jim@mij.com"
  }
]
}

const txt = JSON.stringify(usersText, undefined, 4)
console.log(txt)
/* '{\n' +
  '    "users": [\n' +
  '        {\n' +
  '            "firstName": "Sam",\n' +
  '            "lastName": "Mas",\n' +
  '            "age": 19,\n' +
  '            "email": "sam@mas.com"\n' +
  '        },\n' +
  '        {\n' +
  '            "firstName": "Tim",\n' +
  '            "lastName": "Mit",\n' +
  '            "age": 20,\n' +
  '            "email": "mit@tim.com"\n' +
  '        },\n' +
  '        {\n' +
  '            "firstName": "Jim",\n' +
  '            "lastName": "Mij",\n' +
  '            "age": 21,\n' +
  '            "email": "jim@mij.com"\n' +
  '        }\n' +
  '    ]\n' +
  '}' */