const router = require("express").Router();
let Estimation = require("../models/estimation.model");

router.route("/").get((req, res) => {
  Estimation.find()
    .then((est) => res.json(est))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const estimation = req.body.estimation;

  const newEstimation = new Estimation({ username, estimation });

  newEstimation
    .save()
    .then(() => res.json("Estimate added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
