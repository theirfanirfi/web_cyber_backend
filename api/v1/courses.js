const express = require('express')
const courseRouter = express.Router()
const courses = require('../../data/courses.js')

// courses/
// courses/:id
// POST -> courses/
// PUT -> courses/:id
// DELETE -> courses/:id

courseRouter.get('/', (req, res) => {
    res.json(courses)
})

module.exports = courseRouter;

