const express = require('express')
const router = express.Router()
const path = require('path')
const apiKeyMiddleware = require('../middleware/apiKey')
const mongoose = require('mongoose')
const Test = require('../modules/test')


const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


router.get('/img', (req, res) => {
    console.log('Requested on /')
    res.json({
        id: "12321",
        name: "Chrome",
        image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
    })
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