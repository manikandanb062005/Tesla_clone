import React from "react";
import { useNavigate } from "react-router-dom";

function OrderConfirm() {
  const navigate = useNavigate();

  return (
    <div className="order-confirm">
      <h1>✅ Order Confirmed!</h1>
      <p>Thank you for your purchase. Your order will be delivered soon via Cash on Delivery.</p>
      <button className="back-to-shop-btn" onClick={() => navigate("/shop")}>
        ← Back to Shop
      </button>
    </div>
  );
}

export default OrderConfirm;
