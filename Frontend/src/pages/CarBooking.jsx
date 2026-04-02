import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CarBooking() {
  const { id } = useParams();
  const navigate = useNavigate();

  // State for booking form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "cod",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/booking/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          modelId: id, // sending selected car id too
        }),
      });

      if (response.ok) {
        alert("✅ Booking confirmed! Our team will contact you soon.");
        navigate("/booking-confirm");
      } else {
        alert("❌ Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Server error. Check backend is running.");
    }
  };

  return (
    <div className="car-booking-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>

      <h1>Car Booking Details</h1>
      <form className="booking-form" onSubmit={handleBooking}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required /><br />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required /><br />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required /><br />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required /><br />
        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required /><br />

        <h3>Booking Details</h3>
        <p>Model ID: {id}</p>

        <label>
          <input type="radio" name="payment" value="cod" checked readOnly /> Cash on Delivery
        </label>

        <button type="submit" className="place-booking-btn">Confirm Booking</button>
      </form>
    </div>
  );
}

export default CarBooking;
