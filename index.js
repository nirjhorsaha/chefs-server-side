const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefsData = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chefs server is running..!");
});

app.get("/chefs", (req, res) => {
  res.send(chefsData);
});



app.listen(port, () => {
  console.log(`Chefs server is listening on port ${port}`);
});
