const { Schema, model } = require("mongoose")

const validateEmail = function (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

const adminSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validateEmail, "Please provide a valid email address"],
    },
    permissions: [{
        type: String,
        trim: true,
        default: null
    }],
    password: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        trim: true,
        default: "admin"
    }
}, {
    timestamps: true
})


const Admin = model("Admin", adminSchema)
module.exports = Admin
