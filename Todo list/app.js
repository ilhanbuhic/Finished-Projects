// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', checkDelete)
filterOption.addEventListener('change', filterTodo)

// Functions
function addTodo(e) {
  // Prevent form from submitting
  e.preventDefault()

  // Create todo DIV
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  // Create LI
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)

  // Adding todo to localstorage
  saveLocalTodos(todoInput.value)

  // Check Button
  const completedButton = document.createElement('button')
  completedButton.classList.add('complete-btn')
  completedButton.innerHTML = '<i class = "fas fa-check"></i>'
  todoDiv.appendChild(completedButton)

  // Trash Button
  const trashButton = document.createElement('button')
  trashButton.classList.add('trash-btn')
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
  todoDiv.appendChild(trashButton)
  // Append to list
  todoList.appendChild(todoDiv)

  // Clear todo INPUT VALUE
  todoInput.value = ''
}

function checkDelete(e) {
  const item = e.target
  // Delete todo`
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement
    //Animation
    todo.classList.add('fall')
    removeLocalTodos(todo)
    todo.addEventListener('transitionend', function () {
      todo.remove()
    })
  }


  // Check todo
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
    console.log(todo.classList.value)
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex'
        break
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex'
        } else todo.style.display = 'none'
        break
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex'
        } else todo.style.display = 'none'
        break
    }
    console.log(todos.todoList)
  })
}

function saveLocalTodos(todo) {
  // Checking for already existing todos
  let todos
  // Cheking if we already have 'todos'
  if (localStorage.getItem('todos') === null) {
    // If not, create an empty array
    todos = []
  } else {
    // If we already have something inside of 'todos'
    // We will parse it back into an array
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo)
  // Pushing back to localStorage
  localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
  let todos
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todo
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const completedButton = document.createElement('button')
    completedButton.classList.add('complete-btn')
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.classList.add('trash-btn')
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)
  })
}

function removeLocalTodos(todo) {
  let todos
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  const todoIndex = todo.children[0].innerText
  todos.splice(todos.indexOf(todoIndex), 1)
  localStorage.setItem('todos', JSON.stringify(todos))
}
// localStorage.clear()