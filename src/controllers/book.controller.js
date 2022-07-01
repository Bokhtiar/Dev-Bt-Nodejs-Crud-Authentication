
const Book = require("../models/book.model")
const { FileUpload, DeleteFile, Host } = require("../helpers")


/* List of resources */
const index = async (req, res, next) => {
    try {
        const items = []
        const results = await Book.find()

        if (results && results.length > 0) {
            for (let i = 0; i < results.length; i++) {
                const element = results[i];
                items.push({
                    _id: element._id,
                    title: element.title,
                    image: element.image ? Host(req) + "uploads/" + element.image : null
                })

            }
        }

        res.status(200).json({
            status: true,
            data: items
        })
    } catch (error) {
        if (error) {
            console.log(error);
            next(error)
        }
    }
} 

/* Store new resource */
const store = async (req, res, next) => {
    try {
        const { title } = req.body
        const image = req.files.image

        const uploadFile = await FileUpload(image, './uploads/')
        if (!uploadFile) {
            return res.status(501).json({
                status: false,
                message: 'Failed to upload image'
            })
        }

        const newBoook = new Book({
            title,
            image: uploadFile
        })

        await newBoook.save()

        res.status(201).json({
            status: true,
            message: "Book created."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error) 
        }
    }
}


/* destroy specific resource */
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params

        const isRemoved = await Book.findByIdAndDelete(id)
        if (!isRemoved) {
            return res.status(501).json({
                status: false,
                message: "Something going wrong."
            })
        }
 
        await DeleteFile("./uploads/", isRemoved.image) 

        res.status(200).json({
            status: true,
            message: "Book deleted."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = {
    index,
    store,
    destroy
}