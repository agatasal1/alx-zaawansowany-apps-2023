// const catFactsList = document.querySelector('#catFactsList')
// // fetch
// // Domyslna akcja w fetch jest GET
// // fetch zwraca Promise

// const renderCats = (data) => {
//     data.forEach(cat => {
//         catFactsList.innerHTML += `
//       <li> ${cat.text} </li>
//     `
//     })
// }

// const loadCats = () => {
//     return fetch('https://cat-fact.herokuapp.com/facts')
//         .then((response) => {
//             return response.json()
//         })
// }

// // tzw. laczenie Promisow
// // po wywolaniu loadCats(), Promise i .then jest kontynuowane
// loadCats().then(data => {
//     renderCats(data)
// })


// Stworz aplikacje, ktore bedzie renderowala ksiazke z podanego endpointa
// https://openlibrary.org/works/OL45804W.json

// Na stronie zawrzyj: tytul i opis


const bookContainer = document.querySelector('#bookContainer');

const renderBook = (data) => {
    bookContainer.innerHTML += `
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    `
}

const loadBook = () => {
    return fetch('https://openlibrary.org/works/OL45804W.json')
        .then((response) => {
            return response.json()
        })
}

loadBook().then(data => {
    renderBook(data)
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
