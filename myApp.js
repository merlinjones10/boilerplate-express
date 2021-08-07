var express = require("express");
var app = express();
require("dotenv").config();
const bodyParser = require("body-parser");

// const simpleLogger = (req, res, next) => {
//   let { method, path, ip } = req;
//   var string = method + " " + path + " - " + ip;
//   //   console.log(string);
//   next();
// };
// params PATH/:123 || query PATH/?name=merlin
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/:word/echo", (req, res) => {
//   //   console.log(req.params);
//   res.send({ echo: req.params.word });
// });

app.post("/name", function (req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.send({ time: req.time });
  }
);

app.get("/json", (req, res) => {
  let jsonResponse = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }
  res.json(jsonResponse);
});

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
