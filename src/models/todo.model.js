const { Schema, model } = require("mongoose")

const todoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})


const Todo = model("Todo", todoSchema)
module.exports = Todo
