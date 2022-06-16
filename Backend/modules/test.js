const mongoose = require('mongoose')

let testSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    address: String,
    email: String
});

module.exports = mongoose.model('test', testSchema);