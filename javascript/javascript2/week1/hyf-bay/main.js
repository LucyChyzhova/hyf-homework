console.log('Script loaded');
const products = getAvailableProducts();
renderProducts(products);
console.log(products);


function renderProducts(products) {
    let productsUl = document.querySelector(".products > ul");
  
    products.forEach(product => {
      let productLi = document.createElement("li");
      let productUl = document.createElement("ul");//will be created for every product
  
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
          propertyLi.innerText = product[property];//property value
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
  
  
  