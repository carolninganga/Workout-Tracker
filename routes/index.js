const router = require("express").Router();
const path = require("path");

//importing database that was exported as index.js in models folder
const database = require("../models");

//setting up api routes

//GET request that fetches the info from client side
router.get("/api/workouts", (req, res) => {
  database.Workouts.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json(e);
    });
});

//POST request that creates the information for the client side
router.post("/api/workouts", (req, res) => {
  workout = new database.Workouts();
  workout.DurationOfWorkout();

  database.Workouts.create(workout)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json(e);
    });
});

//Delete request
router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});

//UPDATE
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET request for html exercise  route in public folder

module.exports = router;
