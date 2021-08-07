var express = require("express");
var app = express();

console.log("Hello Express");

app.get("/", (req, res) => {
  res.send("Response String");
});

module.exports = app;
