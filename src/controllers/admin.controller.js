
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Admin = require("../models/admin.model")
// const { validators } = require("../validators")

/* Create new admin*/
const store = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        /* Check validity */
        // const validate = await validators.admin.store(req.body)
        // if (!validate.isValid) {
        //     return res.status(422).json({
        //         status: false,
        //         message: validate.errors
        //     })
        // }

        /* Check unique email */
        const isEmailExist = await Admin.findOne({ email })
        if (isEmailExist) {
            return res.status(409).json({
                status: false,
                errors: { message: "E-mail already exist." }
            })
        }

        /* Hash password */
        const hashPassword = await bcrypt.hash(password, 10)

        const newAdmin = new Admin({
            name,
            email,
            password: hashPassword
        })

        await newAdmin.save()

        res.status(201).json({
            status: true,
            message: "Admin created."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next()
        }
    }
}

/* Login to account*/
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        /* Account find using phone */
        const account = await Admin.findOne({ email })
        if (!account) {
            return res.status(404).json({
                status: false,
                message: "Invalid email or password."
            })
        }

        /* Compare with password */
        const result = await bcrypt.compare(password, account.password)
        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Invalid email or password."
            })
        }

        /* Generate JWT token */
        const token = await jwt.sign(
            {
                id: account._id,
                name: account.name,
                role: account.role,
                permissions: account.permissions,
            }, process.env.JWT_SECRET, { expiresIn: '1d' }
        )

        return res.status(200).json({
            status: true,
            token
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next()
        }
    }
}


module.exports = {
    store,
    login
}