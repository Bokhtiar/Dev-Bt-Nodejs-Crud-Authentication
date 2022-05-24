const Todo = require('../models/todo.model')

// store
const Store = async (req, res, next) => {
    try {
        const {
            title,
        } = req.body

        const newTodo = new Todo({
            title
        })
       await newTodo.save()
        res.status(200).json({
            status: true,
            message: 'todo successfully'
        })
       
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}
module.exports = {
    Store
}