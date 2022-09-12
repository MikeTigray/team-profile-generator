const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id, officeNumber);

    this.officeNumber = parseInt(officeNumber);
    this.role = "Manager";
  }
}
module.exports = Manager;
