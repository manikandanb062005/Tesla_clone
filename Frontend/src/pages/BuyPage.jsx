import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./Store";
import API_URL from "./config";



function BuyPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  // State for shipping details
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    payment: "cod",
  });

  if (!product) {
    return <h2>Product not found 😔</h2>;
  }

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/order/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productId: product.id,
          productName: product.name,
          productPrice: product.price,
        }),
      });

      if (response.ok) {
        alert(`✅ Your order for "${product.name}" has been placed!`);
        navigate(`/orderconfirm`);
      } else {
        alert("❌ Order failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Server error. Check backend.");
    }
  };

  return (
    <div className="buy-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <h1>Cash on Delivery Checkout</h1>

      <div className="checkout-container">
        {/* Product summary */}
        <div className="product-summary">
          <img src={product.img} alt={product.name} className="checkout-img" />
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
        </div>

        {/* Checkout form */}
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h3>Shipping Details</h3>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

          <h3>Payment Method</h3>
          <label>
            <input type="radio" name="payment" value="cod" checked readOnly /> Cash on Delivery
          </label>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default BuyPage;
