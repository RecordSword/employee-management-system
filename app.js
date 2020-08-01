const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./lib/questions");

const initialQuestions = questions.initialQuestions;
const addingQuestions = questions.addingQuestions;
const viewingQuestions = questions.viewingQuestions;
const updatingQuestions = questions.updatingQuestions;
const deletingQuestions = questions.deletingQuestions;
const addEmployee = questions.addEmployee
const addDepartment = questions.addDepartment
const addRole = questions.addRole
const updateEmployeeRole = questions.updateEmployeeRole

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
  inquirer.prompt(initialQuestions)
    .then(async function (answer) {
      console.log(`You are going to ${answer.selection}`);

      switch (answer.selection) {
        case "Add":
          await addType();
          break;

        case "View":
          await viewType();
          break;

        case "Update":
          await updateType();
          break;

        case "Delete":
          await deleteType();
          break;

        default:
          await exit();
      }
    });
}

function addType() {
  inquirer.prompt(addingQuestions).then(function (answer) {
    switch (answer.addSelection) {
      case "Add Employee":
        addEmployeeQuestions();
        break;

      case "Add Department":
        addDepartmentQuestions();
        break;

      case "Add Role":
        addRoleQuestions();
        break;

      default:
        exit();
    }
  });
}

function viewType() {
  inquirer.prompt(viewingQuestions).then(function (answer) {
    switch (answer.viewSelection) {
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

function updateType() {
  inquirer.prompt(updatingQuestions).then(function (answer) {
    switch (answer.updateSelection) {
      // case "Update Employee":
      //   updateEmployee();
      //   break;

      // case "Update Department":
      //   updateDepartment();
      //   break;

      case "Update Employee Role":
        updateEmployeeRoleQuestions();
        break;

      default:
        exit();
    }
  });
}

function deleteType() {
  inquirer.prompt(deletingQuestions).then(function (answer) {
    switch (answer.deleteSelection) {
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

function addEmployeeQuestions() {
  inquirer.prompt(addEmployee).then(function(response) {
      connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          start();
      })
  })
}

function addDepartmentQuestions() {
  inquirer.prompt(addDepartment).then(function(response) {
      connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          start();
      })
  })
}

function addRoleQuestions() {
  inquirer.prompt(addRole).then(function (response) {
      connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
          console.table(data);
      })
      start();
  })

}

function viewEmployee() {
  connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    start();
  })
}

function viewDepartment() {
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    start();
  })
}
function viewRole() {
  connection.query("SELECT * FROM role", function (err, data) {
    console.table(data);
    start();
  })
}

function updateEmployeeRoleQuestions() {
  inquirer.prompt(updateEmployeeRole).then(function (answer) {
    connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
      console.table(data);
    })
    start();
  })
}

function exit() {
  connection.end();
  process.exit();
}