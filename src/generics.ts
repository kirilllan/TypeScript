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
function merge<T, U>(objA: T, objB: U) { // TS knows return is of type T & U
  return Object.assign(objA, objB)
}
const mergedObj = merge({ name: 'na1' }, { age: 0 })
