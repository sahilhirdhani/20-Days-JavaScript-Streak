const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age) // 18

const scores = [
  { name: 'Sam', score: 95 },
  { name: 'Tim', score: 98 },
  { name: 'Pam', score: 80 },
  { name: 'Jim', score: 50 },
  { name: 'Kev', score: 85 },
  { name: 'John', score: 100 },
]
const score = scores.find((user) => user.score > 80)
console.log(score)
{ name: 'Sam', score: 95 }