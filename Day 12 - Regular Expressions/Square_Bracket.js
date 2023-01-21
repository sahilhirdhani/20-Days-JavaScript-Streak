let pattern = '[Aa]pple' // this square bracket means either A or a

let txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '

let matches = txt.match(pattern)

console.log(matches) // ["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]


pattern = /[Aa]pple/g
matches = txt.match(pattern)
console.log(matches) // ["Apple", "apple"]


pattern = /[Aa]pple|[Bb]anana/g
matches = txt.match(pattern)
console.log(matches) // ["Apple", "banana", "apple", "banana", "Banana"]







 