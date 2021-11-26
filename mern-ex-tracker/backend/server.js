const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
// its just for test
// app.get("/", async (req, res) => {
//   res.send("hello");
// });

app.listen(port, () => {
  console.log("Server run on port 5000");
});
