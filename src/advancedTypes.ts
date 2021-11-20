// intersection types
type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Jo',
  privileges: ['administrate'],
  startDate: new Date(2001, 0, 1)
}

type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable & Numeric


// type guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString()
  return a + b
}

type UnknownEmployee = Employee | Admin

const log = console.log

function printEmployeeInformation(emp: UnknownEmployee) {
  if ('privileges' in emp) log('Privileges: ' + emp.privileges)
  if ('startDate' in emp) log('Start Date: ' + emp.startDate)
}

class Car {
  drive() { console.log('driving...') }
}

class Truck {
  drive() { console.log('driving  truck...') }
  loadCargo(amount: number) { console.log('loading cargo: ' + amount) }
}

type Vehicle = Car | Truck

const v1 = new Car(), v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) vehicle.loadCargo(21)
}

useVehicle(v1); useVehicle(v2);


// discriminated unions (helps with typeguards), understand which properties are available/not available for such object
interface Bird {
  kind: 'bird'
  flyingSpeed: number
}

interface Horse {
  kind: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  switch (animal.kind) {
    case 'bird': log('birdie')
    case 'horse': log('horsie')
  }
}


// type casting
const userInputElement = <HTMLInputElement>document.getElementById('user-input')
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement
userInputElement.value = 'qw'
const userInputElement3 = document.getElementById('user-input')
if (userInputElement3) (userInputElement3 as HTMLInputElement).value = 'qw'


// indexed properties
interface ErrorContainer {
  [prop: string]: string //unknown: prop name, prop count. known:every prop which is added must have str key & str val
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  pwd: 'too short password'
}


// function overloads
//const result = add(1, 5) as string

function add2(a: number, b: number): number
function add2(a: string, b: string): string
function add2(a: Combinable, b: Combinable) {
  return (typeof a === 'string' || typeof b === 'string') ? (a + '') + b : a + b
}
const result2 = add2('a ', 'b')
result2.split(' ') // available now since result2 is not Combinable type


// optional chaining
const fetchedUserData = {
  id: 'i1',
  name: 'name1',
  job: { title: 'jobTitle1', description: 'jobDescription1' }
}
console.log(fetchedUserData?.job?.title)
