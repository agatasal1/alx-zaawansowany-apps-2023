// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli

// const addProductForm = document.querySelector('#addProductForm');
// const idInput = document.querySelector('#id');
// const nameInput = document.querySelector('#name');
// const priceInput = document.querySelector('#price')
// const table = document.querySelector('table')
// const deleteButton = document.querySelector('#delete')


// ////////////usuwanie:

// ////////table.remove() - usuwanie elementu wraz ze znacznikiem
// ////////table.innerHTML='' - usuwanie wnętrza elementu





// const handleAddProduct = (event) => {
//     event.preventDefault();

//     table.innerHTML += `
// <tr>
// <td id="id">${idInput.value}</td>
// <td id="name">${nameInput.value}</td>
// <td id="price">${priceInput.value}</td>
// </tr>
// `

//     idInput.value = '';
//     nameInput.value = '';
//     priceInput.value = '';
// }


// const handleDeleteAll = (event) => {
//     event.preventDefault();

//     table.innerHTML = ''


// }



// addProductForm.addEventListener('submit', handleAddProduct);
// deleteButton.addEventListener('click', handleDeleteAll)



// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli
// 4*. Napisz walidacje formularza spelniajaca dane kryteria
// - Pole price musi byc wieksze od 0
// - Pole name musi miec wiecej niz 2 znaki
// - Pole ID musi byc unikalne (nie moze sie powtarzac)



// document - DOM, reprezentacja HTML w JS
// window - okno przegladrki

const table = document.querySelector('#orderTable')
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name')
const orderPrice = document.querySelector('#price')

// Usuwanie:

// table.remove() - usuwanie elementu wraz z znacznikiem
// table.innerHTML = "" - usuwanie wnetrza z elementu

// Dodawanie elementu do HTML:


// function handleSubmit() {
//   console.log('hej!');
// }

const isUniqueId = () => {
    const idRows = table.querySelectorAll('tr td');
    let isUnique = true;

    idRows.forEach(idRow => {
        if (idRow.innerText === orderId.value) {
            isUnique = false
        }
    })

    return isUnique;
}

const handleSubmit = (event) => {
    // preventDefalt() jest to metoda, sluzaca do zatrzymania domyslnego eventu przegladarki
    event.preventDefault();

    if (orderPrice.value <= 0) {
        alert('Cena musi być większa niż 0.')
        return
    }

    if (orderName.value.length <= 2) {
        alert('Nazwa musi mieć więcej niż dwa znaki.')
        return
    }

    if (!isUniqueId()) {
        alert('Pole id nie może się powtarzać.')
        return
    }



    table.innerHTML += `
    <tr>
      <td>${orderId.value}</td>
      <td>${orderName.value}</td>
      <td>${orderPrice.value}zł</td>
    </tr>
  `

    orderId.value = "";
    orderName.value = "";
    orderPrice.value = "";
}

orderForm.addEventListener("submit", handleSubmit);