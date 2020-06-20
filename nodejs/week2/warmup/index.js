const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

//localhost:3000/numbers/add?first=3&second=7 =10
app.get("/numbers/add", (req, res) => {
  let first = req.query.first;
  let second = req.query.second;
  const sum = parseInt(first) + parseInt(second);
  let result;
  if (isNaN(first) || isNaN(second)) {
    result = "both numbers should be written as a number";
  } else {
    result = `${first} + ${second} = ${sum}`;
  }
  res.send(result);
});

//http://localhost:3000/numbers/multiply/5/5 =25
app.get("/numbers/multiply/:first/:second", (req, res) => {
  let first = req.params.first;
  let second = req.params.second;
  const multiply = parseInt(first) * parseInt(second);
  let result;

  if (isNaN(first) || isNaN(second)) {
    result = "both numbers should be written as a number";
  } else {
    result = `${first} * ${second} = ${multiply}`;
  }
  res.send(result);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
