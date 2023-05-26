import { getTask } from "./shared/tasks";
import getIdFromSearchParams from "./shared/helpers";


const taskName = document.querySelector('#taskName');
const taskDate = document.querySelector('#taskDate');




const taskId = getIdFromSearchParams(window.location.search)



const renderTask = (task) => {
    console.log(task)
    taskName.innerHTML = task.task;
    taskDate.innerHTML = task.date
}

getTask(taskId)
    .then(task => {
        renderTask(task)
    })