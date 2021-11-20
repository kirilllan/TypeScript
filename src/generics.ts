// better type safety. additional type info.
const names: Array<string | number> = []

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res('This is done ')
  }, 2000)
})

promise.then(data => data.split(''))