const apartmentsList = document.querySelector("#apartmentsList");
const state = {
    apartments: []
};
const renderApartmentsList = (data)=>{
    data.forEach((item)=>{
        apartmentsList.innerHTML += `
<li>
<h3>${item.title}</h3> 
<p>Cena - ${item.price}</p>
<p>${item.description}</p>
<a href='/detail.html?id=${item.id}'>Przejdź do strony mieszkania</a>
</li>
`;
    });
};
getApartments().then((data)=>{
    state.apartments = data;
    renderApartmentsList(data);
});

//# sourceMappingURL=index.de5c0784.js.map
