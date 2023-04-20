// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli

const addProductForm = document.querySelector('#addProductForm');
const idInput = document.querySelector('#id');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price')
const table = document.querySelector('table')
const deleteButton = document.querySelector('#delete')


const handleAddProduct = (event) => {
    event.preventDefault();

    table.innerHTML += `
<tr>
<td id="id">${idInput.value}</td>
<td id="name">${nameInput.value}</td>
<td id="price">${priceInput.value}</td>
</tr>
`

    idInput.value = '';
    nameInput.value = '';
    priceInput.value = '';
}


const handleDeleteAll = (event) => {
    event.preventDefault();

    table.innerHTML = ''


}



addProductForm.addEventListener('submit', handleAddProduct);
deleteButton.addEventListener('click', handleDeleteAll)