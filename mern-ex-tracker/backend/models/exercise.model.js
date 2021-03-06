const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
