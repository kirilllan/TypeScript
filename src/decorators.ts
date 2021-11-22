function Logger(constructor: Function) {
  console.log('from Logger')
  console.log(constructor)
}

@Logger
class Person {
  name = " "
  constructor() { }
}

const person1 = new Person()