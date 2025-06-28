const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    fullname,
    email,
    password,
    color,
    plate, 
    capacity,
    vehicleType,
    location = {
        latitude: null,
        longitude: null
    }
}) => {
    
    const captain = await captainModel.create({
        fullname,
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
            location
        }
    });

    return captain;
}





 