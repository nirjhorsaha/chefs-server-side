const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefsData = require("./data/chefs.json");



app.get("/", (req, res) => {
  res.send("Chefs server is running..!");
});

app.get("/chefs", (req, res) => {
  res.send(chefsData);
});

// find single chefs data
app.get('/chefs/:id', (req, res) => { 
  const id = parseInt(req.params.id);
  // console.log(id);
  const singleChef = chefsData.find((n) => n.id === id);
  res.send(singleChef);
})

app.listen(port, () => {
  console.log(`Chefs server is listening on port ${port}`);
});
