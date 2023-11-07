const conne = require('../db/conne')
const {ObjectId} = require('mongodb')

class Product {
    constructor(name,image,price,description){
        this.name = name
        this.image = image
        this.price = price
        this.description = description
    }

    save(){
        const products = conne.db().collection('products').insertOne({
            name:this.name,
            image:this.image,
            price:this.price,
            description:this.description
        })
        return products
    }

    static getProducts(){
        const products = conne.db().collection('products').find().toArray()

        return products
    }

    static async getProductById(id){
        const product = await conne.db().collection('products').findOne({_id:new ObjectId(id)})

        return product
    }

    static async removeProductById(id){
        const product = await conne.db().collection('products').deleteOne({_id:new ObjectId(id)})
        return product
    }

    async edit(id){
        await conne.db().collection('products').updateOne({_id:new ObjectId(id)},{$set:this})
        
    }
}

module.exports = Product