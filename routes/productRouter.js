const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/',ProductController.showproducts)
router.get('/create',ProductController.createProduct)
router.post('/create',ProductController.createProductPost)
router.get('/:id',ProductController.getProduct)
router.get('/edit/:id',ProductController.edit)
router.post('/edit',ProductController.editPost)
router.post('/remove/:id',ProductController.removeProduct)

module.exports = router