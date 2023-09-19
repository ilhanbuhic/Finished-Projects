//Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//Event Listeners
todoButton.addEventListener("click", addTodo)

//Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault()

  // Create todo DIV
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")

  // Create LI
  const newTodo = document.createElement("li")
  newTodo.innerText = "hey"
  newTodo.classList.add("new-item")
  todoDiv.appendChild(newTodo)

  // Check Button
  const completedButton = document.createElement("button")
  completedButton.classList.add("completed-btn")
  completedButton.innerHTML = '<i class = "fas fa-check"></i>'
  todoDiv.appendChild(completedButton)

  // Trash Button
  const trashButton = document.createElement("button")
  trashButton.classList.add("trash-btn")
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
  todoDiv.appendChild(trashButton)
  // Append to list
  todoList.appendChild(todoDiv)
}
