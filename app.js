const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(5500, console.log("server is running on 5500"));
