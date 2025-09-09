const ambulanceController = require('../controllers/ambulance.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.vehicleType').isIn([ 'ambulance' ]).withMessage('Invalid vehicle type')
],
    ambulanceController.registerAmbulance
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    ambulanceController.loginAmbulance
)


router.get('/profile', authMiddleware.authAmbulance, ambulanceController.getAmbulanceProfile)

router.get('/logout', authMiddleware.authAmbulance, ambulanceController.logoutAmbulance)


module.exports = router;