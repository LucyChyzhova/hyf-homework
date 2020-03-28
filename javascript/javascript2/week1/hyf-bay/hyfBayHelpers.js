/* DONT MODIFY ANY OF THIS CODE!!!*/
window.getAvailableProducts = function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function getRandomItem(availableProductNames) {
        return availableProductNames[getRandomInt(0, availableProductNames.length - 1)];
    }
    
    function getRandomProductname() {
        const preWords = ['Used', 'Fantastic', '"Used"', 'Broken', 'Beautiful', 'Wet', 'Green', 'Sloppy', 'Dirty'];
        const productNames = ['Carrot', 'Drone', 'Giftcard', 'Puppy', 'Car', 'Shirt', 'Milk', 'Chalk', 'Fish fingers', 'Socks', 'Chocolate', 'Toothbrush', 'Computer', 'Nokia', 'Cologne'];
        
        let chosenProductName = getRandomItem(productNames);
        const shouldHavePreWord = getRandomInt(0, 10) > 6;
        
        if (shouldHavePreWord) {
            const preWord = preWords[getRandomInt(0, preWords.length - 1)];
            chosenProductName = `${preWord} ${chosenProductName}`;
        }

        return chosenProductName;
    }
    
    /* DONT MODIFY ANY OF THIS CODE!!!*/
    function getRandomCountries() {
        const availableCountries = ['Denmark', 'Sweden', 'Norway', 'Germany', 'Iceland', 'England'];
        const numberOfCountries = getRandomInt(1, 3);

        const randomCountries = [];
        while (randomCountries.length < numberOfCountries) {
            const randomIndex = getRandomInt(0, availableCountries.length - 1);
            const randomCountry = availableCountries[randomIndex];
            if(!randomCountries.includes(randomCountry)) {                
                randomCountries.push(randomCountry);
            }
        }

        return randomCountries;
    }
    
    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(null, Array(numberOfAvailableProducts))
        .map(() => {
            const name = getRandomProductname();
            return {
                id: `${name}${getRandomInt(0, 100000)}`,
                name,
                price: getRandomInt(0, 10000),
                rating: getRandomInt(1, 10),
                shipsTo: getRandomCountries(), 
            };
        });
    
    return availableProducts;
}

window.sendPricesToServer = function(prices, callback) {
    console.log(`Sending these prices: ${prices} to an analytics server`);

    setTimeout(() => {
        callback(`These prices were received ${prices}`);
    }, 3000)
}

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


