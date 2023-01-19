// Creating set from array

const languages = [
  'English',
  'Sanskrit',
  'English',
  'French',
  'Hindi',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages) // Set(4) { 'English', 'Sanskrit', 'French', 'Hindi' }


for (const language of setOfLanguages) 
{
  console.log(language)
}
/* English
Sanskrit
French
Hindi */

// Adding elements to set
const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') 
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5
console.log(companies) // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}


// Deleting an element from set

console.log(companies.delete('Google'))
console.log(companies.size) // 4


// Checking an element in the set

console.log(companies.has('Google')) // false
console.log(companies.has('Facebook')) // true


// Clearing the set

companies.clear()
console.log(companies) // Set(0) {}




// Union of sets

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C) // Set(6) {1, 2, 3, 4, 5,6}


// Intersection of sets

c = a.filter((num) => B.has(num))
C = new Set(c)

console.log(C) // Set(3) {3, 4, 5}


// Difference of sets

c = a.filter((num) => !B.has(num))
C = new Set(c)

console.log(C) // Set(2) {1, 2}






























