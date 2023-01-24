const usersText = {
    firstName:"Sam",
    lastName:"Mas",
	 country:"India",
    city:"Ajmer",
    age:19,
    email:"sam@mas.com"

}

const txt = JSON.stringify(usersText, ['firstName', 'lastName', 'age'], 4)

console.log(txt)
/* {
    "firstName": "Sam",
    "lastName": "Mas",
    "age": 19
} */