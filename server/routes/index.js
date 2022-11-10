/** @format */

const questions = require("./questions.js");
const express = require("express");
const app = express();

const routes = () => {
  return app.use("/", questions);
};

module.exports = routes;
