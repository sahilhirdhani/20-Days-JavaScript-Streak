console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

/* the # is 0
the # is 1
Assertion failed: [object Object]
the # is 2
the # is 3
Assertion failed: [object Object]
the # is 4
the # is 5
Assertion failed: [object Object]
the # is 6
the # is 7
Assertion failed: [object Object]
the # is 8
the # is 9
Assertion failed: [object Object]
the # is 10 */