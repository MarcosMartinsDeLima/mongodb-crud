const express = require('express')
const hbs = require('express-handlebars')
const app = express()

const conn = require('./db/conne')
const productRouter = require('./routes/productRouter')


app.engine('handlebars',hbs.engine())
app.set('view engine','handlebars')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

app.use('/products',productRouter)

app.listen(3000)