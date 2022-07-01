const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
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

const category = model("category",CategorySchema)
module.exports = category