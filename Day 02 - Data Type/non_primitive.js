let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false


let user1 = {
  name: 'Sahil',
  role: 'Student'
}

let user2 = {
  name: 'Sahil',
  role: 'Student'
}

console.log(userOne == userTwo) // false
// These are false because we don't compare non-primitive data-types as the are compared by refrence rather than the values

let n = nums
console.log(nums == n)  // true

let userOne = {
  name: 'Sahil',
  role: 'Student'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true