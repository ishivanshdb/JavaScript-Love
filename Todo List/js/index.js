function get_todos() {
    let todos = new Array
    let todos_str = localStorage.getItem('todo')
    if (todos_str !== null) {
        todos = JSON.parse(todos_str)
    }
    return todos
}

function add() {
    let task = document.getElementById('task').value
    const todos = get_todos()
    todos.push(task)
    localStorage.setItem('todo', JSON.stringify(todos))
    show()
    return false
}

function clearDefault(a) {
    if (a.defaultValue == a.value) { a.value = "" }
}

function remove() {
    let id = this.getAttribute('id')
    const todos = get_todos()
    todos.splice(id, 1)
    localStorage.setItem('todo', JSON.stringify(todos))
    show()
    return false
}

function show() {
    const todos = get_todos()

    let html = '<ul>'
    for (let i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id=""' + i + '">Delete</button> </li>'
    }
    html += '</ul>'
    document.getElementById('todos').innerHTML = html
    const buttons = document.getElementsByClassName('remove')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove)
    }
}

document.getElementById('add').addEventListener('click', add)
show()