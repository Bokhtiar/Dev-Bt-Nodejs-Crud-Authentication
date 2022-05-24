
const { JsonWebTokenError } = require("jsonwebtoken")
const jwt = require("jsonwebtoken")
const Student = require("../models/student.model")


/* List of items */
const Index = async (req, res, next) => {
    try {
        const results = await Student.find()

        res.status(200).json({
            status: true,
            data: results
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Show specific item */
const Show = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await Student.findById(id)

        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Store an item */
const Store = async (req, res, next) => {
    try {
        const {
            name,
            email,
            password,
            role
        } = req.body

        const newStudent = new Student({
            name,
            email,
            password,
            role
        })

        await newStudent.save()

        res.status(201).json({
            status: true,
            message: "Successfully student created."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Update specific item */
const Update = async (req, res, next) => {
    try {
        const { id } = req.params
        const {
            name,
            email
        } = req.body

        await Student.findByIdAndUpdate(
            id,
            {
                $set: {
                    name,
                    email
                }
            }
        )

        res.status(201).json({
            status: true,
            message: "Student updated."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Delete specific item */
const Destroy = async (req, res, next) => {
    try {
        const { id } = req.params

        await Student.findByIdAndDelete(id)

        res.status(200).json({
            status: true,
            message: "Student deleted."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}



/* student login */

const Login = async (req, res, next) => {

    try {
        const { email, password } = req.body

        /*account find user */
        const account = await Student.findOne({email})
        if(!account) {
            res.status(403).json({
                status:false,
                message: 'email password wrong'
            })
        }
    
        /*password check */
        const passwordss = await Student.findOne({password})
        if(!passwordss) {
            res.status(403).json({
                status:false,
                message: 'email password wrong'
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
            next(error)
        }
    
    }


 
}


module.exports = {
    Index,
    Show,
    Store,
    Update,
    Destroy,
    Login
}