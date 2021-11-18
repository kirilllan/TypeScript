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
  protected employees: string[] = []
  constructor(public readonly name: string) {
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

class ITDepartment extends Department2 {
  private lastReport: string
  get mostRecentReport() {
    if (this.lastReport) return this.lastReport
    else return 'No reports available'
  }
  set mostRecentReport(value: string) {
    this.lastReport = value
  }
  constructor(public admins: string[], reports: string[]) {
    super('IT')//calls parent classes constructor
    this.lastReport = reports[0]
  }
  addAdmin(employee: string) {
    this.employees.push(employee + '-admin')
  }
}

const accounting2 = new Department2('Accounting')
accounting2.addEmployee('emp 1')
accounting2.addEmployee('emp 2')
accounting.describe()

const ITDepartment1 = new ITDepartment(['Jo'], [])