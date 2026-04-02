import React from "react";
import {Link}  from 'react-router-dom';
import modelx from '../assets/Model-X.jpg';
import modely from '../assets/Model-Y.jpg';
import modelS from '../assets/Model-S.jpg';
import model3 from '../assets/Model-3.jpg';
import cybertruck from '../assets/Cybertruck.jpg'
import roadster from '../assets/Roadster.jpg'

import modely1 from '../assets/ModelY1.jpg';
import modely2 from '../assets/ModelY2.jpg';
import modely3 from '../assets/ModelY3.jpg';

import models1 from '../assets/Model-S_1.jpg';
import models2 from '../assets/Model-S_2.jpg';
import models3 from '../assets/Model-S_3.jpg';

import model31 from '../assets/Model3_1.jpg';
import model32 from '../assets/Model3_2.jpg';
import model33 from '../assets/Model3_3.jpg';

import modelx1 from '../assets/Model-X_1.jpg';
import modelx2 from '../assets/Model-X_2.jpg';
import modelx3 from '../assets/Model-X_3.jpg';

import cybertruck1 from '../assets/Cybertruck_1.jpg'
import cybertruck2 from '../assets/Cybertruck_2.jpg'
import cybertruck3 from '../assets/Cybertruck_3.jpg'

import roadster1 from '../assets/Roadster_1.jpg'
import roadster2 from '../assets/Roadster_2.jpg'
import roadster3 from '../assets/Roadster_3.jpg'

export const models = [
  {
    id: 1,
    name: "Model S",
    desc: "Plaid • Beyond Ludicrous",
    images:[modelS,models1,models2,models3]
  },
  {
    id: 2,
    name: "Model 3",
    desc: "Electric for Everyone",
    images:[model3,model31,model32,model33]
  },
  {
    id: 3,
    name: "Model X",
    desc: "Utility • Performance",
    images: [modelx,modelx1,modelx2,modelx3]
  },
  {
    id: 4,
    name: "Model Y",
    desc: "Versatile • Spacious",
    images: [modely,modely1,modely2,modely3],
  },
  {
    id: 5,
    name: "CyberTruck",
    desc: "Versatile • Spacious",
    images: [cybertruck,cybertruck1,cybertruck2,cybertruck3],
  },
  {
    id: 6,
    name: "Roadster",
    desc: "Versatile • Spacious",
    images: [roadster,roadster1,roadster2,roadster3],
  },
];

function Models() {
  return (
    <div className="models-page">
      {models.map((car) => (
        <section
          key={car.id}
          className="model-section"
          style={{
            backgroundImage: car.images?.length
              ? `url(${car.images[0]})`
              : "none",}}
        >
          <div className="model-content">
            <h1>{car.name}</h1>
            <p>{car.desc}</p>
            <div className="model-buttons">
              <Link to={`/models/${car.id}`} className="details-btn">
              <button className="btn-dark">Book Your Car</button></Link>
              <button className="btn-light">Learn More</button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Models;
