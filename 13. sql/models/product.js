const fs = require("fs");
const path = require("path");
const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "insert into products (title, description, price, imageurl) values (?,?,?,?)",
      [this.title, this.description, this.price, this.imageUrl]
    );
  }

  static delete(id) {
    return db.execute("delete from products where products.id=?", [id]);
  }

  static fetchAll() {
    return db.execute("select * from products");
  }

  static findById(id) {
    return db.execute("select * from products where products.id=?", [id]);
  }
};
