const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/user.controller');

router.post('/register',
[
    body('email').isEmail().withMessage("Invalid mail"),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min: 3}).withMessage("Last name should be at least 3 characters long"),
    body('password').isLength({min: 5}).withMessage('Password should be at least 5 characters long')    
],
 userController.registerUser
)

module.exports = router;

router.post('/login',
[
    body('email').isEmail().withMessage("Invalid mail"),
    body('password').isLength({min: 5}).withMessage('Password should be at least 5 characters long')    
],
 userController.loginUser
)

module.exports = router;