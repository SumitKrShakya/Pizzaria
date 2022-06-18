const mongoose = require('mongoose')

let ordersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: "test@gmail.com",
    payemntMode: "cash on delivery",
    status: 'Shipped',
    // totalAmount:"246",
    items: [{
        type: 'pizza',
        name: 'Margherita',
        image: "url",
        size: 'small',
        price: '99',
        quantity: '1',
        discount: '50',
        tax: '6',
    }, {
        type: 'pizza',
        name: 'Margherita',
        image: "url",
        size: 'small',
        price: '99',
        quantity: '5',
        discount: '50',
        tax: '6',
    }],
    shippingAddress: {
        country: 'India',
        street1: 'D-2025 avantika',
        street2: 'Rohini',
        city: 'Delhi',
        zip: '110085'
    },
    trackingId: "sdfdsfdsaggegdsvd"
})

module.exports = mongoose.model('orders', ordersSchema)