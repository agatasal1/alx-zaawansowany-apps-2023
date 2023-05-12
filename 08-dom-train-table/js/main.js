
//   Napisz wyszukiwarke połączeń pkp. Kazde polaczenie niech zawiera nastepujace pola:

//   - from (Warszawa)
//   - to (Lublin)
//   - time (16:30)
//   - date (23.04.2023)
//   - name (Sniezka)

//   1. Stworz HTML i CSS do zadania
//   2. Na gorze strony miej wyszukiwarke polaczen, ktora da mozliwosc wyszukiwania polaczen po nazwie
//   3. Pod ta wyszukiwarka, dodaj formularz zawierajacy 5 pol, za pomoca ktorego bedziesz mogl dodawac nowe polaczenia
//   4. Skorzystaj z localStorage, aby przetrzymywac dodane polaczenia

//   5*. Dodaj pod wyszukiwarka pole select, gdzie bedziesz mogl wybrac liste miast. Jesli wybierzesz dane miasto, pokazuj polaczenia z lub do danego miasta
//   6*. Pod selectem dodaj inny select, za pomoca ktorego bedziesz mogl sortowac polaczenia po dacie


const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const trainTimetableTableBody = document.querySelector('#trainTimetableTableBody');
const addRailwayConnectionForm = document.querySelector('#addRailwayConnectionForm');
const trainFromInput = document.querySelector('#trainFrom');
const trainToInput = document.querySelector('#trainTo');
const timeInput = document.querySelector('#time');
const dateInput = document.querySelector('#date');
const trainNameInput = document.querySelector('#trainName');
const townSortSelect = document.querySelector('#townSortSelect')
const dateSortSelect = document.querySelector('#dateSortSelect');
// let trainsTable = [
//     {
//         from: 'Warszawa',
//         to: 'Lublin',
//         time: '16:30',
//         date: '23.04.2023',
//         name: 'Śnieżka'
//     },
//     {
//         from: 'Łódź',
//         to: 'Kołobrzeg',
//         time: '16:30',
//         date: '29.05.2023',
//         name: 'Pobrzeże'
//     },
// ]


let trainsTable = JSON.parse(localStorage.getItem('trains') ?? []);

const renderTrainsTable = (trainsToRender) => {
    trainTimetableTableBody.innerHTML = '';

    trainsToRender.forEach(train => {
        trainTimetableTableBody.innerHTML += `
        <tr>
            <td>${train.from}</td>
            <td>${train.to}</td>
            <td>${train.time}</td>
            <td>${train.date}</td>
            <td>${train.name}</td>
        </tr>
        `
    })
}



//   2. Na gorze strony miej wyszukiwarke polaczen, ktora da mozliwosc wyszukiwania polaczen po nazwie

const findTrainByConnectionName = (collection, phrase) => {
    return collection.filter(item => {
        return item.name.toLowerCase().includes(phrase.toLowerCase())
    })
}


const handleSearch = (event) => {
    event.preventDefault()

    const phrase = searchInput.value
    const filteredTable = findTrainByConnectionName(trainsTable, phrase)
    renderTrainsTable(filteredTable)
    searchInput.value = ''
}

//   3. Pod ta wyszukiwarka, dodaj formularz zawierajacy 5 pol, za pomoca ktorego bedziesz mogl dodawac nowe polaczenia

const handleAddConnection = (event) => {
    event.preventDefault();

    const newTrain = {
        from: trainFromInput.value,
        to: trainToInput.value,
        time: timeInput.value,
        date: dateInput.value,
        name: trainNameInput.value
    }

    const newTrainsTable = [...trainsTable, newTrain];

    trainsTable = newTrainsTable;
    localStorage.setItem('trains', JSON.stringify(newTrainsTable));

    trainFromInput.value = '';
    trainToInput.value = '';
    timeInput.value = '';
    dateInput.value = '';
    trainNameInput.value = '';

    renderTrainsTable(newTrainsTable)
    handleTownsSeletion(newTrainsTable)
    handleDateSelection(newTrainsTable)
}

//   5*. Dodaj pod wyszukiwarka pole select, gdzie bedziesz mogl wybrac liste miast. Jesli wybierzesz dane miasto, pokazuj polaczenia z lub do danego miasta

////////////////////wyświetlanie listy miast
const handleTownsSeletion = (collection) => {

    const towns = [];
    const townsWithUpperCase = [];

    collection.forEach(item => {
        if (!townsWithUpperCase.includes(item.to.toUpperCase())) {
            towns.push(item.to)
            townsWithUpperCase.push(item.to.toUpperCase())
        }
    }
    )

    collection.forEach(item => {
        if (!townsWithUpperCase.includes(item.from.toUpperCase())) {
            towns.push(item.from)
            townsWithUpperCase.push(item.from.toUpperCase())
        }
    }
    )

    towns.sort((a, b) => {
        if (b.toLowerCase() < a.toLowerCase()) {
            return 1;
        } else if (b.toLowerCase() > a.toLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    })
    townSortSelect.innerHTML = ''
    towns.forEach(town => {
        townSortSelect.innerHTML += `
<option value="${town}">${town}</option>`
    })
}


const filterTrainsByTown = (collection, option) => {
    const filteredTrains = []

    collection.filter(item => {
        if (item.to.toLowerCase() === option.toLowerCase()) {
            filteredTrains.push(item)
        }
        if (item.from.toLowerCase() === option.toLowerCase()) {
            filteredTrains.push(item)
        }
        return filteredTrains
    })
    renderTrainsTable(filteredTrains)
}

const handleSortByTown = (event) => {
    const selectedOption = event.target.value
    filterTrainsByTown(trainsTable, selectedOption)
}

//   6*. Pod selectem dodaj inny select, za pomoca ktorego bedziesz mogl sortowac polaczenia po dacie

///////////wyświetlenie listy z datami

const handleDateSelection = (collection) => {
    const dates = [];
    dateSortSelect.innerHTML = ''
    collection.forEach(item => {
        if (!dates.includes(item.date)) {
            dates.push(item.date)
        }
    }
    )
    dates.forEach(date => {
        dateSortSelect.innerHTML += `
    <option value="${date}">${date}</option>`
    })
}

////////////////sortowanie

const filterTrainsByDates = (collection, option) => {
    return collection.filter(item => {
        return item.date === option
    })
}



const handleSortByDate = (event) => {
    const selectedOption = event.target.value;
    const filteredTrains = filterTrainsByDates(trainsTable, selectedOption)
    renderTrainsTable(filteredTrains)
}



renderTrainsTable(trainsTable)
handleTownsSeletion(trainsTable)
handleDateSelection(trainsTable)
searchForm.addEventListener('submit', handleSearch);
addRailwayConnectionForm.addEventListener('submit', handleAddConnection);
townSortSelect.addEventListener('change', handleSortByTown);
dateSortSelect.addEventListener('change', handleSortByDate)