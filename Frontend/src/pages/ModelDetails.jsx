// src/pages/ModelDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {models} from './Models'

function ModelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const model = models.find((m) => m.id === parseInt(id));

  if (!model) {
    return <h2>Model not found 😔</h2>;
  }

  return (
    <div className="model-detail-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>

      <div className="model-detail">
        <img src={model.images[0]} alt={model.name} className="model-img" />
        <div className="model-info">
          <h1>{model.name}</h1>
          <p>{model.desc}</p>
          <button className="book-btn" onClick={() => navigate(`/book/${model.id}`)}>
            Book Your Car
          </button>
        </div>
      </div>
      {/* Extra gallery section */}
      <div className="model-gallery">
        {model.images.map((img, i) => (
          <img key={i} src={img} alt={`${model.name} ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ModelDetails;
