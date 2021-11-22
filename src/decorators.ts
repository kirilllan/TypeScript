function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookElement = document.getElementById(hookId)
    if (hookElement) {
      hookElement.innerHTML = template
    }
  }
}

//@Logger('from decorator ') //logString
@WithTemplate("<h1>bub</h1>", "app")
class Person {
  name = " "
  constructor() { }
}

const person1 = new Person()