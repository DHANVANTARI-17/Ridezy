const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blackListedTokenModel = require('../models/blacklistToken.model');


module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
        return res.status(400).json({ error: 'Captain already exists' });
    }

    const hashedPassword = await captainModel.hashPassword(password);
    
    const captain = await captainService.createCaptain({
        fullname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
        location: {
            latitude: vehicle.location.latitude,
            longitude: vehicle.location.longitude
        }
    });

    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    res.status(200).json({ token, captain });
};  

module.exports.getCaptain = async (req, res, next) => {
    // Always use req.captain, which is set by authCaptain middleware
    const captain = req.captain;
    if (!captain) {
        return res.status(404).json({ message: "Captain not found" });
    }
    res.status(200).json({ captain });
};

module.exports.updateCaptain = async (req, res, next) => {
    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const captain = req.captain;
    if (!captain) {
        return res.status(404).json({ message: "Captain not found" });
    }
    captain.fullname = fullname;
    captain.email = email;
    captain.password = password;
    captain.vehicle = vehicle;
    await captain.save();
    res.status(200).json({ captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    await blackListedTokenModel.create({ token });
    // Clear the cookie
    res.clearCookie('token');
    res.status(200).json({ message: "Logged out successfully" });
};