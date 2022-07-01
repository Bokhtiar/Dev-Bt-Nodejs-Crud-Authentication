
const appRouter = require("express").Router()
const studentRouter = require("./student.route")
const TodoRouter = require('./todo.route')
const ContactRouter = require('./contact.route')
const ProductRoute = require('./product.route')
const adminRouter = require("./admin.route")
const bookRouter = require("./book.route")
const CategoryRouter = require("./category.router")
const pemission = require("../middleware/permission.middleware")


appRouter.use("/book", bookRouter)
appRouter.use("/category", CategoryRouter)
appRouter.use("/student", studentRouter)
appRouter.use("/todo", TodoRouter)
appRouter.use("/contact", pemission.isAdmin, ContactRouter)
appRouter.use("/product", pemission.isAdmin, ProductRoute)
appRouter.use("/admin", adminRouter)



module.exports = appRouter

