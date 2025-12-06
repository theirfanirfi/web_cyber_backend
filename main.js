const express = require("express");
const studentRouter = require('./api/v1/students')
const courseRouter = require('./api/v1/courses')
const AuthWare = require("./middlewares/Authware")

const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const DB_URI = "mongodb+srv://theirfanullah:irshakhan@cluster0.mu8eh0s.mongodb.net/?appName=Cluster0"

const app = express();
const port = 4000

mongoose.connect(DB_URI)
.then(res => console.log('connection',res))


//middlewares
app.use(cors())
app.use(bodyParser.json())
// app.use(AuthWare)


//routers
app.use("/api/v1/students",studentRouter)
app.use("/api/v1/courses",courseRouter)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})