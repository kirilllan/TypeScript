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
type Numeric = number | string
type Universal = Combinable & Numeric