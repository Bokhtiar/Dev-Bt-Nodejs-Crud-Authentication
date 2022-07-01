const { Schema, model } = require('mongoose')

const BookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    image: { 
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

const book = model("book",BookSchema)
module.exports = book