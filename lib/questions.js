
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

module.exports = {
  initialQuestions,
  addingQuestions,
  viewingQuestions,
  updatingQuestions,
  deletingQuestions
}