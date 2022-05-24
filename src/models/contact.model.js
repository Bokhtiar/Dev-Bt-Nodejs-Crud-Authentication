const { Schema, model } = require('mongoose')

const ContactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    msg: {
        type: String,
        trim: true,
        required: true
    },
    statusKey: {
        type: String,
        trim: true,
        default: 0
    }
}, {
    timestamps: true
})

const Contact = model("contact", ContactSchema)
module.exports = Contact