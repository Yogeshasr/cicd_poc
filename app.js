const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/test", (req, res) => {
  res.send("test page");
});

app.get("/login", (req, res) => {
  res.send("login successfull");
});

app.listen(8080, console.log("server is running on 5500"));
