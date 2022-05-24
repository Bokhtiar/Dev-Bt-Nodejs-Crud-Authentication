const TodoRoute = require('express').Router()
const todoController = require('../controllers/todo.controller')


// TodoRoute.get("/", todoController.Index)
// TodoRoute.get("/:id", todoController.Show)
TodoRoute.post("/", todoController.Store)
// TodoRoute.put("/:id", todoController.Update)
// TodoRoute.delete("/:id", todoController.Destroy)

module.exports = TodoRoute 