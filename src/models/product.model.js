const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: String,
        trim: true,
        required: true
    },
    des: {
        type: String,
        trim: true,
        required: true
    }

}, {
    timestamps: true
})

const product = model("product",ProductSchema)
module.exports = product