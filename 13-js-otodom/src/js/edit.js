import { getApartment, getApartments } from "./shared/apartments";
import getIdFromSearchParams from "./shared/helpers";


const detailApartmentForm = document.querySelector('#detailApartmentForm')

const apartmentId = getIdFromSearchParams(window.location.search)


const renderApartment = (apartment) => {
    detailApartmentForm.innerHTML += `
    <input value='${apartment.title}' name='title'>  </input>
    </br>
    <textarea name='description'> ${apartment.description}</textarea>
    </br>
    <input  value='${apartment.price}' name='price'>  </input>
    </br>
    <input value='${apartment.publication_date}' name='publication_date'></input>
    <button>Zmień</button>
  `
}

getApartment(apartmentId)
    .then(apartment => {
        renderApartment(apartment)
    })


const saveApartment = (apartment) => {
    return fetch(`http://localhost:8000/apartments/${apartmentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(apartment)
    })

}

const handleEditApartment = (event) => {
    event.preventDefault();

    const editedApartment = {
        id: apartmentId,
        title: detailApartmentForm.elements.title.value,
        description: detailApartmentForm.elements.description.value,
        price: detailApartmentForm.elements.price.value,
        publication_date: detailApartmentForm.elements.publication_date.value
    }
    return saveApartment(editedApartment)
        .then(() => {
            window.location.href = '/index.html'
        })
}


detailApartmentForm.addEventListener('submit', handleEditApartment)