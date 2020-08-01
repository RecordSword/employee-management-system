
const initialQuestions = [{
  message: "Welcome to RecordSword Company!",
  type: "list",
  name: "selection",
  choices: [
    "Add",
    "View",
    "Update",
    "Delete",
    "Exit"
  ]
}]

const addingQuestions = [{
  message: "What would you like to create?",
  type: "list",
  name: "addSelection",
  choices: [
    "Add Employee",
    "Add Department",
    "Add Role",
    "Exit"
  ]
}]

const viewingQuestions = [{
  message: "What would you like to view?",
  type: "list",
  name: "viewSelection",
  choices: [
    "View Employee",
    "View Department",
    "View Role",
    "Exit"
  ]
}]

const updatingQuestions = [{
  message: "What would you like to update?",
  type: "list",
  name: "updateSelection",
  choices: [
    "Update Employee",
    "Update Department",
    "Update Role",
    "Exit"
  ]
}]

const deletingQuestions = [{
  message: "What would you like to delete?",
  type: "list",
  name: "deleteSelection",
  choices: [
    "Delete Employee",
    "Delete Department",
    "Delete Role",
    "Exit"
  ],
}]

const addEmployee = [{
  type: "input",
  name: "firstName",
  message: "What is the employees first name?"
}, {
  type: "input",
  name: "lastName",
  message: "What is the employees last name?"
}, {
  type: "number",
  name: "roleId",
  message: "What is the employees role ID"
}, {
  type: "number",
  name: "managerId",
  message: "What is the employees manager's ID?"
}];

const addDepartment = [{
  type: "input",
  name: "department",
  message: "What is Department would you like to add?"
}]

const addRole = [{
  type: "input",
  message: "What is the title of the new role?"
}, {
  name: "salary",
  type: "input",
  message: "What is the salary of the new role?",
}, {
  name: "departmentName",
  type: "list",
  message: "Which department does this role fall under?",
  choices: function () {
    var choicesArray = [];
    res.forEach(res => {
      choicesArray.push(
        res.name
      );
    })
  }
}
]

const updateEmployeeRole = [{
  message: "which employee would you like to update? (use first name only for now)",
  type: "input",
  name: "name"
}, {
  message: "enter the new role ID:",
  type: "number",
  name: "role_id"
}]

module.exports = {
  initialQuestions,
  addingQuestions,
  viewingQuestions,
  updatingQuestions,
  deletingQuestions,
  addEmployee,
  addDepartment,
  addRole,
  updateEmployeeRole

}