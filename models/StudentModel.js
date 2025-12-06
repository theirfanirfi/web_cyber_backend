const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    "first_name": "String",
    "last_name": {
        type: "String",
        required: true
    },
    "email": {
        type: "String",
        unique: true,
    }
})

let studentModel = new mongoose.model('students', studentSchema)

module.exports = studentModel;