// Programowanie funkcyjne polega na uzywaniu funkcji jako domyslnego sposobu opisywania dzialania programu.

// Zasady:

// 1. Opisywanie funkcji wedlug swojego przeznaczenia
// Dobre nazwy: handleFilterChange, handleClick, sendMessage, fetchMessages
// Zle nazwy: click, add, message, chat, x

// 2. KISS, DRY, SOLID.
// KISS - Keep it stupid simple - Pisz kod w najprostszy mozliwy sposob
// DRY - Don't repeat yourself - Nie powtarzaj tego samego kawalka kodu. Lepiej wynies to do osobnej funkcji
// SOLID - 5 patternow opisywania kodu
// S - Single Responsibility Pattern - 1 funkcja = 1 przeznaczenie

// 3. Funkcje powinny być Pure i polegać na swoich argumentach

// Przyklad funkcji unpure
let authorName = 'Damian';

const sayHello = () => {
    return `Hey ${authorName}`
}

sayHello();
authorName = 'Paweł';
sayHello();

// Przyklad funkcji pure
const sayHello2 = (authorName) => {
    return `Hey ${authorName}`
}

sayHello('Damian');
sayHello('Paweł');


// --------------------- Przyklady ----------------------------

// 1. Napisz funkcje getNames, ktora przyjmie tablice obiektów, a zwróci liste imion z tej tablicy. Jesli tablica obiektow bedzie pusta, zwroc null.

const names = [
    {
        name: 'Damian',
        age: 50
    },
    {
        name: "Paweł",
        age: 40
    },
    {
        name: "Dominika",
        age: 25
    }
]

const getNames = (collection) => {
    // Funkcje czasami potrzebuja zrobic walidacje
    // tzw. Early return
    if (collection.length === 0) return null

    // Zmienne tworzone w funkcjach, sa widoczne tylko w nich
    const results = [];

    for (let item of collection) {
        results.push(item.name)
    }

    // console.log(results);

    // Funkcje powinny zwracac wartosci. Wyswietlenie rzeczy w konsoli, powinno dziac sie poza funkcja
    return results;
}

// Jesli chcemy wyswietlic wynik funkcji, mozemy opakowac ja w console.log

// Sposob #1
// console.log(getNames(names));

// Sposob #2
// const result = getNames(names);
// console.log(result);



// Zadanie nr 2

// Napisz funkcje getAverage, ktora przyjmie tablice obiektów produktów, a następnie zwróci średnią cenę elementów

const products = [
    {
        name: "Bread",
        price: 9.99
    },
    {
        name: "Banan",
        price: 3.25
    }
];


const getAverage = (collection) => {
    let sum = 0;

    for (let element of collection) {
        sum += element.price
    }

    return sum;
}

// console.log(getAverage(products))


// Napisz funkcje getFruits, ktora przyjmie tablice obiektów produktów, a następnie zwróci te produkty, ktorych kategoria to owoce

const products2 = [
    {
        name: "Bread",
        price: 9.99,
        category: "Bakery"
    },
    {
        name: "Banan",
        price: 3.25,
        category: "Fruits"
    },
    {
        name: "Jabłka",
        price: 4.00,
        category: "Fruits"
    }
];

const getFruits = (collection) => {
    const results = [];

    for (let element of collection) {
        if (element.category === 'Fruits') {
            results.push(element)
        }
    }

    return results
}

// console.log(getFruits(products2))

const fruits = getFruits(products2);

// console.log(getAverage(fruits));

// Reuzywalna funkcja do pobierania rzeczy z danej kategorii

const getElementsFromCategory = (collection, category) => {
    const results = [];

    for (let element of collection) {
        if (element.category === category) {
            results.push(element)
        }
    }

    return results
}

// console.log(getElementsFromCategory(products2, 'Fruits'))
// console.log(getElementsFromCategory(products2, 'Bakery'))


// ------------------------------------------------------------------------



// 1. Napisz funkcje greeting(), ktora przyjmie jako argument imie a nastepnie zwroci "Hello + imie"


const greeting = (name) => {
    return `Hello ${name}`
}

console.log(greeting('Agata'))

// -----------------

// 2. Napisz funkcje sumElements(), ktora przyjmie tablice obiektow z polami name i price.

const menu = [
    {
        name: 'spaghetti',
        price: 35,
    },
    {
        name: 'carbonara',
        price: 30,
    },
    {
        name: 'lasagne',
        price: 40,
    }
]

const sumElements = (array) => {
    let sum = array.reduce((accumulator, item) => accumulator + item.price, 0)
    return sum
}

console.log(sumElements(menu))

// -----------------

// 3. Napisz funkcje getLetters(), ktora przyjmie tablice imion, a nastepnie zwroci tablice zawierajaca ile jest liter w kazdym slowie

// getLetters(['Damian', 'Ania']) -> [6,4]

const getLetters = (array) => {
    const lengthArray = []
    // array.forEach(item => {
    //     lengthArray.push(item.length)
    // })
    return array.map(item => {
        return item.length
    })

    // return lengthArray
}

console.log(getLetters(['Damian', 'Ania']))

// -----------------

// 4. Napisz funckje getTheMostExpensiveProduct, ktora przyjmie tablice z zadania 2 i zwróci obiekt, zawierający najdrozszy produkt

const getTheMostExpensiveProduct = (array) => {

    const sortedArray = array.sort((a, b) => b.price - a.price)

    return sortedArray[0]
}

// console.log(getTheMostExpensiveProduct(menu));

// getTheMostExpensiveProduct([{name:"Komputer", price: 100}, {name:"Lampa", price: 10}]) -> {name: "Komputer", price: 100}

// -----------------

// 5. Napisz funkcje findNameIndex, ktora przyjmie tablice imion i imie, ktore ma wyszukac, a nastepnie zwroci indeks tego elementu

// findNameIndex(['Damian', 'Ania'], 'Ania') -> 1
// findNameIndex(['Damian', 'Ania'], 'Damian') -> 0

const findNameIndex = (array, name) => {
    const index = array.findIndex(item => item === name)
    return index
}

// console.log(findNameIndex(['Damian', 'Ania'], 'Ania'));
// console.log(findNameIndex(['Damian', 'Ania'], 'Damian'));
// console.log(findNameIndex(['Damian', 'Ania', 'Angelika', 'Wiktor'], 'Angelika'))



// ---------------------- Najpopularniejsza funkcja filter --------------------------


// 1. Napisz funkcje searchByText, ktora przyjmuje tablice obiektow wiadomosci i fraze po ktorej ma szukac. Zwroc elementy, ktore spelniaja dana fraze


const messages = [
    {
        author: "Damian",
        message: "Jest fajnie"
    },
    {
        author: "Paweł",
        message: "Kurs ALX jest super"
    }
]

// searchMessagesByText(messages, 'nie') => [{ author: 'Damian', message: 'Jest fajnie' }]

const searchMessagesByText = (collection, phrase) => {
    const results = [];

    collection.forEach(element => {
        // funkcja includes sluzy do sprawdzania, czy dany element znajduje sie w tablicy lub w stringu
        // * mozemy tez uzyc funkcji indexOf. Jesli element jest w tablicy, to jego index jest wiekszy od 0
        if (element.message.includes(phrase)) {
            results.push(element);
        }
    })

    return results;
}

const searchMessagesByTextWithFilter = (collection, phrase) => {
    // funkcja filter, tak samo jak find i findIndex, przyjmuje boolean w argumencie. Jesli boolean jest true, to wynik przejdzie do nowej tablicy, natomiast jesli jest false, to nie przejdzie
    return collection.filter(element => {
        return element.message.includes(phrase);
    });
}

console.log(searchMessagesByText(messages, 'super'));
console.log(searchMessagesByTextWithFilter(messages, 'e'));


// 2. Napisz funckje getSumOfFruits, ktora przyjmuje tablice obiektów i zwraca sume samych owocow.

const products3 = [
    {
        name: "Jablko",
        category: "Fruits",
        price: 4.99
    },
    {
        name: "Banan",
        category: "Fruits",
        price: 7.00
    },
    {
        name: "Chleb",
        category: "Bakery",
        price: 3.99
    }
]


const getSumOfFruits = (collection, category) => {

    const sortedCollection = collection.filter(element => element.category === category)

    const sum = sortedCollection.reduce((accumulator, item) => accumulator + item.price, 0)
    return sum
}

console.log(getSumOfFruits(products3, 'Fruits'))

  // getSumOfFruits(products3) -> 11.99


