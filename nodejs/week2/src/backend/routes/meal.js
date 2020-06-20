const express = require("express");
const dataAccess = require("../dataAccess.js");
const router = express.Router();
const meals = "/data/meals.json";
const reviews = "/data/reviews.json";

router.get("/meal", (request, response) => {
  let mealsData = dataAccess.getDataFromJson(meals);
  let reviewsData = dataAccess.getDataFromJson(reviews);
  let mealsWithReviews = mealsData.map((meal) => {
    meal.review = reviewsData.filter((review) => review.id === meal.id);
    return meal;
  });
  let randomMeal =
    mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)];
  response.send(randomMeal);
});

module.exports = router;
