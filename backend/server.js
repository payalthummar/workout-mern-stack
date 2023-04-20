require("dotenv").config();

const PORT = process.env.PORT || 3000;
const express = require("express");

const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware - function will fire for every request that comes in

// POST and PUT method to parse
// Returns middleware that only parses json and only looks at requests
// where the Content-Type header matches the type option.

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routing
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to app" });
// });

app.use("/api/workouts", workoutRoutes);

// connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // if mongoose is connected, then server will listen to port
    // listen for requests
    app.listen(PORT, () => {
      console.log("connected to db & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// API Endpoints

// - GET: /api/workouts = Get all the workout documents

// - POST: /api/workouts = Creates a new workout document

// - GET: /api/workouts/:id = Gets a single workout document

// - DELETE:/api/workouts/:id = Deletes asingle workout

// - PATCH/PUT: /api/workouts/:id = Updates a single workout
