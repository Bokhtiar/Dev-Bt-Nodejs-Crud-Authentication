const product = require('../models/product.model')
const Product = require('../models/product.model')

//list of product 
const Index = async(req, res, next) => {
    try {
        const result = await Product.find()
        res.status(200).json({
            status:true,
            data:result,
            message:"list of product list"
        })
    } catch (error) {
        if(error){
            console.log(error)
            next(error)
        }
    }
}
//Product store
const Store = async(req, res, next) => {
    try {
        const {
            title,
            price,
            des
        } = req.body

        const product = new Product({
            title,
            price,
            des
        })

        await product.save()
        res.status(200).json({
            status:true,
            data:product,
            message: "data saved"
        })
    } catch (error) {
        if(error){
            console.log("error", error)
            next(error)
        }
    }
} 

//Show 
const Show = async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json({
            status:true,
            data: product,
            message:"single product list"
        })
    } catch (error) {
        if(error){
            console.log("error", error)
            next(error)
        } 
    }
}

//update 
const Update = async (req, res, next) => {
    try {
        const { id } = req.params
    const {
        title,
        des,
        price
    } = req.body

    await Product.findByIdAndUpdate(
        id,
        {
            $set:{
                title,
                des,
                price,
            }
        }
    )

    res.status(200).json({
        status:true,
        message: "updated successfully...!"
    })
    } catch (error) {
        if(error){
            console.log("error", error)
            next(error)
        } 
    }
}

const Destroy = async (req, res, next) => {
    try {
        const { id } = req.params
        await Product.findByIdAndDelete(id)

        res.status(200).json({
            status:true,
            message:"deleted successfully...!"
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
