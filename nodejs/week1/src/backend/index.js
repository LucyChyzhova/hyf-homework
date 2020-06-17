const express = require("express");

const app = express();
const port = 3000;

///meals///
/*app.get("/meals", (request, response) => {
  let mealsData = getDataFromJson(meals);
  let reviewsData = getDataFromJson(reviews);
  let mealsWithReviews = mealsData.map((meal) => {
    meal.review = reviewsData.filter((review) => review.id === meal.id);
    return meal;
  });
  response.send(mealsWithReviews);
});*/

const mealsRouter = require("./routes/meals.js");
app.get("/meals", mealsRouter);

////cheap-meals///
/*app.get("/cheap-meals", (request, response) => {
  let mealsData = getDataFromJson(meals);
  let reviewsData = getDataFromJson(reviews);
  let mealsWithReviews = mealsData.map((meal) => {
    meal.review = reviewsData.filter((review) => review.id === meal.id);
    return meal;
  });
  let cheapMealsWithReviews = mealsWithReviews.filter((meal) => meal.price < 70)
  response.send(cheapMealsWithReviews);
});*/

const cheapMealRouter = require("./routes/cheap-meals.js");
app.get("/cheap-meals", cheapMealRouter);

///large-meals///
/*app.get("/large-meals", (request, response) => {
  let mealsData = getDataFromJson(meals);
  let reviewsData = getDataFromJson(reviews);
  let mealsWithReviews = mealsData.map((meal) => {
    meal.review = reviewsData.filter((review) => review.id === meal.id);
    return meal;
  });
  let largeMealsWithReviews = mealsWithReviews.filter((meal) => meal.maxNumberOfGuests > 6);
  response.send(largeMealsWithReviews);
});*/

const largeMealRouter = require("./routes/large-meals.js");
app.get("/large-meals", largeMealRouter);

///meal///
/*app.get("/meal", (request, response) => {
  let mealsData = getDataFromJson(meals);
  let reviewsData = getDataFromJson(reviews);
  let mealsWithReviews = mealsData.map((meal) => {
    meal.review = reviewsData.filter((review) => review.id === meal.id);
    return meal;
  });
  let randomMeal = mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)]
  response.send(randomMeal);
});*/
const mealRouter = require("./routes/meal.js");
app.get("/meal", mealRouter);

///reservations///
/*app.get("/reservations", (request, response) => {
  let reservationsData = getDataFromJson(reservations)
  response.send(reservationsData);
});*/

const reservationsRouter = require("./routes/reservations.js");
app.get("/reservations", reservationsRouter);

///reservation///
/*app.get("/reservation", (request, response) => {
  let reservationsData = getDataFromJson(reservations)
  let randomReservationsData = reservationsData[Math.floor(Math.random() * reservationsData.length)]
  response.send(randomReservationsData);
});*/

const reservationRouter = require("./routes/reservation.js");
app.get("/reservation", reservationRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
