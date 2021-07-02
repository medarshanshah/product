const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const Product = require('../models/Product')


// Assertion style ... should
chai.should()
chai.use(chaiHttp)

describe('Product API', () => {
    /**
     * Test the GET Route
     */
    describe('GET LIST OF PRODUCTS', () => {
        it('It should get all the products from productsdb', () => {
            chai.request(app)
                .get('/product')
                .then(response => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                   // response.body.length.should.be.eq(3)
                })
                .catch(err => {
                    console.error(err);
                    throw err; // Re-throw the error if the test should fail when an error happens
                })
        })
    })

    describe('GET ONE SINGLE PRODUCT', () => {
        it('It should get individual product from productsdb', () => {
            let productId = "60cf4690536e177c1f44d6f4"
            chai.request(app)
                .get('/product/'+productId)
                .then(response => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                    response.body.length.should.be.eq(1)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should not get individual product from productsdb', () => {
            let productId = "54fg45f5g4536e177c5fg54"
            chai.request(app)
                .get('/product/'+productId)
                .then(response => {
                    response.should.have.status(400)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })
    })

    // // For SEARCHING PRODUCTS not implemented yet
    // describe('GET ONE SINGLE PRODUCT', () => {
    //     it('It should get all the products from productsdb', () => {
    //         let productId = "60cf4690536e177c1f44d6f4"
    //         chai.request(app)
    //             .get('/product/'+productId)
    //             .then(response => {
    //                 response.should.have.status(200)
    //                 response.body.should.be.a('array')
    //                // response.body.length.should.be.eq(3)
    //             .catch(err => {
    //                 console.error(err);
    //                 throw err; 
    //             });
    //             })
    //     })
    // })

    describe('GET ALL CATEGORIES OF PRODUCT', () => {
        it('It should get all the categories products from productsdb', () => {
            chai.request(app)
                .get('/category')
                .then(response => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                   // response.body.length.should.be.eq(3)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })
    })

    describe('GET PRODUCT BY CATEGORY WISE', () => {
        it('It should get all the products from books category', () => {
            let name = "books"
            chai.request(app)
                .get('/category/'+name)
                .then(response => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should get all the products from electronics category', () => {
            let name = "electronics"
            chai.request(app)
                .get('/category/'+name)
                .then(response => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should get all the products from jewelery category', () => {
            let name = "jewelery"
            chai.request(app)
                .get('/category/'+name)
                .then(response => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                })
                .catch(err => {
                    throw err; 
                });
        })

        it('It should get all the products from men clothing category', () => {
            let name = "men's clothing"
            chai.request(app)
                .get('/category/'+name)
                .then(response => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should get all the products from women clothing category', () => {
            let name = "women's clothing"
            chai.request(app)
                .get('/category/'+name)
                .then(response => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should get not get any product from this category', () => {
            let name = "groceries"
            chai.request(app)
                .get('/category/'+name)
                .then(response => {
                    response.should.have.status(400)
                    response.body.should.be.a('array')
                   // response.body.length.should.be.eq(3)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })
        
    })

})
