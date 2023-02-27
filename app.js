const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { response } = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  var config = {
    baseURL: "https://us18.api.mailchimp.com/3.0/lists/b43a2d8598",
    method: "post",
    params: {
      skip_merge_validation: false,
      skip_duplicate_check: false,
    },
    data: {
      members: [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        },
      ],
    },
    headers: {
      Authorization: "Bearer ",
    },
  };
  axios(config)
    .then((response) => {
      resp = response.data;
      console.log(response.status);
      res.sendFile(__dirname + "/success.html");
    })
    .catch((err) => {
      console.log(err.response.status);

      res.sendFile(__dirname + "/failure.html");
    });
  //   console.log(firstName, lastName, email);
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

// 9ff49a75fb45476c5cf5f617d8e7a9a3-us18

// b43a2d8598
