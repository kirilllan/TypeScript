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

function printEmployeeInformation(emp: UnknownEmployee) {

}