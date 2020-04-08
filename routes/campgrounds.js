// Express
const express = require('express')
const router = express.Router()

// Model Schema
const Campground = require('../models/campgrounds')

// ## Routes

// Desc: Rendering All campgrounds
// Route: /campgrounds
router.get('/', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if(err) {
            console.log(err)
        } else {
            res.render('campgrounds/campgrounds', { campgrounds: campgrounds })
        }
    })
})

// Desc: Rendering new from
// Route: /campgrounds/new
router.get('/new', (req, res) => {
    res.render('campgrounds/new')
})

// Desc: Creating campground
// Route: /campgrounds/new
router.post('/', (req, res) => {
    Campground.create(req.body.campground, (err, campground) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect('/campgrounds')
        }
    })
})

module.exports = router
