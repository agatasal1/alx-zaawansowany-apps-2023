// Napisz kod slidera

// 1. Stworz sobie pusta tablice images
// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie






const sliderImg = document.querySelector('#sliderImg');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');


const images = [
    'https://www.zooplus.pl/magazyn/wp-content/uploads/2021/04/dog-niemiecki-szczeni%C4%99-1024x759.jpg',
    'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg',
    'https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg',
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'
]

let counter = 0;


sliderImg.src = images[counter]

const handleChangeImg = (event) => {
    event.preventDefault()




    if (counter < images.length - 1) {
        counter++
        sliderImg.src = images[counter]
    } else if (counter === images.length - 1) {
        counter = images.length - 1
        return

    }
}


const handleChangePrevImg = () => {

    console.log('click')
    if (counter > 0) {
        counter--;
        sliderImg.src = images[counter]
    } else if (counter = 0) {
        sliderImg.src = images[0]
    }


}


console.log(counter)


nextButton.addEventListener('click', handleChangeImg)
prevButton.addEventListener('click', handleChangePrevImg)
