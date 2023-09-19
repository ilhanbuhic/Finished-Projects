// Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// Event Listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener('click', checkDelete)

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault()

  // Create todo DIV
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")

  // Create LI
  const newTodo = document.createElement("li")
  newTodo.innerText = todoInput.value
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo)

  // Check Button
  const completedButton = document.createElement("button")
  completedButton.classList.add("complete-btn")
  completedButton.innerHTML = '<i class = "fas fa-check"></i>'
  todoDiv.appendChild(completedButton)

  // Trash Button
  const trashButton = document.createElement("button")
  trashButton.classList.add("trash-btn")
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
  todoDiv.appendChild(trashButton)
  // Append to list
  todoList.appendChild(todoDiv)
  
  // Clear todo INPUT VALUE
  todoInput.value = '' 
}
