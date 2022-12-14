const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, email, id, school) {
    super(name, email, id, school);

    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
