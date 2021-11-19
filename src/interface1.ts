interface Person {
  name: string
  age: number
  greet(phrase: string): void
}

class Person1 implements Person {
  name: string
  age = 30
  maxAge = 3000
  constructor(n: string) {
    this.name = n
  }
  greet() {
    return
  }
}

let user1: Person
user1 = { name: 'somename', age: 0, greet() { } }

let user2 = new Person1('mm')

//interface as function type
interface AddFn {
  (a: number, b: number): number
}



// optionals
interface I { name?: string }
class Optionals {
  name?: string
  constructor(n?: string) { if (n) this.name = n }
}