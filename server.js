const inquirer = require("inquirer");
// const db = require("./config/connection.js");

// menu questions 
const menu = [
  {
    type: "list",
    message: "What's the next move?",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"],
    name: "menu"
  }
]

// add department questions 
const addDep = [
  {
    type: "input",
    message: "What's the name for this department?",
    name: "newDep"
  }
]

// add role questions
const addRole = [
  {
    type: "input",
    message: "What's the name for this role?",
    name: "newRole"
  },
  {
    type: "input",
    message: "What is the salary of this role?",
    name: "newRoleSalary"
  },
  {
    type: "choice",
    message: "What department does this role belong to?",

    name: "newRoleDep"
  }
]

// add employee questions 
const addEmp = [
  {
    type: "input"
  }
]

async function init() {
  let appRunning = true;
  let userMenuPick = await inquirer.prompt(menu).then(data => {
    // console.log(data.menu)
    return data.menu
  });

  // if the app is still running 
  while (appRunning) {
    switch (userMenuPick) {
      case "View all departments":
        console.log("view all departments")
        appRunning = false
        break;
      case "View all roles":
        console.log('View all roles')
        appRunning = false
        break;
      case "View all employees":
        console.log("View all employees")
        appRunning = false
        break;
      case "Exit":
        console.log('exit')
        appRunning = false
    }
  }
}

init()