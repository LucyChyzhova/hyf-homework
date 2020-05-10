function renderProducts(products) {
  let productsUl = document.querySelector(".products > ul");
  productsUl.innerHTML = '';

  products.forEach(product => {
    let productLi = document.createElement("li");
    let productUl = document.createElement("ul"); //will be created for every product

    for (const property in product) {
      //property is a product's property name
      if (property === "id") {
        continue;
      }

      let propertyLi = document.createElement("li");

      if (property == "shipsTo") {
        let shipsToUl = renderShipsTo(product[property]);
        propertyLi.append(shipsToUl);
      } else {
        propertyLi.innerText = product[property]; //property value
      }

      propertyLi.classList.add(property);
      productUl.append(propertyLi);
    }

    productLi.append(productUl);
    productsUl.append(productLi);
  });
}

function renderShipsTo(countries) {
  let shipsToUl = document.createElement("ul");

  countries.forEach(country => {
    let shipsToLi = document.createElement("li");
    shipsToLi.innerText = country;
    shipsToUl.append(shipsToLi);
  });

  return shipsToUl;
}

console.log("Script loaded");
const products = getAvailableProducts();
const productsWithCategory = addCategory(products);
renderProducts(products);

console.log(products);

document.getElementById("search").addEventListener("input", function(e) {
  const productName = e.target.value.toLowerCase();
  let filteredProducts;
  if (productName.includes("food")) {
    filteredProducts = products.filter(product => product.category.toLowerCase().includes(productName));
  } else {
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(productName));
  }

  renderProducts(filteredProducts);
});


// get product by category "Food"

function addCategory(products) {
  const specificWords = ["Milk", "Carrot", "Fish", "Chocolate"];

  products.forEach(product => {
    specificWords.forEach(word => {
      if (product.name.includes(word)) {
        product.category = "Food";
      }
      else{
        product.category = "Other";
      }
    });
  });

  return products;
}

//Price analytics
//Read the following closely, to ensure you call the function correctly!

//In order to analyse the product prices we need to send the prices of the products to a server.
//A function is available to you called sendPricesToServer. You need to call this function with two arguments:

//1. An array of the prices of the products. What array method can we use here?
//2. A callback function with a parameter. The parameter will be the confirmation text sent from the server.
//The callback function will be called when the data has been sent to the server. Console.log out the response from the server.



let prices = products.map(product =>  product.price);

sendPricesToServer(prices, callback)

function callback(confirmationText) {
  console.log(confirmationText);
}