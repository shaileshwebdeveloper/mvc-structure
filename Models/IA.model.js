
const mongoose = require('mongoose')

const iaSchema = new mongoose.Schema({
    name : String,
    course : String,
})

const IA =  mongoose.model("IA", iaSchema)


module.exports = {IA}