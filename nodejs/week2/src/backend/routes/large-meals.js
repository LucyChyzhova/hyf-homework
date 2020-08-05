const express = require("express");
const meals = "/data/meals.json";
const reviews = "/data/reviews.json";

router.get("/large-meals", (request, response) => {
  let mealsData = dataAccess.getDataFromJson(meals);
  let reviewsData = dataAccess.getDataFromJson(reviews);
  let mealsWithReviews = mealsData.map((meal) => {
    meal.review = reviewsData.filter((review) => review.id === meal.id);
    return meal;
  });
  let largeMealsWithReviews = mealsWithReviews.filter(
    (meal) => meal.maxNumberOfGuests > 6
  );
  response.send(largeMealsWithReviews);
});
module.exports = router;
