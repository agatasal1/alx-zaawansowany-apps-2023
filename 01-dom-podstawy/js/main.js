

// Obiekty wbudowane w przeglądarke

// document - interfejs HTML w JavaScripcie
// console.log(document); // obiekt, trzymajacy interakcje z HTML

// window - obiekt okna przegladarki
// console.log(window);

// * Jesli nie mamy zadnego slowa przed wbudowana funkcja, to znajduje sie ona w obiekcie window
// localStorage === window.localStorage

// Jesli zdeklarujemy zmienna bez slowa var/let/const to przypisujemy ja tak naprawde do obiektu window

// name = 'Damian';
// console.log(window.name)



// 1. Pobieranie elementow

// document.querySelector('selector')

// selector - selector CSS

// #id - id (UZYWANY NAJCZESCIEJ)
// .klasa - klasa CSS
// h1 - tag HTML
// ul li - element li wewnatrz elementu ul
// ul.klasa - ul o okreslnej klasie

{/* <ul>
  <li></li>
</ul> */}

// Zlapanie elementu

const title = document.querySelector('#title')

// Wlasciwosci zlapanego elementu

// Treść

// console.log(title.innerText); // tresc zlapanego elementu
// console.log(title.innerHTML); //zwraca HTML wewnatrz zlapanego elementu

// title.innerText = 'Nowy tekst';
// title.innerHTML = '<i> Nowy tekst </i>';

// Atrybuty

// console.log(title.id) // odczytanie atrybutu id
// title.id = 'Nowe-ID'

// const image = document.querySelector('img');

// image.src = 'https://drukowanki.pl/wp-content/uploads/2020/01/jak-narysowac-psa-kolorowanka-01.jpg';


// Klasa

// title.classList.add('nowa-klasa') // dodawanie nowych elementow
// title.classList.remove('nowa-klasa') // usuwanie nowych elementow
// title.classList.toggle('nowa-klasa') // dodawanie/usuwanie nowych elementow
// title.classList.contains('nowa-klasa') // sprawdza czy jest dana klasa i zwraca true/false


// Dodawanie/usuwanie elementow

// Dodawanie
// title.innerHTML += `
//   <div>
//     Hello World
//   </div>
// `
// Usuwanie

// title.innerHTML = ''; // czyszczenie zawartosci elementu
// title.remove() // usuniecie elementu




// Za pomoca kodu JS wykonaj następujące zadania.
// Pamietaj, aby elementom HTML dodawac ID.

// 1. W konsoli wypisz obecny tekst przycisku

// const button = document.querySelector('button');
// console.log(button.innerText)

// 2. dodaj formularzowi klase my-form

// const form = document.querySelector('form')
// form.classList.add('my-form')

// // 3. Za pomoca JS dodaj do inputow jakis tekst
// const inputName = document.querySelector('#inputName');
// inputName.setAttribute('value', "Agata")

// const inputMessage = document.querySelector('#inputMessage');

// inputMessage.setAttribute('value', 'Wiadomość')

// 4. do elementu ul dodaj element li
{/* <li>
      <strong>Ada</strong> napisala
      <p> Super dzien. Duzo sie nauczylam </p>
    </li> */}


// const ul = document.querySelector('ul');

// ul.innerHTML += `
// <li>
// <strong>Ada</strong> napisala
// <p> Super dzien. Duzo sie nauczylam </p>
// </li>
// `


// 5.  Majac tablice obiektow messages, za pomoca petli dodaj do ul kilka elementow li

// const messages = [
//     {
//         author: 'Pawel',
//         message: 'Ale dzisiaj super dzien'
//     },
//     {
//         author: "Magda",
//         message: "Zimno jest"
//     }
// ]

// messages.forEach(message => {

//     ul.innerHTML += `
// <li>
// <strong> ${message.author}</strong> napisał
// <p>${message.message}</p>
// </li>
// `
// })

///////////////////////////////////////////////////////////////////////
// Eventy

// Glowne Eventy:

// click
// submit

// Wzor eventu

// const handleTitleClick = () => {
//   console.log('h1 zostal klikniety');
// }

// title.addEventListener('click', handleTitleClick);


const messageForm = document.querySelector('#messageForm');
const nameInput = document.querySelector('#inputName');
const messageInput = document.querySelector('#inputMessage');
const list = document.querySelector('#list');
const deleteButton = document.querySelector('#deleteButton')


// event jest to wbudowany obiekt, ktory przetrzymuje informacji o wykonanym zdarzeniu
const handleSubmit = (event) => {
    // event.preventDefault() powoduje zatrzymanie domyslnej akcji przegladarki jaka jest wyslanie formularza.
    event.preventDefault();

    // 1. Pobranie wartosci z inputow
    // console.log(nameInput.value)
    // console.log(messageInput.value);

    // 2. Dodanie nowego elementu do HTML
    list.innerHTML += `
    <li>
      <strong> ${nameInput.value} </strong> napisal
      <p> ${messageInput.value} </p>
    </li>
  `

    nameInput.value = '';
    messageInput.value = '';
}

messageForm.addEventListener('submit', handleSubmit);


// Cwiczenie dla was:

// w HTML jest guzik "usun wszystkie elementy". Dodaj event, ktory po wcisnieciu guzika, usunie wszystkie elementy listy. UWAGA: po usunieciu listy, powinienem dalej moc dodawac nowe elementy


const deleteAllMessages = (event) => {
    event.preventDefault();

    list.innerHTML = ''

}


deleteButton.addEventListener('click', deleteAllMessages)

