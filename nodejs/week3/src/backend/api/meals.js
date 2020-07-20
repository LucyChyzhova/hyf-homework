const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");


//api/meal/	POST	Adds a new meal	POST api/meals/
  router.post("/", async (req, res) => {
    const { title, description, location, when, max_reservations, price, created_date } = req.body;
  
    const newMeal = {
      title, description, location, when, max_reservations, price, created_date
    };
  
    await knex("meal").insert(newMeal);

  res.send("the meal was added");
});


//api/meals/{id}	GET	Returns meal by id	GET api/meals/2

router.get("/:id", async (req, res) => {
  try {
    const mealById = await knex("meal").select().where({ id: req.params.id });
    res.json(mealById);
  } catch (error) {
    throw error;
  }
});

//api/meals/{id}	PUT	Updates the meal by id	PUT api/meals/2

router.put("/:id", async (req, res) => {
  const mealById = await knex("meal")
    .where({ id: req.params.id })
    .update({ picture: req.query.picture });
  res.send(`img of meal (id: ${req.params.id}) was changed`);
});


//api/meals/{id}	DELETE	Deletes the meal by id	DELETE meals/2

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await knex("meal").where({ id }).delete();
    res.send(`Meal was deleted by id: ${id}`);
  } catch (error) {
    res.send(error);
  }
});

//GET api/meals/ query parameters

router.get("/", async (req, res) => {
  try {
    let result;
    let maxPriceParse = parseInt(maxPrice);
    const availableReservations = req.query.availableReservations;
  
    let { maxPrice, someTitle, createdAfter, limit} = req.query;

    if (maxPrice) {
      // api/meals?maxPrice=90
      result = await knex("meal").where("price", "<", maxPriceParse).select();
    } else if (availableReservations) {
      //api/meals?availableReservations=true
      result = await knex
        .from("meal")        
        .leftJoin("reservation", { "meal.id": "reservation.meal_id" })
        .groupBy("meal.id")        
        .having(knex.raw('meal.max_reservation > coalesce(sum(reservation.number_of_guests), 0)'))
        .select("meal.*");
    } else if (someTitle) {
      //api/meals?title=lasa
      result = await knex("meal")
        .where("title", "like", `%${someTitle}%`)
        .select();
    } else if (createdAfter) {
      // api/meals?createdAfter=2019-04-05
      result = await knex("meal")
        .where("created_date", ">", createdAfter)
        .select();
    } else if (limit) {
      //api/meals?limit=4
      let limitParse = parseInt(limit);
      result = await knex("meal").limit(limitParse).select();
    } else {
      // api/meals/	GET	Returns all meals	GET api/meals
      result = await knex("meal").select();
    }

    res.json(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

