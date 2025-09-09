const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');

async function getEstimatedArrival(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination locations are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);
    const estimatedTime = Math.round(distanceTime.duration.value / 60);

    return estimatedTime;
}

module.exports.getEstimatedArrival = getEstimatedArrival;

function getVerificationCode(num) {
    return crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
}

module.exports.createRide = async ({ user, pickup, destination, vehicleType }) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    const estimatedArrivalTime = await getEstimatedArrival(pickup, destination);

    if (estimatedArrivalTime > 30) {
        throw new Error('No ambulances available in your area');
    }
    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getVerificationCode(6),
        estimatedArrivalTime
    })

    return ride;        
};

module.exports.confirmRide = async ({ rideId, ambulance }) => {
    if (!rideId) {
        throw new Error('Ride ID is required');
    }

    await rideModel.findOneAndUpdate(
        { _id: rideId },
        {
            status: 'accepted',
            captain: ambulance._id, 
        }
    );

    const ride = await rideModel
        .findOne({ _id: rideId })
        .populate('user')
        .populate('captain')
        .select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride;
};

module.exports.startRide = async ({ rideId, verificationCode, ambulance }) => {
    if (!rideId || !verificationCode) {
        throw new Error('Ride ID and Patient Verification Code are required');
    }

    const ride = await rideModel
        .findOne({ _id: rideId })
        .populate('user')
        .populate('captain')
        .select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'accepted') {
        throw new Error('Ride not accepted');
    }

    if (ride.otp !== verificationCode) {
        throw new Error('Invalid Patient Verification Code');
    }

    await rideModel.findOneAndUpdate(
        { _id: rideId },
        { status: 'ongoing' }
    );

    return ride;
};

// End an ambulance ride
module.exports.endRide = async ({ rideId, ambulance }) => {
    if (!rideId) {
        throw new Error('Ride ID is required');
    }

    const ride = await rideModel
        .findOne({ _id: rideId, captain: ambulance._id })
        .populate('user')
        .populate('captain')
        .select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'ongoing') {
        throw new Error('Ride not ongoing');
    }

    await rideModel.findOneAndUpdate(
        { _id: rideId },
        { status: 'completed' }
    );

    return ride;
};