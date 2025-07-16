const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/rating.controller");

// Submit a rating
router.post("/", ratingController.createRating);

// Get all ratings for a driver
router.get("/driver/:driverId", ratingController.getRatingsForDriver);

// Get rating for a specific ride
router.get("/ride/:rideId", ratingController.getRatingForRide);

module.exports = router;
