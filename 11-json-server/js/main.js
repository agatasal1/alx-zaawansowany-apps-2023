// const trainsTimetable = document.querySelector('#trainsTimetable')
// const addTrainForm = document.querySelector('#addTrainForm')

// const state = {
//     trains: []
// }

// const renderTimetable = (data) => {
//     data.forEach((item) => {
//         trainsTimetable.innerHTML += `
//         <li>
// Pociąg ${item.name} z ${item.from} do ${item.to} odjeżdża w dniu ${item.date} o godzinie ${item.time}
// </li>
// `
//     }
//     )
// }


// const loadTimetable = () => {
//     return fetch('http://localhost:8000/trains')
//         .then(response => {
//             return response.json()
//         })
// }


// const handleSubmit = (event) => {
//     event.preventDefault();

//     const newTrainRoute = {
//         from: addTrainForm.elements.from.value,
//         to: addTrainForm.elements.to.value,
//         name: addTrainForm.elements.name.value,
//         date: addTrainForm.elements.date.value,
//         time: addTrainForm.elements.time.value
//     }

//     saveTrain = () => {
//         fetch('http://localhost:8000/trains', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newTrainRoute)
//         })
//     }

//     saveTrain(newTrainRoute)

//     state.trains.push(newTrainRoute);
//     renderTimetable(state.trains)


//     addTrainForm.reset()
// }


// // loadTimetable().then(renderTimetable)
// loadTimetable().then(data => {
//     state.trains = data;
//     renderTimetable(data);
// })
// addTrainForm.addEventListener('submit', handleSubmit)



const trainList = document.querySelector('#trainList');
const addTrainForm = document.querySelector('#addTrainForm');
const searchForm = document.querySelector('#searchForm')

const state = {
    trains: [],
    filteredTrains: []
}

const renderTrains = (trains) => {
    trainList.innerHTML = "";

    trains.forEach(train => {
        trainList.innerHTML += `
      <li>
        <p>Pociąg ${train.name} z ${train.from} do ${train.to}</p>
        <p>dnia ${train.date} o ${train.time}</p>
      </li>
    `
    })
}

const loadTrains = () => {
    return fetch('http://localhost:8000/trains')
        .then(response => {
            return response.json()
        })
}

const saveTrain = (train) => {
    fetch('http://localhost:8000/trains', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(train)
    })
}

const handleSubmit = event => {
    event.preventDefault();

    const newTrainRoute = {
        from: addTrainForm.elements.from.value,
        to: addTrainForm.elements.to.value,
        name: addTrainForm.elements.name.value,
        date: addTrainForm.elements.date.value,
        time: addTrainForm.elements.time.value,
    }

    // Dodanie polaczenia do DB
    saveTrain(newTrainRoute)

    // Dorzucenie elementu do listy
    state.trains.push(newTrainRoute);
    renderTrains(state.trains)

    // Reset formularza
    addTrainForm.reset()
}

loadTrains().then((data) => {
    state.trains = data; // Zapisanie zmiennej do stanu
    renderTrains(data);
})


const searchTrainByName = (collection, phrase) => {
    return collection.filter(item => {
        return item.name.toLowerCase().includes(phrase.toLowerCase());
    }
    )
}


const handleSearch = event => {
    event.preventDefault();
    const phrase = searchForm.elements.search.value;

    state.filteredTrains = searchTrainByName(state.trains, phrase)

    renderTrains(state.filteredTrains)
}

addTrainForm.addEventListener('submit', handleSubmit);
searchForm.addEventListener('submit', handleSearch)