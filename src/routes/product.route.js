const ProductRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')

    ProductRoute.get("/", ProductController.Index)
    ProductRoute.post("/", ProductController.Store)
    ProductRoute.get("/:id", ProductController.Show)
    ProductRoute.put("/:id", ProductController.Update)
    ProductRoute.delete("/:id", ProductController.Destroy)

module.exports = ProductRoute