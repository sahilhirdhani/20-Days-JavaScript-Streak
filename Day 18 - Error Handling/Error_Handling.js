// try catch

try {
  let firstName = 'Sahil'
  let fullName = firstName + ' ' + lastName
} catch (err) {
  console.log(err)
}

/* output: ReferenceError: fistName is not defined
    at REPL6:3:18 */


// try catch finally

try {
  let firstName = 'Sahil'
  let fullName = firstName + ' ' + lastName
} catch (err) {
  console.error(err)
} finally {
  console.log('In any case I will be executed')
}

/* output: ReferenceError: fistName is not defined
    at REPL14:3:18 -- from console.error(err)
In any case I will be executed -- from finally */


// custom error message

try 
{
  let firstName = 'Sahil'
  let fullName = firstName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}
/* output: Name of the error ReferenceError -- err.name
Error message lastName is not defined -- err.message
In any case I will be executed -- from finally */


// throw
const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x == 5) console.log('Exact Number')
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
