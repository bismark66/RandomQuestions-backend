/** @format */

const con = require("./index");

const db = {};

db.fetchQuestions = () => {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM randomquestions", function (error, results) {
      if (error) reject(error);
      resolve(results);
    });
  });
};
db.postQuestion = ({ Question, Answer, yourAnswer }) => {
  return new Promise((resolve, reject) => {
    console.log("post question");
    con.query(
      "INSERT INTO randomquestions (`Question`, `Answer`, `yourAnswer`, `Date`) VALUES (?,?,?,?)",
      [Question, Answer, yourAnswer, new Date()],
      function (error, results) {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

db.deleteQuestion = ({ Question }) => {
  return new Promise((resolve, reject) => {
    console.log(Question + "?");
    console.log("delete was passed");
    con.query(
      "DELETE FROM randomquestions WHERE Question =?",
      [Question + "?"],
      function (error, results) {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

module.exports = db;

//INSERT INTO `randomquestions` (`Question`, `Answer`, `yourAnswer`, `Date`, `id`) VALUES ('what is biology', 'the study of life', 'the study of life', '6th October 2021', NULL);
