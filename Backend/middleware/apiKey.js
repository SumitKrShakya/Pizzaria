function apiKey(req, res, next) {
    // const key = "123"
    // const userApiKey = req.query.api_key;
    // if (key && key === userApiKey) {
    //     next()
    // } else {
    //     res.send("wrong key")
    // }
    next()

}


module.exports = apiKey;