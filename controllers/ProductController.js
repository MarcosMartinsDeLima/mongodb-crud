const product = require('../models/product')

module.exports = class ProductController{
    static async showproducts(req,resp){
        const products = await product.getProducts()

        resp.render('products/all',{products})
    }

    static createProduct(req,resp){
        resp.render('products/create')
    }

    static async createProductPost(req,resp){
        const {name,image,price,description} = req.body

        const products =  new product(name,image,price,description)

        await products.save()

        resp.redirect('/products')
    }

    static async getProduct(req,resp){
        const id = req.params.id

        const Product = await product.getProductById(id)

        resp.render('products/product',{Product})
    }

    static async removeProduct(req,resp){
        const id = req.params.id

        await product.removeProductById(id)

        resp.redirect('/products')
    }

    static async edit(req,resp){
        const id = req.params.id

        const products = await product.getProductById(id)

        resp.render('products/edit',{products})
    }

    static async editPost(req,resp){
        const id = req.body.id
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price 
        const description = req.body.description

        const Product = new product(name,image,price,description)

        await Product.edit(id)
        resp.redirect('/products')
    }
}