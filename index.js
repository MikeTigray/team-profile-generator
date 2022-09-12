const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const engineer = new Engineer("Mike", "@yahoo.com", 7, "@github.com");

console.log(engineer);
