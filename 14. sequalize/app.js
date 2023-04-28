const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const sequelise = require("./util/database");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelise
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.error(err));