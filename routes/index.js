const router = require("expresss").Router();
const path = require("path");


//importing database that was exported as index.js in models folder
const database = require("../models");

//setting up api routes

//GET request that fetches the info from client side
router.get("api/workouts", (req, res) => {
    database.Workouts.find()
    .then(data => {res.json(data)})
    .catch(e => {res.json(e)})
});

//POST request that creates the information for the client side
router.post("api/workouts", (req, res) => {
    workout = new database.Workouts();
    workout.DurationOfWorkout();

    database.Workouts.create(workout)
        .then(data => {res.json(data)})
        .catch( e => {res.json(e)})
});


//PUT request
// router.put("/api/workout:id", (req, res) => {

// })


//GET request for html routes in public folder 
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})