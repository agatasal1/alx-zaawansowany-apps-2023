// Napisz aplikacje TO-DO list, która będzie korzystała z bibliotek parcel i json-server. Cwiczenia:
// 1. Napisz strone glowna, ktora bedzie wyswietlania zadania TODO z bazy
// 2. Napisz strone danego zadania detail.html
// 3. Napisz strone /add-todo, ktora bedzie odpowiedzialna za dodawanie zadania do bazy i przekierowywania na strone glowna
// 4. Napisz strone /edit-todo, ktora bedzie odpowiedzialna za edycje zadania i przekierowania na strone glowna



// 5*. Zrob obsluge usuwania todo. Na liscie TODO daj przycisk X, ktorego zadaniem bedzie usuniecie zadania z bazy.

import { getTasks } from './shared/tasks';


const tasksList = document.querySelector('#tasksList');
const addTodoButton = document.querySelector('#addTodoButton');

const state = {
    tasks: []
}


const renderTasksList = data => {
    tasksList.innerHTML = ''
    data.forEach(task => {
        tasksList.innerHTML += `
    <li> ${task.task} 
    <a href='/detail.html?id=${task.id}'>Szczegóły</a>
    <a href='/edit.html?id=${task.id}'>Edytuj</a>
    <button data-id='${task.id}'>X</button>
    </li>
    `
    })
}


getTasks().then(data => {
    state.tasks = data;
    renderTasksList(data)
})



const handleAddTodo = (event) => {
    event.preventDefault();

    window.location.href = '/addTodo.html'
}


////////////////////////////////////////usuwanie

const deleteTask = (id, task) => {
    return fetch(`http://localhost:8000/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(task)
    })

}

const handleDeleteTask = (event) => {
    const taskId = event.target.dataset.id;
    let filteredTasks = []
    let taskToDelete = []
    if (taskId) {
        console.log(taskId)
        filteredTasks = state.tasks.filter(task => task.id !== parseInt(taskId))
        console.log(filteredTasks);
        taskToDelete = state.tasks.filter(task => task.id === parseInt(taskId))
        console.log(taskToDelete)
    }

    state.tasks = filteredTasks;
    renderTasksList(state.tasks)
    deleteTask(taskId, taskToDelete)
}

addTodoButton.addEventListener('click', handleAddTodo)
tasksList.addEventListener('click', handleDeleteTask)