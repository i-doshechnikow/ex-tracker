const { Schema, model } = require("mongoose");

const estimationSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    estimation: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  { timestamp: true }
);

const Estimation = model("Estimation", estimationSchema);

module.exports = Estimation;
