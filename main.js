const express = require("express");
const courseRouter = require('./apis/v1/courses')
const studentRouter = require('./apis/v1/students')
const app = express();
const port = 4000

app.use('/apis/v1/courses',courseRouter)
app.use('/apis/v1/students',studentRouter)



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})