require('dotenv').config()

// Express 
const express = require('express')
const app = express()

// Connecting to database
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

// Express Config
app.set('view engine', 'ejs')
app.use(express.static('public'))

// ## ROUTES
// Require routes
const campgrounds = require('./routes/campgrounds')

// Mount Routes
app.use('/campgrounds', campgrounds)

// Desc: Rendering Landing Page
app.get('/', (req, res) => {
    res.render('landing')
})


// Server
app.listen(process.env.PORT, console.log("Server Live"))
