import axios from "axios";

export const loadRazorpayScript = (src) =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

export const openRazorpayCheckout = async (fareAmount) => {
  const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/payment/create-order`, {
    amount: fareAmount,
  });

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Add this in your frontend .env
    amount: data.amount,
    currency: data.currency,
    name: "Uber Clone",
    description: "Ride Payment",
    order_id: data.orderId,
    handler: function (response) {
      alert("Payment Successful!");
      console.log("Razorpay payment success:", response);
      // Optionally: verify payment on backend here
    },
    theme: {
      color: "#1DBF73",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
