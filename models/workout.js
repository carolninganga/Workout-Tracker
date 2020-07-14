//require mongoose from node modules 
const mongoose = require("mongoose");

//define database schema
const Schcema = mongoose.Schema;

const WorkoutSchema = new Shema ({
    day: {
        type: Date,
        default: new Date()
    },
    exercise: [
        {
            name : String,
            type: String,
            weight: Number,
            sets: Number,
            reps: Number,
            duration: Number
        }
    ]
});

//calculation of total weight
Workout.method.DurationOfWorkout = () =>{
    this.durationTl = this.exercise.reduce
}