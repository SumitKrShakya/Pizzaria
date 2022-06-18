const mongoose = require('mongoose')

let productsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    name: String,
    image: String,
    description: String,
    discount: Number,
    time: Number,
    vegetarian: Boolean,
    size: [{
        name: String,
        price: Number,
        quantity: Number
    }, {
        name: String,
        price: Number,
        quantity: Number
    }, {
        name: String,
        price: Number,
        quantity: Number
    }]
})

module.exports = mongoose.model('products', productsSchema)