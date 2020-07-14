//require mongoose from node modules 
const mongoose = require("mongoose");

//define database schema
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
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
WorkoutSchema.method.DurationOfWorkout = () =>{
    // this.durationTl = this.exercise.reduce
}

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout