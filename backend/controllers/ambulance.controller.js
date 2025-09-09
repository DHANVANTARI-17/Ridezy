const ambulanceModel = require('../models/ambulance.model');
const ambulanceService = require('../services/ambulance.service');
const blackListTokenModel = require('../models/blackListToken.model');
const { validationResult } = require('express-validator');


module.exports.registerAmbulance = async (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    
    const isAmbulanceAlreadyExist = await ambulanceModel.findOne({ email });
    if (isAmbulanceAlreadyExist) {
        return res.status(400).json({ message: 'Ambulance already exist' });
    }

   

    const hashedPassword = await ambulanceModel.hashPassword(password);
    const ambulance = await ambulanceService.createAmbulance({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        plate: vehicle.plate,
        vehicleType: vehicle.vehicleType
    });

    const token = ambulance.generateAuthToken();

    res.status(201).json({ token, ambulance });

}

module.exports.loginAmbulance = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const ambulance = await ambulanceModel.findOne({ email }).select('+password');

    if (!ambulance) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await ambulance.comparePassword(password);


    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = ambulance.generateAuthToken();

    res.cookie('token', token);
    await ambulanceModel.updateOne({_id: ambulance._id}, { $set: {"status":"active"}});

    res.status(200).json({ token, ambulance });
}

module.exports.getAmbulanceProfile = async (req, res, next) => {
    res.status(200).json({ ambulance: req.ambulance });
}

module.exports.logoutAmbulance = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blackListTokenModel.create({ token });

    res.clearCookie('token');

    res.status(200).json({ message: 'Logout successfully' });
}