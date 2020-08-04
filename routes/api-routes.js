const db = require("../models");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


//route to find all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout
        .find()
        .sort({ day: 1 })
        .then((workouts) => {
            res.json(workouts.map((w) => w.toObject({ virtuals: true})))
        });
});




module.exports = router;

