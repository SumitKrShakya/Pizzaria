const express = require('express')
const path = require('path')
const app = express();
const mainRouter = require('./routes/index')
const mongoose = require('mongoose')

// wwHuhemWi4eOpebW
// pizzadatabase
// mongodb+srv://pizzadatabase:wwHuhemWi4eOpebW@cluster0.lhtgd.mongodb.net/database?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://pizzadatabase:wwHuhemWi4eOpebW@cluster0.lhtgd.mongodb.net/database?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.warn("MongoDB Connected") })


app.use(express.static('public'))
app.use(mainRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`))