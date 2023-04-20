const express = require("express");

// express app
const app = express();

// routing

app.get("/", (req, res) => {
  res.json({ message: "Welcome to app" });
});

// listen for requests

app.listen(4000, () => {
  console.log("listening on port 4000!!!");
});
