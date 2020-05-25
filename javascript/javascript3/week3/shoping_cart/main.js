class Product {
  constructor(name, price, currency) {
    this.name = name;
    this.price = price;
    this.currency = currency;
  }

  convertToCurrency(currency) {
    const dollar = 0.15;
    const euro = 0.13;
    const sek = 1.41;
    let convertedPrice;
    if (currency === "dollar") {
      convertedPrice = this.price * dollar;
    } else if (currency === "euro") {
      convertedPrice = this.price * euro;
    } else if (currency === "sek") {
      convertedPrice = this.price * sek;
    }

    return convertedPrice;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  } //OR this.product.pop() will remove the last element in array

  searchProduct(productName) {
    return this.products.filter((product) => product.name === productName);
  }

  getTotal() {
    return this.products
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);
  }

  renderProducts() {
    const div = document.createElement("div");

    this.products.forEach((product) => {
      const p = document.createElement("p");
      p.textContent = product.name;

      div.appendChild(p);
    });

    document.body.appendChild(div);
  }

  getUser(url) {
    return fetch(url).then((res) => res.json());
  }

  renderUserName(data) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h1.textContent = "shopping cart";
    h2.textContent = "user: " + data.username;
    p.textContent = "total price: " + this.getTotal();

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(p);

    document.body.appendChild(div);
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

const kiwi = new Product("kiwi", 10);
shoppingCart.addProduct(kiwi);
const apple = new Product("apple", 20);

shoppingCart.addProduct(apple);
console.log(shoppingCart);

//shoppingCart.removeProduct(kiwi);
let productName = "kiwi";

let searchProduct = shoppingCart.searchProduct(productName);
console.log(searchProduct);

let totalSum = shoppingCart.getTotal();
console.log(totalSum);

const url = "https://jsonplaceholder.typicode.com/users/1";

shoppingCart.getUser(url).then((data) => {
  console.log("User data:");
  console.log(data);
  shoppingCart.renderProducts();
  shoppingCart.renderUserName(data);
});

console.log("Convert:" + kiwi.convertToCurrency("sek")); 

/*Part 1
Create the functionality for the ShoppingCart class.

addProduct should add a product to the products array.
removeProduct should remove a product from the products array.
getTotal should get the total price of the products in the shoppingcart.
renderProducts should render the products to html. You decide what to show and how.
searchProduct should return an array of products that match the productName parameter
getUser should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1

Part 2
Try and create some products and call the addProduct and the removeProduct functions to see if they work.

Call the getUser function to get a user. When the user has been fetched. Render the products using the renderProducts method. 
Also render the username and the total price of the products in the shoppingcart.

Part 3
The Product class should get a method called convertToCurrency. The function should have currency as a parameter. 
Depending on the provided currency return the correct price for the product. Add 3 or more curriencies. 
Or use an api for getting the price dependent on a currency that convertToCurrency uses.

// Assuming dkr as default currency*/
/*
const plant = new Product('plant', 50);*/
