a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object

function letsLearnScope() 
{
  console.log(a, b)
  if (true) 
  {
    console.log(a, b)
  }
}
console.log(a, b) // accessible