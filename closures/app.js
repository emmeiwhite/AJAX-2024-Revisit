// Closure: In a higher order function in which a function returns another function, the inner function remembers the variables stored in the outer function even after the outer() function has executed.

const setNewAccount = (accountHolder, initialBalance) => {
  return function () {
    return `Account Holder: ${accountHolder} has initial balance: ${initialBalance}`
  }
}

const rawa = setNewAccount('rawdha', 300)
const immi = setNewAccount('emmei', 200)

// console.log(rawa())
// console.log(immi())

// Even if we visit after 10 years, the inner function remembers the outer function variables
/** Today, I learned a new thing that we can also return a method with the inner method as the property */

const newHire = (candidate, designation) => {
  console.log(candidate, designation)

  function getNewCandidate() {
    return `Candidate is ${candidate} & Designation is ${designation}`
  }

  // Instead of returning the inner function, let's return an object with that method as property
  return {
    getNewCandidate
  }
}

const rafs = newHire('Rafia', 'Junior BE')
const roufi = newHire('Mr. Rouf', 'QA Engineer')

// This is still a closure
console.log(rafs.getNewCandidate())
console.log(roufi.getNewCandidate())
