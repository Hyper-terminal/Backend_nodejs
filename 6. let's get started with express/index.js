const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("second middleware");
  res.send("<h1>Hello world!</h1>");
});

app.listen(3000, () => {
  console.log("server started successfully on 3000 port");
});
