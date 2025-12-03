const express = require("express");
const studentRouter = require('./api/v1/students')
const courseRouter = require('./api/v1/courses')
const cors = require('cors')
const bodyParser = require('body-parser')
const AuthWare = require('./middlewares/AuthWare')

const app = express();
const port = 4000

//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(AuthWare)


//routers
app.use("/api/v1/students",studentRouter)
app.use("/api/v1/courses",courseRouter)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})