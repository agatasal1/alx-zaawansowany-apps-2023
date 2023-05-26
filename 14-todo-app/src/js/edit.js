import { getTask } from "./shared/tasks";
import getIdFromSearchParams from "./shared/helpers";


const changeTaskButton = document.querySelector('#changeTaskButton');
const detailTodoForm = document.querySelector('#detailTodoForm')

const taskId = getIdFromSearchParams(window.location.search)




const renderTask = (task) => {

    detailTodoForm.elements.task.value = task.task
    detailTodoForm.elements.date.value = task.date
}

getTask(taskId)
    .then(task => {
        renderTask(task)
    })



const saveTask = (task) => {
    return fetch(`http://localhost:8000/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(task)
    })

}

const handleTaskChange = (event) => {
    event.preventDefault();

    const editedTask = {
        id: taskId,
        task: detailTodoForm.elements.task.value,
        date: detailTodoForm.elements.date.value
    }

    console.log(editedTask)
    return saveTask(editedTask)
        .then(() => {
            window.location.href = '/index.html'
        })
}
changeTaskButton.addEventListener('click', handleTaskChange)