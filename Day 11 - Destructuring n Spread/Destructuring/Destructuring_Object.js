const rectangle = 
{
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter) // 20 10 200 undefined


//Renaming during structuring

rectangle = 
{
  width: 20,
  height: 10,
  area: 200
}
{ width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p) // 20 10 200 undefined



// Object parameter without destructuring
const rect = 
{
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => 
{
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60


// Object parameter with destructuring

const calculateperimeter = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculateperimeter(rect)) // 60