const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

module.exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body; // amount in ₹
    const options = {
      amount: amount * 100, // ₹ to paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error("Payment creation error:", err);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
};
