// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tshirt from '../assets/t-shirt.jpeg';
import wallconnector from '../assets/wall_connecter.jpeg';
import cap from '../assets/cap.jpeg';
import hoodie from '../assets/hoodie.jpeg';
import diecar from '../assets/model_3_diecast.jpeg';
import {products} from './Store'

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found 😔</h2>;
  }

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      <img src={product.img} alt={product.name} className="detail-img" />
      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <button className="buy-btn" onClick={() => navigate(`/buy/${product.id}`)} >Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetail;
