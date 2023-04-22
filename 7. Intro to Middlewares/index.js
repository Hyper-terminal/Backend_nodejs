const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/add-product");
});

app.use("/add-product", (req, res) => {
  res.send(
    `<form action="/product" method="post"><input name="message" type="text"/>
    <input type="number" name="size"/> <button>submit</button</form>`
  );
});

app.listen(3000, () => {
  console.log("server started successfully on 3000 port");
});
