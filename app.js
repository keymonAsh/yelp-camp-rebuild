require('dotenv').config()

// Express 
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('landing')
})


// Server
app.listen(process.env.PORT, console.log("Server Live"))