const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({    // SCHEMA ME BATANEKA KYA KAISA CHAHHIYE
    name : String,
    age : {type : Number, required : true},
    course : String,
})

const Student = mongoose.model("student", studentSchema) // ALWAYS CAPITAL


module.exports = {Student}