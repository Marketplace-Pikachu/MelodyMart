const client = require('../models/Model');
const bcyrpt = require('bcrypt');
const saltRounds = 10;

const userController = {
    async addUser(req, res, next) {
        try {
            const {
                username,
                password,
                funds,
            } = req.body;

            //check to see if profilePic uploaded
            const profilePicture = req.body.profilePicture || null;

            const hashedPassword = await bcyrpt.hash(password, saltRounds);

            const insertQuery = `INSERT INTO User (username, password, funds, profilePicture) VALUES ($1, $2, $3, $4) RETURNING user_id`;
            const insertParams = [
                username,
                hashedPassword,
                funds,
                profilePicture,
            ];

            const result = await client.query(insertQuery, insertParams);
            res.locals.userId = result.rows[0].user_id; 
            return next();
        } catch (error) {
            return next({
                status: 500,
                error: error,
            });
        }
    },

    async verifyUser(req, res, next) {
        try {
            const { username, password } = req.body;
            const selectQuery = `SELECT * FROM Users WHERE username = $1`;
            const result = await client.query(selectQuery, [username]);

            if (result.rows.length === 0) {
                return next ({
                    status: 401,
                    error: 'Authentication failed: User does not exist',
                });
            }

            const user = result.rows[0];
            const hashedPWFromDB = user.password;

            const isValid = await bcyrpt.compare(password, hashedPWFromDB);

            if (!isValid) {
                return next ({
                    status: 401,
                    error: 'Authentication failed: Incorrect password',
                });
            }

            res.locals.user = user;
            return next();
        } catch (error) {
            return next({
                status: 500,
                error: 'Error during authentication: ' + error.message,
            });
        }
    }
}

module.exports = userController;


