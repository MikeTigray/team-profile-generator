class Employee {
  constructor(name, email, id) {
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
