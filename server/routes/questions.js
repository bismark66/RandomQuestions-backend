/** @format */

const express = require("express");
const router = express.Router();
const db = require("../database/dtquery");

const database = [
  {
    name: "Hugo",
    age: 8,
    school: "potential skills academy",
  },
];

router.get("/", async (req, res) => {
  try {
    //res.json(database);
    let results = await db.fetchQuestions();
    res.json(results).status(200);
  } catch (err) {
    res.json({ err: "An Error Occurred in the database" }).status(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const { Question, Answer, yourAnswer } = req.body;
    console.log("show the results of the post");
    console.log({ Question, Answer, yourAnswer });
    let results = await db.postQuestion({ Question, Answer, yourAnswer });
    res.json(results).status(200);
  } catch (err) {
    res.json({ err: "An error occured with posting" }).status(400);
  }
});

router.delete("/", async (req, res) => {
  try {
    let Question = req.body.Question;
    let results = await db.deleteQuestion({ Question });
    res.json(results).status(200);
  } catch (error) {
    res.json({ err: "there was an error" }).status(400);
  }
});

// router.post("./", async(req, res) = {
//   //  let { question, ans } = req.body;
// })

module.exports = router;
