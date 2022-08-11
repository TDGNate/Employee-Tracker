const inquirer = require("inquirer");

const menu = [
  {
    type: "list",
    message: "What's the next move?",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
    name: "menu"
  }
]

async function init() {
  let appRunning = true;
  let userMenuPick = inquirer.prompt(menu).then(data => {
    console.log(data.menu)
    return data.menu
  });
}

init()