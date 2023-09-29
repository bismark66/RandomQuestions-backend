/** @format */

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "randomquestions",
});

con.connect(function () {
  //if (err) throw err;
  console.log(`Database connection established at port 3300`);
});

module.exports = con;
