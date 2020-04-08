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