const inquirer = require("inquirer");

const menu = [
  {
    type: "list",
    message: "What's the next move?",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"],
    name: "menu"
  }
]

async function init() {
  let appRunning = true;
  let userMenuPick = await inquirer.prompt(menu).then(data => {
    console.log(data.menu)
    return data.menu
  });

  // if the app is still running 
  while (appRunning) {
    switch (userMenuPick) {
      case "View all departments":
        console.log("view all departments")
        break;
      case "View all roles":
        console.log('View all roles')
        break;
      case "View all employees":
        console.log("View all employees")
        break;
      case "Exit":
        console.log('exit')
        appRunning = false
    }
  }
}

init()