const express = require("express");
const dataAccess = require("../dataAccess.js");
const router = express.Router();
const reviews = "/data/reviews.json";

//all reviews
/* 
router.get("/reviews", (request, response) => {
    let reviewsData = dataAccess.getDataFromJson(reviews);
    response.send(reviewsData);
  });*/

///reviews/{id}	Respond with the json for the review with the corresponding id
router.get("/reviews/:id", (request, response) => {
  let reviewsData = dataAccess.getDataFromJson(reviews);
  const reviewsIdString = request.params.id;
  const reviewsId = parseInt(reviewsIdString);

  const reviewsIdOutput = reviewsData.filter((item) => item.id === reviewsId);
  if (reviewsIdOutput.length === 0) {
    response.send(
      "there are no reservations with the corresponding:" + reviewsIdOutput
    );
  } else {
    let reviewsDataIdWithSpecificProperty = reviewsIdOutput.map(
      ({ content, numberOfStars, createdAt }) => ({content, numberOfStars, createdAt })
    );
    response.json(reviewsDataIdWithSpecificProperty);
  }
});

///reviews	Respond with the json for all reviews
router.get("/reviews", (request, response) => {
  let reviewsData = dataAccess.getDataFromJson(reviews);
  let reviewsDataWithSpecificProperty = reviewsData.map(
    ({ content, numberOfStars, createdAt }) => ({content, numberOfStars,createdAt })
  );

  response.send(reviewsDataWithSpecificProperty);
});

module.exports = router;
