const express = require("express");

const { response } = require("express");

const meals = "/data/meals.json";
const reviews = "/data/reviews.json";



///meals	Respond with the json for all the meals
function getAllMeals(meals) {
  let mealsData = dataAccess.getDataFromJson(meals);
  result = mealsData;
  return result;
}

///meals/{id}	Respond with the json for the meal with the corresponding id
router.get("/meals/:id", (request, response) => {
  let mealsData = dataAccess.getDataFromJson(meals);
  let mealsIdString = request.params.id;
  let mealsId = parseInt(mealsIdString);

  const mealsIdOutput = mealsData.filter((item) => item.id === mealsId);
  if (mealsIdOutput.length === 0) {
    response.send("there are no meals with id: " + mealsIdString);
  } else {
    response.json(mealsIdOutput);
  }
});

//The /meals route should support some query parameters:
//maxPrice	Get meals that has a price smaller than maxPrice	Number Ex: /meals?maxPrice=90
function getMealsSmallerThanMaxPrice(maxPrice) {
  let mealsData = dataAccess.getDataFromJson(meals);
  let maxPriceNumber = parseInt(maxPrice);
  let mealsCheaperThanMaxPrice = mealsData.filter(
    (meal) => meal.price <= maxPriceNumber
  );

  if (isNaN(maxPriceNumber)) {
    result = "price should be written as a number";
  } else if (mealsCheaperThanMaxPrice.length > 0) {
    result = mealsCheaperThanMaxPrice;
  } else {
    result = `there are no meals less than ${maxPrice}`;
  }
  return result;
}

//title	Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde	String
// EX:	/meals?title=Indian%20platte
//meals?title=Indian
function getMealWithTheSameTitle(matchTitle) {
  let mealsData = dataAccess.getDataFromJson(meals);
  let mealsWithParticularTitle = mealsData.filter((meal) =>
    meal.title.toLocaleLowerCase().includes(matchTitle.toLocaleLowerCase())
  );
  if (mealsWithParticularTitle.length === 0) {
    return "there is no title with:" + matchTitle;
  } else {
    return mealsWithParticularTitle;
  }
}

// created after date
// Get meals that has been created after the date	Date	/meals?createdAfter=2019-04-05

function getMaelsAfterDate(mealAfterDateString) {
  let mealsData = dataAccess.getDataFromJson(meals);
  let mealAfterDate = Date.parse(mealAfterDateString);
  let mealsAfterDate = mealsData.filter(
    ({ createdAt }) => Date.parse(createdAt) > mealAfterDate
  );
  if (mealsAfterDate.length === 0) {
    return "there is no meal after: " + mealAfterDateString;
  } else {
    return mealsAfterDate;
  }
}

// limit	Only specific number of meals	Date	/meals?limit=2

function getSpecificCountOfMeals(mealLimitString) {
  let mealsData = dataAccess.getDataFromJson(meals);
  let mealLimit = parseInt(mealLimitString);
  let mealsLimit = mealsData.slice(0, mealLimit);
  return mealsLimit;
}

router.get("/meals", (request, response) => {
  let result;
  let mealLimitString = request.query.limit;
  let mealAfterDateString = request.query.createdAfter;
  let matchTitle = request.query.title;
  let maxPrice = request.query.maxPrice;
  let mealsData = dataAccess.getDataFromJson(meals);

  if (mealLimitString) {
    result = getSpecificCountOfMeals(mealLimitString);
  } else if (mealAfterDateString) {
    result = getMaelsAfterDate(mealAfterDateString);
  } else if (matchTitle) {
    result = getMealWithTheSameTitle(matchTitle);
  } else if (maxPrice) {
    result = getMealsSmallerThanMaxPrice(maxPrice);
  } else if (mealsData) {
    result = getAllMeals(meals);
  }

  response.json(result);
});

module.exports = router;
