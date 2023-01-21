let pattern = /[a]./g  // this square bracket means a and . means any character except new line
let txt = 'Apple and banana are fruits'
let matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]


pattern = /[a].+/g  // . any character, + any character one or more times 
matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']


// Zero or more times(*)

pattern = /[a].*/g  //. any character, + any character one or more times 

matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']
























