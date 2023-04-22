const express = require("express");

const router = express.Router();

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/add-product");
});

router.get("/add-product", (req, res) => {
  res.send(
    `<form action="/product" method="post"><input name="message" type="text"/>
      <input type="number" name="size"/> <button>submit</button</form>`
  );
});

module.exports = router;
