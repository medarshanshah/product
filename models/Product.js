const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:String,
    image:String,
    category:String,
    type:String,
    freeDelivery: Boolean
})

const Product = mongoose.model('product', productSchema);

module.exports = Product