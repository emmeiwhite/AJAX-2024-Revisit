// ES6 classes are syntactic sugar on top of prototypal inheritance

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getDetails() {
    return `Name: ${this.name} & Age: ${this.age}`
  }
}

const emmei = new Person('Emmei Rather', 32)
