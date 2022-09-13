const helper = require("./src/helper");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let team = [];

// Create manager and proceed to either next team member or quit depending on last choice
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's id?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
    },
    {
      type: "list",
      name: "choice",
      message: "what type of team member would you like?",
      choices: helper.choices(),
    },
  ])
  .then((answers) => {
    // push manager answers into team array
    let { name, email, id, officeNumber } = answers;
    const manager = new Manager(name, email, id, officeNumber);

    team.push(helper.generateManager(manager));

    switch (answers.choice) {
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      default:
        writeToFile();
        break;
    }
  });

const writeToFile = () => {
  fs.writeFile("./dist/newIndex.html", helper.generateHtml(team), (err) =>
    err ? console.log(err) : console.log("written successfully!")
  );
};

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your engineer's id?",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is your engineer's git hub?",
      },
      {
        type: "list",
        name: "choice",
        message: "what type of team member would you like?",
        choices: helper.choices(),
      },
    ])
    .then((answers) => {
      let { name, email, id, gitHub } = answers;
      const engineer = new Engineer(name, email, id, gitHub);
      team.push(helper.generateEngineer(engineer));
      switch (answers.choice) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          writeToFile();
          break;
      }
    });
}
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your intern's id?",
      },
      {
        type: "input",
        name: "school",
        message: "What is your intern's school name?",
      },
      {
        type: "list",
        name: "choice",
        message: "what type of team member would you like?",
        choices: helper.choices(),
      },
    ])
    .then((answers) => {
      let { name, email, id, school } = answers;
      const intern = new Intern(name, email, id, school);
      team.push(helper.generateIntern(intern));
      switch (answers.choice) {
        case "Engineer":
          createEngineer();
          break;
        case "Employee":
          createEmployee();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          writeToFile();
          break;
      }
    });
}
