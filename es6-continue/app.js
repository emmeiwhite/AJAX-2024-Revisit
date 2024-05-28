// 1. Array.of(): Add values to be put into an array
const generalArr = Array.of('emmei', 32, 'software engineer')

// 2. Array.from() : turns array-like/ish into the array - string, nodelist, Set
//    b) returns Array Object from any object with a length property or an iterable --- For example arguments of function

const udemy = 'udemy'
console.log(Array.from(udemy))

// example-2:

function countTotal() {
  // Every method has a this keyword, arguments object and variable environment
  console.log(arguments)

  Array.from(arguments).forEach(num => console.log(num))
}

countTotal(45, 67, 98)

const person = {
  34: 'India',
  78: 'is the best',
  length: 2
}

console.log(Array.from(person))

/** find(), findIndex(), every(), some() */
