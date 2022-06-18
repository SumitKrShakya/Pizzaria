const mongoose = require('mongoose')

let productsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: 'pizza',
    name: 'Margherita',
    image: "url",
    description: 'Black Olives, Green Capsicum, Mushroom, Onion, Red Paprika, Sweet Corn',
    discount: '50',
    time: '20',
    vegetarian: true,
    size: [{
        name: 'small',
        price: '99',
        quantity: '100'
    }, {
        name: 'medium',
        price: '149',
        quantity: '50'
    }, {
        name: 'large',
        price: '199',
        quantity: '10'
    }]
})

module.exports = mongoose.model('products', productsSchema)