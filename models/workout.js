//require mongoose from node modules 
const mongoose = require("mongoose");

//define database schema
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            name : 
            {
                type: String,
                trim: true,
                required: "please enter a name of exerceise"
            },
            type: { 
                type: String,
                trim: true,
                required: "please enter a type of exerceise"
            },
            duration: {
                type: String,
                required: "please enter a type of exerceise"
            },
            reps: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            weight: {
                type: Number,
            }
        }
    ]
},{
    toJSON: {
        virtuals: true
    }
});

//calculation of total weight
WorkoutSchema.virtual("DurationTotal").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
 
    // this.durationTl = this.exercise.reduce
})

const CurrentWorkout = mongoose.model("Workout", WorkoutSchema)

module.exports = CurrentWorkout;