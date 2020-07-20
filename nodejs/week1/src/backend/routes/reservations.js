const express = require("express");
const dataAccess = require("../dataAccess.js");
const router = express.Router();
const reservations = "/data/reservations.json";

router.get("/reservations", (request, response) => {
  let reservationsData = dataAccess.getDataFromJson(reservations);
  response.send(reservationsData);
});

module.exports = router;
