const express = require('express')
const studentRouter = express.Router()
const studentController = require('../../controllers/StudentController')




studentRouter.get('/', async (req, res) => {
    let students = await studentController.get_students()
        res.json(students);
})


studentRouter.get("/:id", async (req, res) => {
    let {id} = req.params
    let student = await studentController.get_by_id(id)
    res.json(student)
})

studentRouter.put('/:id', async (req, res) => {
    let {id} = req.params
    let studentData = req.body
        if(!(studentData.first_name || studentData.last_name || studentData.email)){
        res.json({
            message: "All the data is required."
        })
    }else {
    let student = await studentController.update(id, studentData)
    res.json(student)
    }
})

studentRouter.post("/", async (req, res) => {
    let studentData = req.body
    if(!(studentData.first_name || studentData.last_name || studentData.email)){
        res.json({
            message: "All the data is required."
        })
    }else {
        let student = await studentController.add(studentData)
        res.json(student)
    }
})

// studentRouter.get("/about", (req,res) => {
//     res.send("This is the about page");
// });

// studentRouter.get('/contact', (req, res) => {
//     res.send("This is the contact us page");    
// })

module.exports = studentRouter;