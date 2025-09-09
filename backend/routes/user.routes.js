const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const patientController = require('../controllers/user.controller'); // Rename user.controller to patient.controller if needed
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    patientController.registerPatient
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    patientController.loginPatient
)

router.get('/profile', authMiddleware.authUser, patientController.getUserProfile)

router.get('/logout', authMiddleware.authUser, patientController.logoutUser)



module.exports = router;