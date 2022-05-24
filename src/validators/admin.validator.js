
const { isEmail, isEmpty } = require("../helpers")

/* Store validator */
const store = (data) => {
    let errors = {}

    if (!data.name || isEmpty(data.name)) errors.name = "Name is required."

    if (!data.email || isEmpty(data.email)) errors.email = "E-mail is required."
    if (data.email && !isEmail(data.email)) errors.email = "Address isn't valid"

    if (!data.password || isEmpty(data.password)) errors.password = "Password is required."

    return {
        errors,
        isValid: Object.keys(error).length === 0
    }
}

/* Login validator */
const login = (data) => {
    let errors = {}

    if (!data.email || isEmpty(data.email)) errors.email = "E-mail is required."
    if (data.email && !isEmail(data.email)) errors.email = "Address isn't valid"
    if (!data.password || isEmpty(data.password)) errors.password = "Password is required."

    return {
        errors,
        isValid: Object.keys(error).length === 0
    }
}


module.exports = {
    store,
    login
}