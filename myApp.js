var express = require("express");
var app = express();
require("dotenv").config();

const simpleLogger = (req, res, next) => {
  let { method, path, ip } = req;
  console.log(method, path, ip);
  next();
};

app.use(simpleLogger);

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
