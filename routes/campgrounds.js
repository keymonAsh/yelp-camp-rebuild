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

// Desc: Rendering Show campground page
// Route: /campgrounds/:id
router.get('/:id', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err) {
            console.log(err)
        } else {
            res.render('campgrounds/show', { campground: campground })
        }
    })
})

// Desc: Update campground Form
// Route: /campgrounds/:id/edit
router.get('/:id/edit', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err) {
            console.log(err)
        } else {
            res.render('campgrounds/edit', { campground: campground })
        }
    })
})

// Desc: Update campground 
// Route: /campgrounds/:id
router.put('/:id', (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, { new: true, runValidators: true }, (err, campground) => {
       if(err) {
           console.log(err)
       } else {
           res.redirect(`/campgrounds/${req.params.id}`)
       }
   })
})

// Desc: Delete campground
// Route: /campgrounds/:id
router.delete('/:id', (req, res) => {
    Campground.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect('/campgrounds')
        }
    })
})

module.exports = router
