const { Router } = require('express')
const productController = require('../controller/productController')

const productRouter = Router()

productRouter.get('/product',productController.all_product_list)
productRouter.get('/product/:id',productController.getProductById)
productRouter.get('/search', productController.searchProducts)

//categories
productRouter.get('/category', productController.get_categories)
productRouter.get('/category/:name', productController.get_productsByCategory)

module.exports = productRouter