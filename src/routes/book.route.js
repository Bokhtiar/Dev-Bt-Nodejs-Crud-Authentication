const BookRoute = require('express').Router()
const BookController = require('../controllers/book.controller')

BookRoute.get("/", BookController.index)
BookRoute.post("/", BookController.store)
BookRoute.delete("/:id", BookController.destroy)

module.exports = BookRoute