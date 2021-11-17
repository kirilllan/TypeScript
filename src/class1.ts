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