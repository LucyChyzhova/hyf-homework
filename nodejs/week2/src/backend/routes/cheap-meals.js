const express = require("express");
const dataAccess = require("../dataAccess.js");
const router = express.Router();
const meals = "/data/meals.json";
const reviews = "/data/reviews.json";

router.get("/cheap-meals", (request, response) => {
  let mealsData = dataAccess.getDataFromJson(meals);
  let reviewsData = dataAccess.getDataFromJson(reviews);
  let mealsWithReviews = mealsData.map((meal) => {
    meal.review = reviewsData.filter((review) => review.id === meal.id);
    return meal;
  });
  let cheapMealsWithReviews = mealsWithReviews.filter(
    (meal) => meal.price < 70
  );
  response.send(cheapMealsWithReviews);
});
module.exports = router;


