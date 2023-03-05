const { Student } = require("../Models/Student.model")


const getStudent = async(req, res) => {
  const students_data = await Student.find()
  res.send(students_data)
}

const getStudentByName = async(req, res) =>{
    console.log(req.params.studentname)
    const student_data = await Student.find({name : req.params.studentname})
    res.send(student_data)
}


const postStudent = async(req, res) => {
    const payload = req.body

    if(!payload.age || !payload.name || !payload.course){
        res.send("Please send all required field")
    }

    if(payload.course === "MERN"){
        await Student.insertMany([payload])
        res.send("Student data created successfully")
    }
    else{
      res.send("Please enter a valid course")
    }
    //10's of lines of logic


}


module.exports = {
    getStudent,
    getStudentByName,
    postStudent
}