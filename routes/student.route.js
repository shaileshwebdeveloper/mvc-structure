const {Router} = require('express')

const studentRouter = Router()

const {Student} = require("../Models/Student.model")

const {getStudent, getStudentByName, postStudent} = require('../controllers/student.controller')

studentRouter.get('/', getStudent)


studentRouter.get('/:studentname', getStudentByName)


studentRouter.post('/addStudent', postStudent)


module.exports = {studentRouter}