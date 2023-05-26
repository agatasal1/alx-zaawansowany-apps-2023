export const getTasks = () => {
    return fetch('http://localhost:8000/tasks')
        .then(response => {
            return response.json()
        })
}


export const getTask = (id) => {
    return fetch(`http://localhost:8000/tasks/${id}`)
        .then(res => res.json())
}

