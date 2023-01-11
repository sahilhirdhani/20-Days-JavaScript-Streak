let space = " "
let fName = "Sahil"
let lName = "Hirdhani"
let language = "JavaScript"

//String Concatenation
let fullName = fName + space + lName
console.log(fullName) // Sahil Hirdhani

/* Escape Sequence
\n: new line
\t: tab, i.e. 8 spaces
\\: back slash
\': Single quote
\": Double quote */

//Template literals 
/* We write string in back-ticks(`) and in b/w we use dollar($) and curly brackets({}) to insert an integer in final output. */

let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a+b}`)

//String Methods

//1. Length

console.log(fName.length) //5
console.log(lName.length) //8

//2. Index

console.log(fName[0]) //'S'
console.log(fName[fName.length-1]) //'l' to access last index of the string


//3. toUpperCase()

console.log(fName.toUpperCase()) // 'SAHIL'
console.log(lName.toUpperCase()) // 'HIRDHANI'


//4. toLowerCase()

console.log(fName.toLowerCase()) // 'sahil'
console.log(lName.toLowerCase()) // 'hirdhani'


//5. substr()

console.log(language.substr(4,6)) // 'Script' i.e starting index to number of characters


//6. substring() 

console.log(language.substring(0,4)) // 'Java'
console.log(language.substring(4,10)) // 'Script i.e starting index to last index -1


//7. split()

let str = 'The quick brown fox jumps over the lazy dog'

console.log(str.split()) // ["The quick brown fox jumps over the lazy dog"]
console.log(str.split(' ')) // ["The","quick","brown","fox","jumps","over","the","lazy","dog"]
console.log("Sahil".split('')) //["S","a","h","i","l"]


//8. trim()
str = "   Sahil   "
console.log(str.trim()) // 'Sahil' i.e. removes extra spaces from start and end


//9. includes()
str = 'The quick brown fox jumps over the lazy dog'
console.log(str.includes('Lazy')) // false
console.log(str.includes('lazy')) // true
console.log(str.includes('fox')) // true


//10. replace()

str = 'The quick brown fox jumps over the lazy dog'

console.log(str.replace('brown','red')) // 'The quick red fox jumps over the lazy dog'

console.log(str) // 'The quick brown fox jumps over the lazy dog' it does not replace permanently for that

str = str.replace('brown','red')
console.log(str) //'The quick red fox jumps over the lazy dog'


//11. charAt()
str = "Sahil"
console.log(str.charAt(3)) //'i'


//12. charCodeAt()
console.log(str.charCodeAt(0)) //83 'S' i.e. returns ASCII value
console.log(str.charCodeAt(1)) //97 'a'


//13. indexOf()
str = 'The quick brown fox jumps over the lazy dog'
console.log(str.indexOf('The')) //0 returns the index of the first character
console.log(str.indexOf('the')) //31
console.log(str.indexOf('Lazy')) //-1 if not found


//14. lastIndexOf()
str = 'The quick brown fox jumps over the lazy dog'
console.log(str.lastIndexOf('he')) //32 Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1


//15. concat()

str = "Apple"
console.log(str.concat("Boy","cat")) //AppleBoycat
console.log("pi".concat("rate")) //pirate


//16. startsWith() it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

str = 'The quick brown fox jumps over the lazy dog'
console.log(str.startsWith('the')) //false
console.log(str.startsWith('The')) //true


//17. endsWith()

str = 'The quick brown fox jumps over the lazy dog'
console.log(str.endsWith('dog')) //true
console.log(str.endsWith("Dog")) //false


//18. search() it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
str = 'The quick brown fox jumps over the lazy dog'
console.log(str.search('brown')) //10
console.log(str.search('Brown')) //-1


//19. match()
str = 'The quick brown fox jumps over the lazy dog'
console.log(str.match('fox'))
/* [
  'fox',
  index: 16,
  input: 'The quick brown fox jumps over the lazy dog',
  groups: undefined
] */


//20. repeat() return the string with repeated n time
str = "Sahil"
str.repeat(2) //SahilSahil












