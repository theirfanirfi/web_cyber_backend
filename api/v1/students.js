const express = require('express')
const studentRouter = express.Router()
const studentController = require('../../controllers/StudentController')




studentRouter.get('/', (req, res) => {
    let students = studentController.get_students()
        res.json(students);

})


studentRouter.get("/:id",(req, res) => {
    let {id} = req.params
    res.json(studentController.get_by_id(id))
})

studentRouter.put('/:id', (req, res) => {
    let {id} = req.params
    let name = "Fatima"
    res.json(studentController.update(id, name))
})


studentRouter.post("/", (req, res) => {
    let studentData = req.body
    console.log('studentData', studentData)
    if(!(studentData.id || studentData.name)){
        res.json({
            "message": "Id and name both are required"
        })
    }else {
        let students = studentController.add(studentData)
        res.json({
            "message": "student added",
            "students": students
        })
    }
})

// studentRouter.get("/about", (req,res) => {
//     res.send("This is the about page");
// });

// studentRouter.get('/contact', (req, res) => {
//     res.send("This is the contact us page");    
// })

module.exports = studentRouter;