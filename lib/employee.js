class Employee {
  constructor(name, email, id) {
    // const err = () => {
    //   throw new Error("Id and office number must be number values");
    // };
    // if (isNaN(id)) {
    //   err();
    // }
    this.name = name;
    this.email = email;

    this.id = parseInt(id);
    this.role = "Employee";
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Employee;
console.log(new Employee("mike", "@", "m"));
