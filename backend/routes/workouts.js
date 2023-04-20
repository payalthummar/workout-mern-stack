const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getSingleWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// - GET: /api/workouts = Get all the workout documents

router.get("/", getWorkouts);

// - GET: /api/workouts/:id = Gets a single workout document

router.get("/:id", getSingleWorkouts);

// - POST: /api/workouts = Creates a new workout document

router.post("/", createWorkout);

// - DELETE: /api/workouts/:id = Deletes asingle workout

router.delete("/:id", deleteWorkout);

// - PATCH/PUT: /api/workouts/:id = Updates a single workout

router.put("/:id", updateWorkout);

module.exports = router;
