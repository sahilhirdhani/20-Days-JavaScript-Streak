let txt = 'This regular expression example was made in January 01,  2023.'

let pattern = /\b\w{4}\b/g
let matches = txt.match(pattern)
console.log(matches) // ['This', 'made', '2023']

pattern = /\b[a-zA-Z]{4}\b/g
matches = txt.match(pattern)
console.log(matches) // ['This', 'made']

pattern = /\d{4}/g
matches = txt.match(pattern)
console.log(matches) // ['2023']

pattern = /\d{1,4}/g
matches = txt.match(pattern)
console.log(matches) // ['01', '2023']








