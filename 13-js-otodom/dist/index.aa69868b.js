const apartmentsList = document.querySelector("#apartmentsList");
const state = {
    apartments: []
};
const renderApartmentsList = (data)=>{
    data.forEach((item)=>{
        apartmentsList.innerHTML += `
<li>
<strong>${item.title}</strong> - ${item.price}
</br>
${item.description}
</li>
`;
    });
};
const loadApartmentsList = ()=>{
    return fetch("http://localhost:8000/apartments").then((response)=>{
        return response.json();
    });
};
loadApartmentsList().then((data)=>{
    state.apartments = data;
    renderApartmentsList(data);
});

//# sourceMappingURL=index.aa69868b.js.map
