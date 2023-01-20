let user = {
  name:'Sahil',
  title:'Programmer',
  country:'India',
  city:'Ajmer'
}

let copiedUser = {...user}
console.log(copiedUser) // { name: 'Sahil', title: 'Programmer', country: 'India', city: 'Ajmer' }


// changing the object while copying
user = {
  name:'Sahil',
  title:'Programmer',
  country:'India',
  city:'Ajmer'
}

copiedUser = {...user, title:"Student", city:"Bhopal"}
console.log(copiedUser) // { name: 'Sahil', title: 'Student', country: 'India', city: 'Bhopal' }


// Spread operator with arrow function


let sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5) // [1, 2, 3, 4, 5]



sumAllNums = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
  
}

console.log(sumAllNums(1, 2, 3, 4, 5)) // 15


