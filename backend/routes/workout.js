const express = require('express')

const router = express.Router()

//Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

// POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})
  

  

module.exports = router