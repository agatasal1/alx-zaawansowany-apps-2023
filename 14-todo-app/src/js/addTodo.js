import { getTasks } from './shared/tasks';


const addTodoForm = document.querySelector('#addTodoForm');

let lastTask = '';


const saveTask = (task) => {

    console.log(task)
    return fetch(`http://localhost:8000/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(task)
    })
}


const handleAddTodo = (event) => {
    event.preventDefault();

    const newTodo = {
        id: lastTask + 1,
        task: addTodoForm.elements.task.value,
        date: addTodoForm.elements.date.value
    }


    return saveTask(newTodo)

        .then(() => {
            window.location.href = '/index.html'
        })
}


getTasks().then(data => {
    lastTask = parseInt(data[data.length - 1].id)
})


addTodoForm.addEventListener('submit', handleAddTodo)