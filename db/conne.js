const {MongoClient} = require('mongodb')

const uri = "mongodb://localhost:27017/aulamongo"

const client = new MongoClient(uri)

async function run(){
    try{
       await client.connect()
        console.log("conectou ao mongoDb")
    }catch(err){
        console.log(err)
    }
}

run()

module.exports = client