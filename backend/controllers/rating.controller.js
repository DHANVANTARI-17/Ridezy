const Rating = require("../models/rating.model");

// POST /api/ratings
exports.createRating = async (req, res) => {
  try {
    const { rideId, driverId, userId, rating, comment } = req.body;

    if (!rideId || !driverId || !userId || !rating) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    const newRating = new Rating({
      rideId,
      driverId,
      userId,
      rating,
      comment,
    });

    const saved = await newRating.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error creating rating:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/ratings/driver/:driverId
exports.getRatingsForDriver = async (req, res) => {
  try {
    const ratings = await Rating.find({ driverId: req.params.driverId })
      .populate("userId", "name email") // Optional: show user info
      .sort({ createdAt: -1 });
    res.json(ratings);
  } catch (error) {
    console.error("Error fetching driver ratings:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/ratings/ride/:rideId
exports.getRatingForRide = async (req, res) => {
  try {
    const rating = await Rating.findOne({ rideId: req.params.rideId });
    if (!rating) return res.status(404).json({ message: "Rating not found" });
    res.json(rating);
  } catch (error) {
    console.error("Error fetching ride rating:", error);
    res.status(500).json({ message: "Server error" });
  }
};
