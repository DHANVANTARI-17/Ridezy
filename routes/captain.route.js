const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');
router.post('/register',[
    body('email').isEmail().withMessage("Invalid mail"),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min: 3}).withMessage("Last name should be at least 3 characters long"),
    body('password').isLength({min: 5}).withMessage('Password should be at least 5 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Vehicle type must be one of the following: car, bike, auto'),
    body('vehicle.location.latitude').isNumeric().withMessage('Latitude must be a number'),
    body('vehicle.location.longitude').isNumeric().withMessage('Longitude must be a number'),

],
 captainController.registerCaptain
)
module.exports = router;
router.post('/login',[
    body('email').isEmail().withMessage("Invalid mail"),
    body('password').isLength({min: 5}).withMessage('Password should be at least 5 characters long')    
],
 captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptain);
router.put('/profile', authMiddleware.authCaptain, captainController.updateCaptain);
router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);
module.exports = router;

