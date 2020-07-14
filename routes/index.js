
const router = require("express").Router();

//require or import current workout information from the database models folder
const CurrentWorkout = require("../models/workout.js");


//POST request to create a note 
router.post("/api/workouts", (req, res) => {
  CurrentWorkout.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});


//UPDATE request to update workout information
router.put("/api/workouts/:id", ({ body, params }, res) => {
  CurrentWorkout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//GET request that fetches infomation from the database from client
router.get("/api/workouts", (req, res) => {
  CurrentWorkout.find()
    .then(datas => {
      res.json(datas);
    })
    .catch(err => {
      res.json(err);
    });
});

//GET request that fetches infomation from the database from client and finds a limit of 5
router.get("/api/workouts/range", (req, res) => {
  CurrentWorkout.find({}).limit(5)
    .then(datas => {
      console.log(datas)
      res.json(datas);
    })
    .catch(err => {
      res.json(err);
    });
});

//DELETE request that removes one workou at a time by using the id
router.delete("/api/workouts", ({ body }, res) => {
  CurrentWorkout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});


// GET request to the html routes that 
const path = require("path");
//GET request for html exercise  route in public folder
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//GET request for stats route in public folder for exercise and stats
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;




