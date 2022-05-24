
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
            email
        } = req.body

        const newStudent = new Student({
            name,
            email
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

module.exports = {
    Index,
    Show,
    Store,
    Update,
    Destroy
}