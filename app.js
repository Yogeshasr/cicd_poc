const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/test", (req, res) => {
  res.send("test page");
});

const port = process.env.port || 8080;
app.listen(port, console.log("server is running on 5500"));
