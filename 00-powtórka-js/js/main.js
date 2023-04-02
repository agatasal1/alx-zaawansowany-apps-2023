console.log('Hello');

// Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli

// Gotowe rozwiazanie wrzuc na GIT i wyslij link.

const people = [
    {
        name: "Michał",
        age: 12
    },
    {
        name: "Damian",
        age: 10
    },
    {
        name: "Wiktoria",
        age: 14
    },
    {
        name: "Agata",
        age: 8
    }
]

// Final Output:

// Wiktoria

let max = people[0];

const getTheOldestPerson = () => {
    for (let person of people) {
        if (max.age < person.age) {
            max = person
        }
    }

}

getTheOldestPerson()

console.log(max.name)



/////////////Rozwiązanie z zajęć

// // Zakladam ze najstarsza osoba jest pierwszym elementem tablicy
// let max = people[0];

// // Nastepnie przechodze przez kazdy element tablicy
// for(let person of people) {
//   // Jesli element tablicy, przez ktory przechdoze jest wiekszy od obecnego maxa, zastepuje maxa
//   if(max.age < person.age) {
//     max = person;
//   }
// }

// // po wykonaniu petli for, zmienna max zawiera najstarsza osobe
// console.log(max.name);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

