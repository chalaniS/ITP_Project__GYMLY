require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const stPackageRoutes = require('./routes/StPackages')
const prPackageRoutes = require('./routes/PrPackages')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// connect db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & listening on port', process.env.PORT)
        }) 
    })
    .catch((error) => {
        console.log(error)
    })

// routes
app.use('/api/stPackages', stPackageRoutes)
app.use('/api/prPackages', prPackageRoutes)

