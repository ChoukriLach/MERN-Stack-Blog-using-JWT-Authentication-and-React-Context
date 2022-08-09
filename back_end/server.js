require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutsRoutes = require('./Routes/workoutsRoutes')

const app = express()
app.use(express.json())


app.use('/api/workouts',workoutsRoutes)


mongoose.connect(process.env.MONGO_URI)
   .then(()=>{
        app.listen(process.env.PORT , ()=>{
           console.log(`connected to db & listening on port ${process.env.PORT}`)
        })
   })
   .catch((error)=>{
        console.log(error)
   })

   