// src/pages/Store.jsx
import React from "react";
import { Link } from "react-router-dom";
import tshirt from '../assets/t-shirt.jpeg'
import wallconnector from '../assets/wall_connecter.jpeg';
import cap from '../assets/cap.jpeg';
import hoodie from '../assets/hoodie.jpeg';
import diecar from '../assets/model_3_diecast.jpeg';

export const products = [
  {
    id: 1,
    name: "Tesla T-Shirt",
    price: "$35",
    img: tshirt,
    description: "Soft cotton T-shirt with Tesla branding.",
  },
  {
    id: 2,
    name: "Tesla Hoodie",
    price: "$65",
    img: hoodie,
    description: "Premium hoodie for all-day comfort.",
  },
  {
    id: 3,
    name: "Model 3 Diecast",
    price: "$250",
    img: diecar,
    description: "1:18 scale diecast model of Tesla Model 3.",
  },
  {
    id: 4,
    name: "Wall Connector",
    price: "$475",
    img: wallconnector,
    description: "Fast charging wall connector for Tesla vehicles.",
  },
  {
    id: 5,
    name: "Tesla Cap",
    price: "$25",
    img: cap,
    description: "Classic Tesla cap with embroidered logo.",
  },
];

function Store() {
  return (
    <section className="store-page">
      <div className="store-header">
        <h1>Tesla Store</h1>
        <p>Shop apparel, accessories, and charging products.</p>
      </div>

      <div className="store-grid">
        {products.map((product) => (
          <div className="store-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            {/* Redirect to Product Detail Page */}
            <Link to={`/product/${product.id}`} className="detail-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Store;
