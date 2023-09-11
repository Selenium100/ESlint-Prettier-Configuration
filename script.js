class employee {
  constructor(name, emplid, dept, salary) {
    this.name = name;
    this.emplid = emplid;
    this.dept = dept;
    this.salary = salary;
  }

  displayDetails() {
    return `Name: ${this.name} \nEmp ID :${this.emplid}\nDept:${this.dept}`;
  }
  giveMoreSalary(more) {
    return this.salary + more;
  }
}

let e1 = new employee();

// eslint-disable-next-line no-undef
console.log(e1.displayDetails());
