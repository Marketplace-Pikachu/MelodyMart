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
    },

    async addProduct(req, res, next) {
        try {
            const {
                description,
                price,
                category,
                sold,
                seller,
                product_user_id
            } = req.body;

            const insertQuery = `INSERT INTO Product (Description, Price, Category, Sold, Seller, product_user_id) VALUES ($1, $2, $3, $4, $5, $6)`;
            const insertParams = [
                description, 
                price, 
                category, 
                sold,
                seller,
                product_user_id
            ];

            const result = await client.query(insertQuery, insertParams);
            res.locals.result = result; 
            return next();
        } catch (error) {
            return next({
                status: 500,
                error: error,
            });
        }
    },

    async deleteProduct(req, res, next) {
        try {
        } catch (error) {
            
        }
    },

    async deleteProduct(req, res, next) {
        try {
            const productId = req.params.product_id; // Assuming the product_id is in the URL parameters
    
            // Check if productId is valid (optional step)
            if (!productId) {
                return next({
                    status: 400,
                    error: "Invalid product_id",
                });
            }
    
            const deleteQuery = "DELETE FROM Product WHERE product_id = $1";
            const deleteParams = [productId];
    
            const result = await client.query(deleteQuery, deleteParams);
    
            if (result.rowCount === 0) {
                // If no rows were deleted, the product with the specified product_id was not found
                return next({
                    status: 404,
                    error: "Product not found",
                });
            }
    
            res.locals.result = result;
            return next();
        } catch (error) {
            return next({
                status: 500,
                error: error,
            });
        }
    }
}

module.exports = productController;