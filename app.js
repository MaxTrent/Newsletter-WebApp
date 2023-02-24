const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post('/');

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});
