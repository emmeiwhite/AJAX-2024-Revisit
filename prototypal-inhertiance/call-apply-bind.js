// A) this keyword: 'this' keyword, when used in a method points to the same object where the method is declared. Which means when the method is called, whatever is to the left of the method() during function call, is where the this keyword will point towards!

/** EXAMPLES! */

console.log(this) // this points to window because it is same as window.this

function a() {
  console.log(this) // window
}

function b() {
  'use strict'
  console.log(this) // undefined
}

const obj = {
  name: 'roufi',
  sing() {
    return `lalalalla ... ${this.name}`
  },
  singAgain() {
    this.sing() + '!!!!' // here this helps us to call the other method of the object
  }
}

obj.sing()
/* --- what is to the left of the dot operator? obj. so this within the function points to the obj --- */

/** BENEFITS OF this:
 * 1) gives methods access to their object
 * 2) execute same code for multiple objects
 */

function importantPerson() {
  console.log(this)
  console.log(this.name)
}

// let's try to reuse the importantPerson function in two objects

const john = {
  name: 'john',
  getDetails: importantPerson
}

const bucky = {
  name: 'bucky',
  getDetails: importantPerson
}

var name = 'Sunny'
importantPerson() // this keyword inside the function will point to the name variable in that case, because name is on window

// Lexical Scope doesn't work in the case of this keyword
// this is dynamically scoped and depends on who calls it

/** --- Let's see an Example --- */

const imran = {
  name: 'Imran Rafiq Rather',
  getDetails() {
    console.log(this.name)

    const func2 = function () {
      console.log('b', this) // here this point again to the window
    }
    func2() // to the left of func2() is nothing which means window, we can use arrow function to resolve this
  }
}

imran.getDetails()

const rawdha = {
  name: 'Rawdha Bejaoui',
  getDetails() {
    console.log(this.name)

    const func2 = () => {
      console.log('b', this) // here this point again to the window
    }

    func2() // to the left of func2() is nothing which means window, we can use arrow function to resolve this

    function func3() {
      console.log('c', this)
    }
    //   Before arrow functions we used bind() but it has to be returned because bind() is not invoked immediately
    return func3.bind(this)
  }
}

imran.getDetails()

rawdha.getDetails()
rawdha.getDetails()

// let's learn call: We'll set a new scope to this keyword used in a normal function

function greet() {
  return `Greetings 🚀 ${this.friend}`
}

const greetRauf = greet.call({ friend: 'Rauf', age: 33 })

const rawa = {
  friend: 'Rawdha',
  age: 25
}
const greetRawa = greet.call(rawa)

// Now, we can even use a method inside an object to be used by other objects, which is call method borrowing

const wizard = {
  name: 'Gandalf',
  health: 70,

  getHealing() {
    return (this.health = 100)
  }
}

// Now archer doesn't  have a healing power
const archer = {
  name: 'Robin Hood',
  health: 30
}

wizard.getHealing.call(archer)

// Let me do few more examples of call()

function bookDetails() {
  let bookName = this.bookName
  let bookPrice = this.price

  return `Book Name: ${bookName} & Book Price: ${bookPrice}`
}

const bookOfLife = {
  bookName: 'The Reality of Life',
  price: 345
}

console.log(bookDetails.call(bookOfLife))

// apply and bind examples

// apply also works like call, the only difference is that second argument is an array

const phone = {
  name: 'one plus',
  price: 23000,

  increasePrice(price) {
    return (this.price = price)
  }
}

const iphone = {
  name: 'iPhone14',
  price: 0
}

phone.increasePrice.call(iphone, 88000)

// The function is not actually added to the iphone, it simple calls it and assigns the context of this
// console.log(iphone)

// bind()
// assign, call later

function celebrate() {
  return `We are celebrating the auspicious ${this.occasion} & ${this.food}`
}

// Muslim festival
const eid = {
  occasion: 'Eid',
  food: 'veg & halal non-veg'
}

// Hindus festival
const holy = {
  occasion: 'Holy',
  food: 'veg only and fresh fruits'
}

// Hindus festival
const sikhs = {
  occasion: 'Vaisakhi (Baisakhi)',
  food: 'lassi, poori, langar'
}

const muslimsCelebrate = celebrate.bind(eid)
const hindusCelebrate = celebrate.bind(holy)
const sikhsCelebrate = celebrate.bind(sikhs)
