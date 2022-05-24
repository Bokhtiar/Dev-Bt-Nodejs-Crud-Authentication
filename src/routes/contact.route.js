const ContactRoute = require('express').Router()
const ContactController = require('../controllers/Contact.Controller')

   ContactRoute.get("/", ContactController.Index)
   ContactRoute.post("/", ContactController.Store)
   ContactRoute.get("/:id", ContactController.Show)
   ContactRoute.put("/:id", ContactController.Update)
   ContactRoute.delete("/:id", ContactController.Destroy)


module.exports = ContactRoute  