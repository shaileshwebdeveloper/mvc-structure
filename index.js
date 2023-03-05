const express =  require('express')
const app = express()
const {connection} = require('./config/db')
const {Student} = require("./Models/Student.model")
const {IA} = require("./Models/IA.model")
const {studentRouter} = require("./routes/student.route")
const {iaRouter} = require("./routes/ia.route")

app.use(express.json())
 
app.get("/", (req, res) => {
    res.send("Homepage")
})

app.use('/students', studentRouter)

app.use('/ia', iaRouter)

app.listen(3000, async() => { 
    try {
        await connection
        console.log("Connected to DB Successfully")
    } catch (error) {
        console.log("Error connecting to DB")
        console.log(error)
    }
    console.log("Listening Port 3000")
})