const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) 
{
  console.log(num)
} // 1 2 3 4 5


for (const num of numbers) 
{
  console.log(num * num)
} // 1 4 9 16 25


// adding all the numbers in the array
let sum = 0
for (const num of numbers) 
{
  sum = sum + num  
}
console.log(sum) // 15


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) 
{
  console.log(tech.toUpperCase())
} // HTML CSS JAVASCRIPT REACT NODE MONGODB


for (const tech of webTechs) {
  console.log(tech[0]) // H C J R N M
}
