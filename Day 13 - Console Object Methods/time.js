const countries = [
  ['India', 'Delhi'],
  ['U.A.E.', 'Abu Dhabi'],
  ['Australia', 'Canberra']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) 
{
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

/* India Delhi
U.A.E. Abu Dhabi
Australia Canberra 
Regular for loop: 0.34716796875ms */

console.time('for of loop')
for (const [name, city] of countries) 
{
  console.log(name, city)
}
console.timeEnd('for of loop')

/* India Delhi
U.A.E. Abu Dhabi
Australia Canberra 
for of loop: 0.26806640625ms */

console.time('forEach loop')
countries.forEach(([name, city]) => 
{
  console.log(name, city)
})
console.timeEnd('forEach loop')

/* India Delhi
U.A.E. Abu Dhabi
Australia Canberra
forEach loop: 0.358154296875ms */