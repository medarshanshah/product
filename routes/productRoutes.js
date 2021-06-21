const { Router } = require('express')
const productController = require('../controller/productController')

const productRouter = Router()

/**
 * @swagger
 * /product:
 *  get:
 *      summary: Request to get all the products
 *      tags: [product]
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Bad Request. Error in Retrieving products
 */
productRouter.get('/product',productController.all_product_list)

/**
 * @swagger
 * /product/{id}:
 *  get:
 *      summary: Request to get the products by id
 *      tags: [product]
 *      parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: The product id (Check with 60cf4690536e177c1f44d6ef)
 *      responses:
 *          '200':
 *              description: A successful response. Received the product by given id
 *          '400':
 *              description: Bad Request Error in Retrieving product
 */
productRouter.get('/product/:id',productController.getProductById)

/**
 * @swagger
 * /search:
 *  get:
 *      summary: Request to search for the products
 *      tags: [product]
 *      responses:
 *          '200':
 *              description: The product search was successful
 *          '400':
 *              description: Bad Request. Error in Retrieving products
 */
productRouter.get('/search', productController.searchProducts)

//categories
/**
 * @swagger
 * /category:
 *  get:
 *      summary: Request to get the categories of the products
 *      tags: [category]
 *      responses:
 *          '200':
 *              description: An array of all the categories of products
 *          '400':
 *              description: Bad Request. Error in getting categories
 */
productRouter.get('/category', productController.get_categories)

/**
 * @swagger
 * /category/{name}:
 *  get:
 *      summary: Request to get the products on the basis of category name
 *      tags: [category]
 *      parameters:
 *            - in: path
 *              name: name
 *              schema:
 *                  type: string
 *              required: true
 *              description: The category name (Check with books, jewelery, electronics, men's clothing and women's clothing)
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Bad Request. Error in getting products by category
 */
productRouter.get('/category/:name', productController.get_productsByCategory)

module.exports = productRouter