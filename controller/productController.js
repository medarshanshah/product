const Product = require('../models/Product')

module.exports.all_product_list = async (req, res) => {
    try {
        const products_list =  await Product.find()
        res.status(200).json(products_list)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id
        const product = await Product.find({_id: productId })
        res.status(200).json(product)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports.getProductByName = async (req, res) => {
    try {
        const productName = req.params.name
        const product = await Product.find({name: productName })
        res.status(200).json(product)
    } catch (err) {
        res.status(400).send(err)
    }
}


// categories

module.exports.get_categories = async (req, res) => {
    try {
        const categories = await Product.distinct("category")
        res.status(200).json(categories)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports.get_productsByCategory = async(req, res) => {
    try {
        const category = req.params.name
        const productsByCategory = await Product.find({ category })
        res.status(200).json(productsByCategory)
    } catch (err) {
        res.status(400).send(err)
    }
}

// { category: "women's clothing"}
// { category: "men's clothing"}

// SEARCH
module.exports.searchProducts = async (req,res) => {
    
    // var response = [];
    // if (req.query) {
    //     console.log(req.query)
    //     response = await Product.find({ name: req.query.name })
    // }
    // res.json(response)


    const query = {}
    if (req.query.search) {
        query = {
            $text: {
                $search: req.query.search,
                // $options: i,
            }
        }
    }
    console.log(query)
    try {
        let products = await Product.find(query)
        res.json(products);

    } catch (error) {
        console.log(error)
        res.status(400).send('Error to get products')
    }
}