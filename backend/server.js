const dotenv = require('dotenv')
dotenv.config({path:__dirname+'.devcontainer/.env'});


const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

// express app
const app = express()

// express middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req. method)
    next()
})

//routes
app.use( '/api/workouts', workoutRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
        console.log(' connected to DB & listening on', process.env.PORT)
    })
})
 .catch((err) => {
    console.log(err)
}) 


