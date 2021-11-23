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


// more different decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log(target, propertyName)//target is Class, propertyName is 'title' in this case
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(target, name, descriptor)
  // target is prototype with constructor, setter and method, name is 'price' in this case, descriptor is PropertyDescriptor where get is undefined, set is a function and configurable === true and enumerable === false
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log(target, name, descriptor)
  // target is prototype, name is getPriceWithTax, descriptor is PropertyDescriptor with value prop being the function, configurable === true, enumerable === false, writable === true
}

function Log4(target: any, name: string | Symbol, position: number) {
  //name is getPriceWithTax position is arguments position, 0
}

class Product {
  @Log
  title: string
  private _price: number
  @Log2
  set price(val: number) {
    if (val > 0) this._price = val
  }
  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }
  @Log3
  getPriceWithTax(@Log4 tax: number): number {
    return this._price * (1 + tax)
  }
}