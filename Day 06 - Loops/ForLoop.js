for(let i = 0; i <= 5; i++)
{
  console.log(i)
} // 0 1 2 3 4 5


for(let i = 5; i >= 0; i--)
{
  console.log(i)
} // 5 4 3 2 1 0


for(let i = 0; i <= 5; i++)
{
  console.log(`${i} * ${i} = ${i * i}`)
}
/* 0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25 */


const countries = ['India', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++)
{
  newArr.push(countries[i].toUpperCase())
} // ["INDIA", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]



const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++)
{
  newArr.push( numbers[i] ** 2)
} 
console.log(newArr)  // [1, 4, 9, 16, 25]