function generateFullName(firstName = 'Sahil', lastName = 'Hirdhani') 
{
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName()) // Sahil Hirdhani
console.log(generateFullName('Sam', 'Hillston')) // Sam Hillston


// as arrow functions

const generateFullNameWa = (firstName = 'Sahil', lastName = 'Hirdhani') => 
{
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullNameWa()) // Sahil Hirdhani
console.log(generateFullNameWa('Sam', 'Hillston')) // Sam Hillston