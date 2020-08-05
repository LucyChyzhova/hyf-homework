const express = require("express");
const app = express();
const port = 3000;

const mealsRouter = require("./routes/meals.js");


const mealsIdRouter = require("./routes/meals.js");
const mealsMaxPrice = require("./routes/meals.js");
const mealsWithMutchTitle = require("./routes/meals.js");
const cheapMealRouter = require("./routes/cheap-meals.js");
const largeMealRouter = require("./routes/large-meals.js");
const mealRouter = require("./routes/meal.js");
const reservationsRouter = require("./routes/reservations.js");
const reservationsIdRouter = require("./routes/reservations.js");
const reservationRouter = require("./routes/reservation.js");
const reviewsRouter = require("./routes/reviews.js");
const reviewsIdRouter = require("./routes/reviews.js");


app.get("/meals", mealsRouter);
app.get("/meals/:id", mealsIdRouter);
app.get("/meals", mealsMaxPrice);
app.get("/meals", mealsWithMutchTitle);
app.get("/cheap-meals", cheapMealRouter);
app.get("/large-meals", largeMealRouter);
app.get("/meal", mealRouter);
app.get("/reservations", reservationsRouter);
app.get("/reservations/:id", reservationsIdRouter);
app.get("/reservation", reservationRouter);
app.get("/reviews", reviewsRouter);
app.get("/reviews/:id", reviewsIdRouter);


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
