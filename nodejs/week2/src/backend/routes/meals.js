const express = require("express");
const dataAccess = require("../dataAccess.js");
const { response } = require("express");
const router = express.Router();
const meals = "/data/meals.json";
const reviews = "/data/reviews.json";

///meals	Respond with the json for all the meals with reviews
/*router.get("/meals", (request, response) => {
  let mealsData = dataAccess.getDataFromJson(meals);
  let reviewsData = dataAccess.getDataFromJson(reviews);
  let mealsWithReviews = mealsData.map((meal) => {
    meal.review = reviewsData.filter((review) => review.id === meal.id);
    return meal;
  });
  response.send(mealsWithReviews);
});*/

///meals	Respond with the json for all the meals
router.get("/meals", (request, response) => {
  let mealsData = dataAccess.getDataFromJson(meals);
  response.send(mealsData);
});

///meals/{id}	Respond with the json for the meal with the corresponding id
router.get("/meals/:id", (request, response) =>{
  let mealsData = dataAccess.getDataFromJson(meals);
const mealsIdString = request.params.id;
const mealsId = parseInt(mealsIdString);

const mealsIdOutput = mealsData.filter((item) => item.id === mealsId);
if (mealsIdOutput.length === 0){
  response.send('there are no meals with the corresponding:' + mealsIdOutput)
}
else {
  response.json(mealsIdOutput)
};
});

//The /meals route should support some query parameters:
//maxPrice	Get meals that has a price smaller than maxPrice	Number	/meals?maxPrice=90

module.exports = router;
