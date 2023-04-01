const products = [
    {
      name: 'banan',
      price: 4.99
    },
    {
      name: "chleb",
      price: 3.25
    },
    {
      name: 'ser',
      price: 7.00
    },
    {
      name: 'baton',
      price: 1.99
    }
  ]


let sum = 0;


products.forEach(product => sum += product.price)

const average = sum / products.length;

  console.log(sum)
  console.log(average)