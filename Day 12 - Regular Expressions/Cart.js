// Starts with

let txt = 'This regular expression example was made in January 01,  2023.'

let pattern = /^This/ // ^ means starts with
let matches = txt.match(pattern)
console.log(matches)  // ['This']


// Negation

pattern = /[^A-Za-z,. ]+/g
matches = txt.match(pattern)
console.log(matches)  // ["01", "2023"]