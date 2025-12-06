// const students = require('../data/students')
const studentModel = require('../models/StudentModel')

class StudentController {


    async get_students(){
       let students = await studentModel.find({})
       return students;
    }

    async get_by_id(id){
        let student = await studentModel.findOne({_id: id})
        if(student){
            return  {
                "message": "Student found",
                "student": student
            }
        }
        return {
            "message": "Student not found"
        }
    
    }

    async update(id, name){
        let obj = await this.get_by_id(id)
        if(obj.student){
            obj.student.first_name = name
            let updatedStudent = obj.student.save()
            if(updatedStudent){
                return {
                    "message": "student updated",
                    "student": updatedStudent
                }
            }else {
                return {
                    "message": "Student could not be updated at the moment, please try later"
                }
            }
        }else {
            return {
                "message": "Student not found"
            }
        }
    }
    
    async add(student){
        let newStudent = new studentModel(student)

        // newStudent.first_name = student.first_name
        // newStudent.last_name = student.last_name
        // newStudent.email = student.email

        if(newStudent.save()){
            return {
                "message": "Student Added",
                "student": newStudent
            }
        }else {
            return {
                "message": "Student could not be added"
            }
        }



    }

}

let studentController = new StudentController();

module.exports = studentController;