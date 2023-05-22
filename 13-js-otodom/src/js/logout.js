const logutButton = document.querySelector('#logutButton');


const handleClick = (event) => {
    event.preventDefault();

    localStorage.removeItem("authenticatedUser");
    window.location.href = '/login.html'
}


logutButton.addEventListener('click', handleClick)