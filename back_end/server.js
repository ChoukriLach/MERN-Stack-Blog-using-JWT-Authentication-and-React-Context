require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutsRoutes = require('./Routes/workoutsRoutes')
const userRoutes = require('./Routes/userRoutes')

const app = express()
app.use(express.json())


app.use('/api/workouts',workoutsRoutes)

app.use('/api/user',userRoutes)

mongoose.connect(process.env.MONGO_URI)
   .then(()=>{
        app.listen(process.env.PORT , ()=>{
           console.log(`connected to db & listening on port ${process.env.PORT}`)
        })
   })
   .catch((error)=>{
        console.log(error)
   })

   