const express = require("express")
const studentRouter = express.Router()

let students = [
        {   id: 1,
            name: "Faizan"
        },
        {
            id: 2,
            name: "Ali"
        },
        {id:3,
            name: "Ahmed"}
    ]

studentRouter.get('/', (req, res) => {
        res.json(students);

})

studentRouter.get("/:name", (req, res) => {

    let {name} = req.params

    let student = students.find(student => student.name == name)

    // res.send(name)
    if(student){
    res.json({
        "message": "Student found",
        "student": student
    })
    }
    else {
        res.json({
            "message": "student not found",
        })
    }

})

studentRouter.get("/about", (req,res) => {
    res.send("This is the about page");
});

studentRouter.get('/contact', (req, res) => {
    res.send("This is the contact us page");    
})

module.exports = studentRouter;