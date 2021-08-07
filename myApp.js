var express = require("express");
var app = express();
require("dotenv").config();

console.log(process.env.MESSAGE_STYLE);
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({
      message: "Hello Json",
    });
  }
});

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
