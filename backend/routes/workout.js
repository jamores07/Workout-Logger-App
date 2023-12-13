const express = require('express')

const {
    getWorkouts, 
    getWorkout, 
    createWorkout, 
    deleteWorkout, 
    updateWorkout
} = require('../controllers/workoutController')

const Workout = require('../models/workoutModel')

const router = express.Router()

//POST a new workout
router.post('/', createWorkout)

//GET a single workout
router.get('/:id', getWorkout)

// GET all workouts
router.get('/', getWorkouts)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

  

module.exports = router