var express = require("express");
var app = express();

// console.log("Hello Express");

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json",
  });
});
app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
