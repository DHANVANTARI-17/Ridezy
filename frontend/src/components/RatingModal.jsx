import React, { useState } from "react";
import axios from "axios";

const RatingModal = ({ rideId, driverId, userId, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/ratings`, {
        rideId,
        driverId,
        userId,
        rating,
        comment,
      });

      onClose();
    } catch (err) {
      console.error("Rating submission failed:", err);
      alert("Failed to submit rating");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-xl"
      >
        <h2 className="text-xl font-semibold mb-4">Rate Your Ride</h2>

        <div className="flex gap-1 text-yellow-500 text-2xl mb-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`cursor-pointer ${rating >= num ? "text-yellow-500" : "text-gray-300"}`}
              onClick={() => setRating(num)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="3"
          placeholder="Leave a comment (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded"
            disabled={rating === 0}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RatingModal;
