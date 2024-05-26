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

// B) call, apply, bind
