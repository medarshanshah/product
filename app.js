const express = require('express')
const mongoose = require('mongoose')

const app = express()


// Atlas Database Connection
const dbURI = 'mongodb+srv://user:n8wiS7i922SCiz6@cluster.hc0cw.mongodb.net/productsdb';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then((result) => app.listen(4000))
.catch((err) => console.log(err));


// Routes
app.get('/',(req,res) => res.send('Hello World from product service'))
app.get('/category',(req,res) => res.send('Hello World from category of product service'))
app.get('/category/:name',(req,res) => res.send(`Hello World from ${req.params.name} category of product service`))

// app.get('/product/:id',(req,res) => res.send(`Hello World from ${req.params.id} product of product service`))

app.get('/product/:id',(req,res) => {
    res.send(req.params.id)
})

// app.get('/product/:id/cart',(req,res) => {
//     res.send(req.params.id)
// })