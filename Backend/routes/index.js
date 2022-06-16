const express = require('express')
const router = express.Router()
const path = require('path')
const apiKeyMiddleware = require('../middleware/apiKey')
const mongoose = require('mongoose')
const Test = require('../modules/test')


const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


router.get('/', (req, res) => {
    console.log('Requested on /')
    res.json([{
        id: "12321",
        name: "Chrome"
    }, {
        id: "23532.23",
        name: "Edge 11"
    }, {
        id: "23.1",
        name: "Firefox"
    }])
})

router.post('/user', jsonParser, function(req, res) {
    console.log(req.body)
    const data = new Test({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    data.save().then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => { console.warn(error) })
})

module.exports = router;