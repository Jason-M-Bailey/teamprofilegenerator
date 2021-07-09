// add all your global variables
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// create empty array for new employees to be pushed into
const employees = [];

// run functions
function initializeApp() {
  startHtml();
  addMember();
}

// inquirer prompts to collect info about new member
// CHANGE FLOW TO THE README INSTRUCTIONS
// fix naming conventions to uppercase first letter of name
function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select the team member's role:",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
      {
        message: "What is your team member's name:",
        name: "name",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Names must have one character or more.";
        },
      },
      {
        message: "Enter your team member's id:",
        name: "id",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return "IDs must be a number greater than zero.";
        },
      },
      {
        message: "Enter your team member's email address:",
        name: "email",
        // https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm
        validate: (answer) => {
          // Regex mail check (return true if valid mail)
          const pass = answer.match(
            // /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/

            /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
          );
          if (pass) {
            return true;
          }
          return "Enter a valid email";
        },
      },
    ])

    // if else to determine employee's role and question unique to them
    .then(function ({ name, role, id, email }) {
      let questions = [
        {
          type: "list",
          message: "Would you like to add more team members?",
          choices: ["yes", "no"],
          name: "moreMembers",
        },
      ];
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub username:"; // github = "github username" - only ask if engineer
        questions.unshift({
          message: `Enter team member's ${roleInfo}`,
          name: "roleInfo",
          validate: (answer) => {
            const pass = answer.match(/[0-9a-zA-Z]{4,}/);
            if (pass) {
              return true;
            }
            return "Github usernames must have 4 characters or more.";
            // https://github.com/moby/moby/issues/8399 - resource states minimum name is 4 characters
          },
        });
      } else if (role === "Intern") {
        roleInfo = "school name:";
        questions.unshift({
          message: `Enter team member's ${roleInfo}`,
          name: "roleInfo",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "School names must have one character or more.";
          },
        });
      } else {
        // manager question as final option
        roleInfo = "office number:";

        questions.unshift({
          message: `Enter team member's ${roleInfo}`,
          name: "roleInfo",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Office number must be a number greater than zero.";
          },
        });
      }

      inquirer.prompt(questions).then(function ({ roleInfo, moreMembers }) {
        let newMember;
        if (role === "Engineer") {
          newMember = new Engineer(name, id, email, roleInfo);
        } else if (role === "Intern") {
          newMember = new Intern(name, id, email, roleInfo);
        } else {
          newMember = new Manager(name, id, email, roleInfo);
        }

        // add new employee info to array
        employees.push(newMember);

        addHtml(newMember).then(function () {
          if (moreMembers === "yes") {
            addMember();
          } else {
            finishHtml();
          }
        });
      });
    });
}

function startHtml() {
  const html = `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile</title>
      </head>
      <body>
      <nav class="navbar navbar-dark bg-dark mb-5">
      <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
      </nav> 
      <div class="container">
      <div class="row">`;
  fs.writeFile("./output/team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Start building your team with the Manager role first:");
}

function addHtml(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    // const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let data = "";
    if (role === "Engineer") {
      const gitHub = member.getGithub();
      data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></li>
            </ul>
            </div>
        </div>`;
    } else if (role === "Intern") {
      const school = member.getSchool();
      data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
    } else {
      const officePhone = member.getOfficeNumber();
      data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`;
    }
    console.log("adding team member");
    fs.appendFile("./output/team.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function finishHtml() {
  const html = ` </div>
    </div>
    
</body>
</html>`;

  fs.appendFile("./output/team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("end");
}

initializeApp();
