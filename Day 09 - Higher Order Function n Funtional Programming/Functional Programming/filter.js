const scores = [
  { name: 'Sam', score: 95 },
  { name: 'Tim', score: 98 },
  { name: 'Pam', score: 80 },
  { name: 'Jim', score: 50 },
  { name: 'Kev', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

/* [
  { name: 'Sam', score: 95 },
  { name: 'Tim', score: 98 },
  { name: 'Kev', score: 85 },
  { name: 'John', score: 100 }
] */