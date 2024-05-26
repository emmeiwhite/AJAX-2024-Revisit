// Prototypal Inheritance

/**
 * Each constructor has a prototype property where we put common methods.
 * Each object created with that Constructor has access to the properties & methods added to the prototype property. prototype property returns an object
 */

function Account(accountHolderName, currentBalance) {
  this.accountHolderName = accountHolderName
  this.currentBalance = currentBalance
}

// prototype property shared across all the instances of the construction/class
Account.prototype.deposit = function (amount) {
  this.currentBalance = this.currentBalance + Number(amount)
}

const rawa = new Account('rawa', 90)
const emmei = new Account('emmei', 40)

emmei.deposit(34)
rawa.deposit(23)

// one prototype to be used by all the instances, which is really fantastic in JS, we are not creating unnecessary copies in each constructor for the deposit function
