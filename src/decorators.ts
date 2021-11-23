function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookElement = document.getElementById(hookId)
    const p = new constructor()
    if (hookElement) {
      hookElement.innerHTML = template
      hookElement.querySelector('h1')!.textContent = p.name
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


// property decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log(target, propertyName)//target is Class, propertyName is 'title' in this case
}

class Product {
  @Log
  title: string
  private _price: number
  set price(val: number) {
    if (val > 0) this._price = val
  }
  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }
  getPriceWithTax(tax: number): number {
    return this._price * (1 + tax)
  }
}