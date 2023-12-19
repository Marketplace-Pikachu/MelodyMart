const client = require('../models/productModel.js');

const productController = {
    async getProduct(req, res, next) {
        try {
            const selectQuery = 'SELECT * FROM Product';

            const result = await client.query(selectQuery);

            if (result.rows.length === 0) {
                return next({
                  status: 404,
                  error: 'Product not found.',
                });
            }

            console.log(result.rows);
            res.locals.products = result.rows;
            return next();

        } catch (error) {
            return next({
                status: 500,
                error: error.message,
            });
        }
    }
}

module.exports = productController;