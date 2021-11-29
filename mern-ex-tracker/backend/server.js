const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongo connection success");
});

const exercisesRoute = require("./routes/exercises");
const usersRoute = require("./routes/users");
const estimationRoute = require("./routes/estimation");

app.use("/exercises", exercisesRoute);
app.use("/users", usersRoute);
app.use("/estimation", estimationRoute);

app.listen(port, () => {
  console.log("Server run on port 5000");
});
