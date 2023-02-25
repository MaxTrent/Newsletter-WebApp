const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  console.log(firstName, lastName, email);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});


// 33c5d1f4be7457dcdded9c3cf52a2ace-us18