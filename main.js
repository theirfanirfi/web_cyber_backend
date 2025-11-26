const express = require("express");

const app = express();
const port = 4000

app.get("/home", (req,res) => {

    let students = [
        {name: "Faizan"},
        {name: "Ali"},
        {name: "Ahmed"}
    ]

    res.json(students);
})

app.get("/about", (req,res) => {
    res.send("This is the about page");
});

app.get('/contact', (req, res) => {
    res.send("This is the contact us page");    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})