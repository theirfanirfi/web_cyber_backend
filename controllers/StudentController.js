const students = require('../data/students')

class StudentController {


    get_students(){
        return students
    }

    get_by_id(id){
        let student = this.get_students().find(std => std.id == id)
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

    update(id, name){
        let obj = this.get_by_id(id)
        if(obj.student){
            obj.student.name = name
        }

        return obj
    }

    add(student){
        students.push(student)
        return students
    }

}

let studentController = new StudentController();

module.exports = studentController;