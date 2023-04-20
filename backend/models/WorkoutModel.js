const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// schema

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// to create model collection to MongoDB  atlas

module.exports = mongoose.model("Workout", workoutSchema);
