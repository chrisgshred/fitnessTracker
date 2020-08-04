const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date
    },

    exercises: {
        type: []
    },
});

WorkoutSchema.virtual("totalDuration").get(function() {
    let total;
    this.exercises.forEach(e => {
        total += e.duration;
    });
    return total;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;