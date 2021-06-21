require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')


const app = express()

const PORT = process.env.PORT

// Atlas Database Connection
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then((result) => {
    app.listen(PORT, console.log('Listening to product service at port '+PORT))
})
.catch((err) => console.log(err));

// Routes
app.use(productRoutes)




// app.get('/product/:id/cart',(req,res) => {
//     res.send(req.params.id)
// })