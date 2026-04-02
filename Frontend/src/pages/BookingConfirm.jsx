import React from "react";
import { useNavigate } from "react-router-dom";

function BookingConfirm() {
  const navigate = useNavigate();

  return (
    <div className="booking-confirm">
      <h1>🎉 Booking Confirmed!</h1>
      <p>Your car booking has been successfully placed. Our team will contact you soon.</p>
      <button onClick={() => navigate("/models")} className="back-to-models-btn">
        ← Back to Models
      </button>
    </div>
  );
}

export default BookingConfirm;
