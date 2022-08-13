const express = require('express')
const {
    createWorkout ,
    getWorkouts ,
    getWorkout ,
    deleteWorkout ,
    updateWorkout
} = require('../Controllers/workoutController')

const userMiddleware = require('../Middlewares/userMiddleware')

const router = express.Router()

router.use(userMiddleware)

router.get('/',getWorkouts)

router.post('/', createWorkout)

router.get('/:id',getWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router