/** @format */

const express = require("express");
const app = express();
const router = require("./server/routes/index");
const cors = require("cors");
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(router());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
