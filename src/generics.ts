// better type safety. additional type info.
const names: Array<string | number> = []

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res('')
  }, 2000)
})

promise.then(data => data.split(''))


//
//const mergedObj = merge({name: 'na1'}, {age: 0}) as {name:string, age: number}
function merge<T extends object, U extends object>(objA: T, objB: U) { // TS knows return is of type T & U
  return Object.assign(objA, objB)
}
const mergedObj = merge({ name: 'na1' }, { age: 0 })


//
interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no length'
  if (element.length > 0) descriptionText = 'Got length: ' + element.length
  return [element, descriptionText]
}


// "ensuring correct object structure
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}
//extractAndConvert({ hairs: 'y' }, 'hairs')


// generic classes
// to give you combination of full flexibility and type safety
class DataStorage<T> {
  private data: T[] = []
  addItem(item: T) { this.data.push(item) }
  removeItem(item: T) { this.data.splice(this.data.indexOf(item), 1) }
  getItems() { return this.data }
}

const textStorage = new DataStorage<string>()
const numberStorage = new DataStorage<number>()
// const objStorage = new DataStorage<object>() logic error


// generic utility types
interface Goal {
  title: string
  completeUntil: Date
}

function createCourseGoal(title: string, date: Date): Goal {
  //return {title: title, completeUntil: date}
  let goal: Partial<Goal> = {} // this is and obj that in the end will be Goal
  goal.title = title
  goal.completeUntil = date
  return goal as Goal
}

const someNames: Readonly<string[]> = [" ", "  "]
//someNames.push("   ") can't