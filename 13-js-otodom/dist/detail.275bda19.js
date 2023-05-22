const detailApartmentInfo = document.querySelector("#detailApartmentInfo");
// const getIdFromSearchParams = (searchParams) => {
//     const params = new URLSearchParams(searchParams)
//     return params.get('id')
// }
// const apartmentId = getIdFromSearchParams(window.location.search)
// fetch(`http://localhost:8000/apartments/${apartmentId}`)
//     .then(res => res.json())
//     .then(apartment => {
//         console.log(apartment)
//         detailApartmentInfo.innerHTML += `
//         <h2>${apartment.title}</h2>
//         <h3>${apartment.description}</h3>
//         <p>Cena: ${apartment.price}</p>
//         <p>${apartment.publication_date}</p>
//         `
//     })
//     const apartmentInfo = document.querySelector('#apartmentInfo');
const getIdFromSearchParams = (searchParams)=>{
    const params = new URLSearchParams(searchParams);
    return params.get("id");
};
const apartmentId = getIdFromSearchParams(window.location.search);
const renderApartment = (apartment)=>{
    detailApartmentInfo.innerHTML += `
    <h2> ${apartment.title} </h2>
    <p> ${apartment.description} </p>
    <p> ${apartment.price} </p>
    <p> ${apartment.publication_date} </p>
  `;
};
getApartment().then((apartment)=>{
    renderApartment(apartment);
});

//# sourceMappingURL=detail.275bda19.js.map
