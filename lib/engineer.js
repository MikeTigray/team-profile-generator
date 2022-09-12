const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, email, id, gitHub) {
    super(name, email, id);
    this.gitHub = gitHub;
    this.role = "Engineer";
  }
  getGithub() {
    return this.gitHub;
  }
}
module.exports = Engineer;
