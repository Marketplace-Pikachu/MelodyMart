const express = require('express');
const productController = require('../controllers/productController.js');
const productRouter = express.Router();

productRouter.get('/', productController.getProduct, (req, res) => {
    console.log(res.locals.products);
    return res.status(200).json(res.locals.products);
    
});

module.exports = { 
    productRouter: productRouter
};