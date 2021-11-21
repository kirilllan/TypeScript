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


//
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}
//extractAndConvert({ hairs: 'y' }, 'hairs')