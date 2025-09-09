
const ambulanceModel = require('../models/ambulance.model');


module.exports.createAmbulance = async ({
    firstname, lastname, email, password, plate, vehicleType
}) => {
    if (!firstname || !email || !password || !plate || !vehicleType) {
        throw new Error('All fields are required');
    }
    const ambulance = ambulanceModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            plate,
            vehicleType
        }
    })

    return ambulance;
}
