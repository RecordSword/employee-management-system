const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./lib/questions");

const initialQuestions = questions.initialQuestions;
const addingQuestions = questions.addingQuestions;
const viewingQuestions = questions.viewingQuestions;
const updatingQuestions = questions.updatingQuestions;
const deletingQuestions = questions.deletingQuestions;
const addEmployee= questions.addEmployee
const addDepartment= questions.addDepartment
const addRole= questions.addRole
const updateEmployeeRole= questions.updateEmployeeRole

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


function addRole() {  
return choicesArray;
}
  .then(function (answer) {
    const department = answer.departmentName;
    connection.query('SELECT * FROM DEPARTMENT', function (err, res) {

      if (err) throw (err);
      let filteredDept = res.filter(function (res) {
        return res.name == department;
      }
      )
      let id = filteredDept[0].id;
      let query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
      let values = [answer.title, parseInt(answer.salary), id]
      console.log(values);
      connection.query(query, values,
        function (err, res, fields) {
          console.log(`You have added this role: ${(values[0]).toUpperCase()}.`)
        })
      viewRoles()
    })
  })
}]


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
        updateEmployeeRole();
        break;

      default:
        exit();
    }
  });
}

function updateEmployeeRole() {

  .then(function (response) {
    connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
      console.table(data);
    })
    askQuestions();
  })
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

function exit() {
  connection.end();
  process.exit();
}