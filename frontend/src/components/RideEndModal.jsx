import React from "react";
import { openRazorpayCheckout } from "../utils/payment";

const RideEndModal = () => {
  const handlePayment = async () => {
    try {
      await openRazorpayCheckout(200);
    } catch (err) {
      console.error("Error in payment", err);
      alert("Payment failed");
    }
  };

  return (
    <div className="ride-end-modal">
      <h2>Ride Completed</h2>
      <p>Total Fare: ₹{200}</p>
      <button onClick={handlePayment}>Pay Now</button>
      <button>Cancel</button>
    </div>
  );
};

export default RideEndModal;
