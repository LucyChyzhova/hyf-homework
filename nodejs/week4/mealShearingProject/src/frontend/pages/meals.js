window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <div class="logo">
  <a href="/"> <img id="logo" src="https://live.staticflickr.com/65535/50090093592_4a0c888221_o.jpg" alt="mealsShearing-logo"></img>
  </div>
  <div class="first-block">

  <div class="menu">
  <div><a href="meals" data-navigo>menu</a></div>
  <div><a href="meal/3" data-navigo>special proposition</a></div>
  <div><a href="reviews" data-navigo>reviews</a></div>
  </div>
  
  `;

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then((response) => response.json())
    .then(renderMeals);
    
};

function renderMeals(meals) {
  const ul = document.createElement("ul");

  meals.forEach((meal) => {
    const li = document.createElement("li");

    li.innerHTML = `
     <div class ="meals-flex">
     
     <div class="meal-title"><a href="meal/${meal.id}" data-navigo>${meal.title}</a></div>
     <div> <a href="meal/${meal.id}" data-navigo><img id="meal-${meal.id}" class="main-picture" src="${meal.picture}" alt="meal-img"></img></a></div> 
    
     <div>`;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}


