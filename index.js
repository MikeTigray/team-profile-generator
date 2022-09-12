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
    team.push(helper.generateManager(answers));
    console.log(team);
    switch (answers.choice) {
      case "Engineer":
        createEngineer();
        break;
      case "Employee":
        createEmployee();
      case "Intern":
        createIntern();
      default:
        writeToFile();
        break;
    }

    // fs.writeFile("newIndex.html", helper.generateManager(manager), (err) =>
    //   err ? console.log(err) : console.log("written successfully!")
    // );
  });

//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is the team manager's name?",
//     },
//   ]);
// function createEngineer() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is your engineer's name?",
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "What is your engineer's id?",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is your engineer's email?",
//       },
//       {
//         type: "input",
//         name: "gitHub",
//         message: "What is your engineer's git hub?",
//       },
//       {
//         type: "list",
//         name: "choice",
//         message: "what type of team member would you like?",
//         choices: helper.choices(),
//       },
//     ])
//     .then((answers) => {
//       team.push(helper.generateEngineer(answers));
//       switch (answers.choice) {
//         case "Engineer":
//           createEngineer();
//           break;
//         case "Employee":
//           createEmployee();
//         case "Intern":
//           createIntern();
//         default:
//           writeToFile();
//           break;
//       }
//     });
// }
// function writeToFile(team) {
//   fs.writeFile("newIndex.html", helper.generateHtml(team), (err) =>
//     err ? console.log(err) : console.log("written successfully!")
//   );
// }
