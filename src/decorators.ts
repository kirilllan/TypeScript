function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

@Logger('from decorator ')
class Person {
  name = " "
  constructor() { }
}

const person1 = new Person()