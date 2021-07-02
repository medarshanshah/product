require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const productRoutes = require('./routes/productRoutes')


const app = express()
const PORT = process.env.PORT

//Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Product API',
            version: '1.0.0',
            description: 'Product Microservice',
            contact: {
                name: "Darshan"
            },
            servers: ['http://localhost:4000']
        }

    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))


// Atlas Database Connection
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })

// Routes
app.use(productRoutes)


app.listen(PORT, console.log('Listening to product service at port '+PORT))

// app.get('/product/:id/cart',(req,res) => {
//     res.send(req.params.id)
// })

module.exports = app