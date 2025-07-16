const express = require("express");
const router = express.Router();
const controller = require("../controllers/payment.controller");

router.post("/create-order", controller.createOrder);

module.exports = router;
