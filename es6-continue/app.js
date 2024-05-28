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
const persons = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' },
  { id: 5, name: 'Edward' }
]

const anna = persons.find(person => person.name === 'Alice')

// indexOf()
const indexOfDiana = persons.findIndex(person => person.name === 'Diana')

const removedDianaFromArray = [
  ...persons.slice(0, indexOfDiana),
  ...persons.slice(indexOfDiana + 1)
]

// We could also directly remove using filter()
const filteredPersons = persons.filter(person => person.name !== 'Diana')

/** for in loop | iterate over object properties */
const table = {
  color: 'green',
  height: 3,
  width: 2
}
for (let parameter in table) {
  //   console.log(parameter)
  // we can iterate over properties in an object
  console.log(`${parameter}: ${table[parameter]}`)
}
