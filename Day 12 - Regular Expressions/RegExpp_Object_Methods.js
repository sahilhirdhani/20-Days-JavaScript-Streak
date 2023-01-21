//testing for a match

let str = 'I love JavaScript'
let pattern = /love/
let result = pattern.test(str)
console.log(result) // true


//Array containing all of the match

result = str.match(pattern)
console.log(result) // ["love", index: 2, input: "I love JavaScript", groups: undefined]



pattern = /love/g
result = str.match(pattern)
console.log(result) // ["love"]


pattern = /love/g
result = str.match(pattern)
console.log(result) // 2


// Replacing a substring

let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')

console.log(matchReplaced) // JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language


txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')

console.log(matchReplaced) // JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language


txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced) // JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language






















