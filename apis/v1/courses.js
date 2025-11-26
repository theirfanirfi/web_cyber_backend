const express = require('express')

const courseRouter = express.Router();

courseRouter.get('/', (req, res) => {
    res.send("courses router")
})

courseRouter.get("/:id", (req, res) => {
    let {id} = req.params
    res.send(`course ${id}`)
})

// exports.courseRouter = courseRouter;
module.exports = courseRouter;