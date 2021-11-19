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