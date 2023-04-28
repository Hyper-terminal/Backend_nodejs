const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "coc2001ab",
  database: "node_shop",
});

module.exports = db.promise();
