const express = require("express");
const dataAccess = require("../dataAccess.js");
const router = express.Router();
const reservations = "/data/reservations.json";

router.get("/reservation", (request, response) => {
  let reservationsData = dataAccess.getDataFromJson(reservations);
  let randomReservationData =
    reservationsData[Math.floor(Math.random() * reservationsData.length)];
  response.send(randomReservationData);
});

module.exports = router;
