const express = require('express');
const productController = require('../controllers/productController.js');
const productRouter = express.Router();

productRouter.get('/', productController.getProduct, (req, res) => {
    return res.status(200).json(res.locals.products);
    
});

productRouter.post('/', productController.addProduct, (req, res) => {
    return res.status(200).json(res.locals.result);
});

productRouter.delete('/:product_id', productController.deleteProduct, (req, res) => {
    return res.status(200).json(res.locals.result);
})

module.exports = { 
    productRouter: productRouter
};