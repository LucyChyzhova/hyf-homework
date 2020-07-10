window.handleMealRequest = (params) => {
  document.body.innerHTML = `
  <div class="logo">
  <a href="/"><img id="logo" src="https://live.staticflickr.com/65535/50090093592_4a0c888221_o.jpg" alt="mealsShearing-logo"></img>
  </div>

  <div class="first-block">

  <div class="menu">
  <div><a href="/meals" data-navigo>menu</a></div>
  <div><a href="/meal/3" data-navigo>special proposition</a></div>
  <div><a href="/reviews" data-navigo>reviews</a></div>
  </div>
<div class="form-reservation">
  <div><p class="form-header">Reserve this meal</p></div>
  <div>
    <form action="../../api/reservations" method="post"> 
    <label for="name">name:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="email">email:</label>
    <input type="text" id="email" name="email"><br><br>
    <input type="hidden" id="meal_id" name="meal_id" value="${params.id}" >
    <label for="number_of_guests">number of guests:</label>
    <input type="int" id="number_of_guests" name="number_of_guests"><br><br>
  </div>
      <div>
    <input class="submit-btn" type="submit" value="Submit">
      </div>
    </form>
  </div>
  </div>`;
  

  // make sure the backend api works before working with it here
  fetch(`/api/meals/${params.id}`) // http://localhost:3000/meal/4
    .then((response) => response.json())
    .then(renderMeal);
};


///meals/{id}	Render the meal with the specific id. Add a form to create reservations for the meal

function renderMeal(meal) {
  const ul = document.createElement("ul");

  meal.forEach((meal) => {
    const li = document.createElement("li");
    ul.innerHTML = meal.title;
    li.innerHTML = `<img id="meal-${meal.id}" class="main-picture" src="${meal.picture}" alt="meal-img"></img>`;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

