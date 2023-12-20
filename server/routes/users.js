const express = require('express');
const userController = require('../controllers/userController.js');
const userRouter = express.Router();

userRouter.post('/signup', userController.addUser, (req, res) => {
    return res.status(200).json({
        message: 'Sign up successful',
        user: res.locals.user
    });
});

userRouter.post('/login', userController.verifyUser, (req, res) => {
    return res.status(200).json({
        message: 'Login successful',
        user: res.locals.user
    });
});

module.exports = {
    userRouter: userRouter
}