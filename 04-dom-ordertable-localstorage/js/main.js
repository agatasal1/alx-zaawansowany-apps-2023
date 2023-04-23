

const tableBody = document.querySelector('#orderTableBody')
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name')
const orderPrice = document.querySelector('#price')
const removeOrdersButton = document.querySelector('#removeOrdersButton')
const calculateButton = document.querySelector('#calculateButton')
const ordersSum = document.querySelector('#ordersSum')
const ordersAverage = document.querySelector('#ordersAverage')



let orders = JSON.parse(localStorage.getItem('orders'));

if (!orders) {
    orders = []
}

//for of

const renderOrders = () => {
    tableBody.innerHTML = '';
    for (let order of orders) {
        tableBody.innerHTML += `
    <tr>
      <td>${order.id}</td>
      <td>${order.name}</td>
      <td>${order.price}zł</td>
    </tr>
  `
    }
}


//forEach

const isUniqueId = () => {
    let isUnique = true;

    orders.forEach(order => {
        if (order.id === parseInt(orderId.value)) {
            isUnique = false
        }
    })

    return isUnique;
}

const validate = () => {

    if (orderPrice.value <= 0) {
        alert('Cena musi być większa niż 0.')
        return false
    }

    if (orderName.value.length <= 2) {
        alert('Nazwa musi mieć więcej niż dwa znaki.')
        return false
    }

    if (!isUniqueId()) {
        alert('Pole id nie może się powtarzać.')
        return false
    }

    return true
}


const handleSubmit = (event) => {
    // preventDefalt() jest to metoda, sluzaca do zatrzymania domyslnego eventu przegladarki
    event.preventDefault();




    const newOrder = {
        id: parseInt(orderId.value),
        name: orderName.value,
        price: parseFloat(orderPrice.value)
    }

    const isValid = validate(newOrder)

    if (!isValid) return

    orders.push(newOrder)
    localStorage.setItem('orders', JSON.stringify(orders));
    renderOrders();
    calculateOrders();

    orderId.value = "";
    orderName.value = "";
    orderPrice.value = "";
}



const removeOrders = () => {
    orders = [];
    renderOrders();
    localStorage.removeItem('orders')
    calculateOrders();
}


const calculateOrders = () => {
    let sum = 0;
    orders.forEach(order => {
        sum += order.price

    })

    ///////////suma z użyciem funkcji reduce
    let reduceSum = orders.reduce((accumulator, order) => accumulator + order.price, 0)


    ordersSum.innerHTML = `${sum.toFixed(2)} zł`

    ordersAverage.innerHTML = orders.length ? `${(sum / orders.length).toFixed(2)} zł` : '0 zł'
}





renderOrders();
orderForm.addEventListener("submit", handleSubmit);
removeOrdersButton.addEventListener('click', removeOrders);
calculateButton.addEventListener('click', calculateOrders)


// localStorage

// localStorage jest dostepny w obiekcie window, ale ze window jest domyslnym slowem przed kazda funkcja, to nie trzeba tego wpisywac

// localStorage.getItem('klucz') // pobranie wartosci ze schowka
// localStorage.setItem('klucz', 'wartosc') // zapisanie do schowka
// localStorage.removeItem('klucz') // usuniecie ze schowka