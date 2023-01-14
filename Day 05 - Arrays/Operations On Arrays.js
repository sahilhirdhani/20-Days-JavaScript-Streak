const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      
numbers[1] = 20      

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0] = 'Afghanistan'  
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' 
console.log(countries) // ["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]



const arr = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

const eightXvalues = Array(8).fill('X')
console.log(eightXvalues) // ['X','X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0)
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4)
console.log(four4values) // [4, 4, 4, 4]


//Array Concatenation
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]


const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const fruitsAndVegetables = fruits.concat(vegetables)
console.log(fruitsAndVegetables) //["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]


//Finding Index of an element in Array
console.log(numbers.indexOf(5)) // 4
console.log(numbers.indexOf(0)) // -1
console.log(numbers.indexOf(10)) // 0
console.log(numbers.indexOf(6)) // -1


//Getting last index of an element in array
//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbers1 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers1.lastIndexOf(2)) // 7
console.log(numbers1.lastIndexOf(0)) // -1
console.log(numbers1.lastIndexOf(1)) //  6
console.log(numbers1.lastIndexOf(4)) //  3
console.log(numbers1.lastIndexOf(6)) // -1


//includes():To check if an item exist in an array. If it exist it returns the true else it returns false.

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C')) // false


//Converting array to string
const names = ['Sam', 'Tim', 'Jim']
console.log(names.toString()) // Sam,Jim,Tim


//Joining Array Elements
console.log(names.join()) // Sam,Tim,Jim
console.log(names.join('')) //SamTimJim
console.log(names.join(' ')) //Sam Tim Jim
console.log(names.join(', ')) //Sam, Tim, Jim
console.log(names.join(' # ')) //Sam # Tim # Jim


//Slice(): To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

console.log(numbers.slice()) // it copies all  item
console.log(numbers.slice(0)) // it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // [2,3,4] it doesn't include the ending position


//Splice() It takes three parameters:Starting position, number of times to be removed and number of items to be added.


let numbers2 = [1, 2, 3, 4, 5]
numbers2.splice()
console.log(numbers2) // remove all items

numbers2 = [1, 2, 3, 4, 5]
numbers2.splice(0,1)
console.log(numbers2) // remove the first item

numbers2 = [1, 2, 3, 4, 5, 6]
numbers2.splice(3, 3, 7, 8, 9)
console.log(numbers2.splice(3, 3, 7, 8, 9)) // [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


//Adding elements in array
let fruits = ['banana', 'orange', 'mango', 'lemon']

fruits.push('apple')
console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

//Removing element using pop
fruits.pop()
console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

//Removing an element from the beginning
fruits.shift() // remove one item from the beginning
console.log(fruits) // ['orange', 'mango', 'lemon', 'apple']

//Add an element from the beginning
fruits.unshift('banana')
console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']


//Reversing Of Array
fruits.reverse()
console.log(fruits) // ['apple', 'lemon', 'mango', 'orange', 'banana']

fruits.reverse()
console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

//Sorting elements in array
fruits.sort()
console.log(fruits) // ['apple', 'banana', 'lemon', 'mango', 'orange']


//Array of arrays
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]
const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
console.log(fullStack[1][1]) //Express













