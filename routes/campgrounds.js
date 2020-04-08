// Express
const express = require('express')
const router = express.Router()

// Model Schema
const Campground = require('../models/campgrounds')

// ## Routes

// Desc: Rendering All campgrounds
// Route: /campgrounds
router.get('/', (req, res) => {
    res.render('campgrounds/campgrounds')
})

// Desc: Rendering new from
// Route: /campgrounds/new
router.get('/new', (req, res) => {
    res.render('campgrounds/new')
})

// Desc: Rendering new from
// Route: /campgrounds/new
router.post('/', (req, res) => {
    res.redirect('/campgrounds')
})

module.exports = router
