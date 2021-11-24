function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

// function WithTemplate(template: string, hookId: string) {
//   return function (originalConstructor: any) {
//     const hookElement = document.getElementById(hookId)
//     const p = new originalConstructor()
//     if (hookElement) {
//       hookElement.innerHTML = template
//       hookElement.querySelector('h1')!.textContent = p.name
//     }
//   }
// }
function WithTemplate(template: string, hookId: string) {
  // new() describes the shape of the constructor
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    //logic below executes when you define the class
    //   const hookElement = document.getElementById(hookId)
    //   const p = new originalConstructor()
    //   if (hookElement) {
    //     hookElement.innerHTML = template
    //     hookElement.querySelector('h1')!.textContent = p.name
    //   }
    // }
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()
        // new logic below executes only when you instantiate the class
        const hookElement = document.getElementById(hookId)
        if (hookElement) {
          hookElement.innerHTML = template
          hookElement.querySelector('h1')!.textContent = this.name
        }
      }
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
  console.log(target, name, position)
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


// autobind decorator
function Autobind(_: any, __: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this)
      return boundFunction
    }
  }
  return adjustedDescriptor
}
class Printer {
  message = 'this works'
  @Autobind
  showMessage() {
    console.log(this.message)
  }
}
const p = new Printer()
document.querySelector('button')!.addEventListener('click', p.showMessage)


// validation with decorators
interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[]
  }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    [propertyName]: ['required']
  }
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    [propertyName]: ['positive']
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name]
  if (!objValidatorConfig) return true
  let isValid = true
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required': isValid = isValid && !!obj[prop]; break
        case 'positive': isValid = isValid && !!obj[prop]
      }
    }
  }
  return isValid
}

class Course {
  @Required
  title: string
  @PositiveNumber
  price: number
  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}

const form = document.querySelector('form')!
form.addEventListener('submit', e => {
  e.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement
  const title = titleEl.value
  const price = +priceEl.value

  const createdCourse = new Course(title, price)
  if (!validate(createdCourse)) {
    throw new Error
  }
})