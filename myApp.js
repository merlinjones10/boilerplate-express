var express = require("express");
var app = express();
require("dotenv").config();

const simpleLogger = (req, res, next) => {
  let { method, path, ip } = req;
  var string = method + " " + path + " - " + ip;
  //   console.log(string);
  next();
};

app.use(simpleLogger);

app.get("/:word/echo", (req, res) => {
  //   console.log(req.params);
  res.send({ echo: req.params.word });
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
