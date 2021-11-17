class Department {
  name: string
  constructor(n: string) {
    this.name = n
  }
  describe(this: Department) {
    console.log('Department: ' + this.name)
  }
}

const accounting = new Department('Accounting')
//console.log(accounting)

//const accountingCopy = {describe: accounting.describe}
// accountingCopy.describe()//->undefined. here 'this' refers to a thing calling the method
//->after making TS change, you will get an error.
//but code below is ok
const accountingCopy2 = { name: 'this is ok now', describe: accounting.describe }
accountingCopy2.describe()
//


class Department2 {
  private employees: string[] = []
  constructor(public name: string) {
  }
  describe(this: Department) {
    console.log('Department: ' + this.name)
  }
  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting2 = new Department2('Accounting')
accounting2.addEmployee('emp 1')
accounting2.addEmployee('emp 2')
accounting.describe()