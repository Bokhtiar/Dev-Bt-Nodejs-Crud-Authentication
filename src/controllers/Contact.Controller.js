const Contact = require('../models/contact.model')

//contact list

const Index = async (req, res, next) => {
    try {
        const results = await Contact.find()
        res.status(200).json({
            status:true,
            data: results,
            message: 'list of contact',
        })
    } catch (error) {
        if(error){
            console.log('error', error)
            next(error)
        }
    }
}

// single view contact

const Show = async (req, res, next) => {
    try {
        const { id } = req.params 
        const contact = await Contact.findById(id)
        res.status(200).json({
            status:true,
            data: contact,
        })
    } catch (error) {
        if (error) {
            console.log('error', error)
            next(error)
        }
    }

}

// contact store
const Store = async (req, res, next) => {
    try {
        const {
            name,
            email,
            msg,
            statusKey,
        } = req.body

        const newContact = new Contact({
            name,
            email,
            msg,
            statusKey,
        })
        await newContact.save()
        res.status(200).json({
            status: true,
            message: "Contact Added Successfully...!"
        })
    } catch (error) {
        if (error) {
            console.log('error', error)
            next(error)
        }
    }
}

// update

const Update = async (req, res, next) => {
    try {
        const {id} = req.params
        const {
            name,
            email,
            msg,
            statusKey
        } = req.body

         await Contact.findByIdAndUpdate(
            id,
            {
                $set: {
                    name,
                    email,
                    msg,
                    statusKey
                }
            }

        )
        res.status(201).json({
            status: true,
            message: "data updated successfully..!"
        })
    } catch (error) {
        if (error) {
            console.log('error', error)
            next(error)
        }
    }
}

const Destroy = async (req, res, next) => {
    try {
        const { id } = req.params
        await Contact.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            message: "data deleted successfully...!"
        })
    } catch (error) {
        if(error){
            console.log("error", error)
            next(error)
        }
    }
}

module.exports = {
    Store,
    Index,
    Show,
    Update,
    Destroy
}