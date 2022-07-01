const CategoryRoute = require('express').Router()
const CategoryController = require('../controllers/categoryController')

CategoryRoute.get("/", CategoryController.index)
CategoryRoute.post("/", CategoryController.store)
CategoryRoute.delete("/:id", CategoryController.destroy)

module.exports = CategoryRoute