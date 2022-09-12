const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id, officeNumber);
    if (isNaN(officeNumber)) {
      throw new Error("Id and office number must be a number value");
    }
    this.officeNumber = parseInt(officeNumber);
    this.role = "Manager";
  }
}
module.exports = Manager;
