const express = require("express");
const reservations = "/data/reservations.json";

router.get("/reservations", (request, response) => {
  let reservationsData = dataAccess.getDataFromJson(reservations);
  response.send(reservationsData);
});

///reservations/{id}	Respond with the json for the reservation with the corresponding id
router.get("/reservations/:id", (request, response) =>{
  let reservationsData = dataAccess.getDataFromJson(reservations);
const reservationsIdString = request.params.id;
const reservationsId = parseInt(reservationsIdString);

const reservationsIdOutput = reservationsData.filter((item) => item.id === reservationsId);
if (reservationsIdOutput.length === 0){
  response.send('there are no reservations with the corresponding:' + reservationsIdOutput)
}
else {
  response.json(reservationsIdOutput)
};
});

module.exports = router;
