const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("received message");
  console.log(req.headers);
  console.log(req.body);
});

app.post("/verification", (req, res) => {
  console.log("Received!");
  console.log(req.headers);
  console.log(req.body);
  res.send(req.body.challenge);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
