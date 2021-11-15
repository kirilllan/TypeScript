//Tuple, when you need exactly x amount of z,x,y types
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'somename',
  age: 1,
  hobbies: ['eat', 'walk'],
  role: [2, 'author']
}

//Enum, human-readable identifiers that have mapped values behind the scenes. Constants you can easily relate to.
enum Role { ADMIN = 10, READ_ONLY, AUTHOR };
const person2 = {
  name: 'somename',
  age: 1,
  hobbies: ['eat', 'walk'],
  role: Role.ADMIN
}

//Union type, can work with multiple input types but needs specific behavior definition and scoping
//Literal type - exact value(s) it should hold
function combine(input1: number | string | boolean, input2: number | string, resultConversion: 'as string' | 'as number') {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') result = input1 + input2;
  if (resultConversion === 'as string') return input1 + '' + input2
  return result
}
combine(1, 2, 'as string')

//Type alias
type numOrString = number | string

//Fn return types & void
function add(n1: number, n2: number): number {
  return // no error..
}
function printResult(num: number): void {
  console.log('Result: ' + num)
}
printResult(add(5, 12))

//using Fn as a type. Allow to specify which type of function we will use
let combinedValues: (a: number, b: number) => number
combinedValues = add
//callback example
function addAndCb(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}
addAndCb(10, 20, (res) => { console.log(res) })

//unknown type. more restrictive than 'any'. 
let userInput: unknown

//never type. never returns anything
function generateError(msg: string, code: number): never {
  throw { message: MessageChannel, errorCode: code }
  //while (true) {}
}
generateError('An error has occurred', 500)
