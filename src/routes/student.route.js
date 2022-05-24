
const studentRouter = require("express").Router()
const StudentController = require("../controllers/student.controller")

studentRouter.get("/", StudentController.Index)
studentRouter.get("/:id", StudentController.Show)
studentRouter.post("/", StudentController.Store)
studentRouter.put("/:id", StudentController.Update)
studentRouter.delete("/:id", StudentController.Destroy)

module.exports = studentRouter
