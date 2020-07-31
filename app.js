const mysql = require("mysql");
const inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bootcamp2020",
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start() {
  inquirer.prompt({
    message: "Welcome to RecordSword Company!",
    type: "list",
    name: "selection",
    choices: [
      "Add",
      "View",
      "Update",
      "Delete",
      "Exit"
    ],
  })
    .then(function (answer) {
      console.log(`You are going to ${result.selection}`);

      switch (result.selection) {
        case "Add":
          addType();
          break;

        case "View":
          viewType();
          break;

        case "Update":
          updateType();
          break;

        case "Delete":
          deleteType();
          break;

        default:
          exit();
      }
    });
}

addType()
{
  inquirer.prompt({
    message: "What would you like to create?",
    type: "list",
    name: "addSelection",
    choices: [
      "Add Employee",
      "Add Department",
      "Add Role",
      "Exit"
    ],
  }).then(function (answer) {
    switch (result.addSelection) {
      case "Add Employee":
        addEmployee();
        break;

      case "Add Department":
        addDepartment();
        break;

      case "Add Role":
        addRole();
        break;

      default:
        exit();
    }
  });
}

viewType()
{
  {
    inquirer.prompt({
      message: "What would you like to view?",
      type: "list",
      name: "viewSelection",
      choices: [
        "View Employee",
        "View Department",
        "View Role",
        "Exit"
      ],
    }).then(function (answer) {
      switch (result.viewSelection) {
        case "View Employee":
          viewEmployee();
          break;

        case "View Department":
          viewDepartment();
          break;

        case "View Role":
          viewRole();
          break;

        default:
          exit();
      }
    });
  }
}

updateType()
{
  {
    {
      inquirer.prompt({
        message: "What would you like to update?",
        type: "list",
        name: "updateSelection",
        choices: [
          "Update Employee",
          "Update Department",
          "Update Role",
          "Exit"
        ],
      }).then(function (answer) {
        switch (result.updateSelection) {
          case "Update Employee":
            updateEmployee();
            break;

          case "Update Department":
            updateDepartment();
            break;

          case "Update Role":
            updateRole();
            break;

          default:
            exit();
        }
      });
    }
  }
}

deleteType()
{
  {
    {
      inquirer.prompt({
        message: "What would you like to delete?",
        type: "list",
        name: "deleteSelection",
        choices: [
          "Delete Employee",
          "Delete Department",
          "Delete Role",
          "Exit"
        ],
      }).then(function (answer) {
        switch (result.deleteSelection) {
          case "Delete Employee":
            deleteEmployee();
            break;

          case "Delete Department":
            deleteDepartment();
            break;

          case "Delete Role":
            deleteRole();
            break;

          default:
            exit();
        }
      });
    }
  }
}


exit() {

}