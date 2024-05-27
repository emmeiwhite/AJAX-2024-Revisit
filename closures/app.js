// Closure: In a higher order function in which a function returns another function, the inner function remembers the variables stored in the outer function even after the outer() function has executed.

const setNewAccount = (accountHolder, initialBalance) => {
  console.log('I am the outer function')
  return function () {
    return `Account Holder: ${accountHolder} has initial balance: ${initialBalance}`
  }
}

const rawa = setNewAccount('rawdha', 300)
const immi = setNewAccount('emmei', 200)

console.log(rawa())
console.log(immi())

// Even if we visit after 10 years, the inner function remembers the outer function variables
