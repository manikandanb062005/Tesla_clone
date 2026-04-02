import React from "react";
import Selfdrive from '../assets/Autopilot.avif'
import Train from '../assets/train.jpeg'
import Battery from '../assets/battery.jpeg'
import Energy from '../assets/energy.webp'
const innovations = [
  {
    id: 1,
    title: "Electric Powertrain",
    desc: "Tesla’s electric powertrain delivers unmatched performance with instant torque, incredible range, and zero emissions.",
    img: Train,
  },
  {
    id: 2,
    title: "Autopilot & AI",
    desc: "Advanced driver assistance with Full Self-Driving capabilities powered by cutting-edge neural networks and AI.",
    img: Selfdrive,
  },
  {
    id: 3,
    title: "Battery Technology",
    desc: "World’s most efficient battery technology with long life, rapid charging, and sustainable manufacturing.",
    img: Battery,
  },
  {
    id: 4,
    title: "Energy Solutions",
    desc: "Solar panels, Powerwall, and energy storage systems enabling a future powered entirely by renewable energy.",
    img: Energy,
  },
];

function Innovation() {
  return (
    <section className="innovation-page">
      <div className="innovation-header">
        <h1>Innovation at Tesla</h1>
        <p>Driving the future with cutting-edge technology</p>
      </div>

      <div className="innovation-list">
        {innovations.map((item) => (
          <div key={item.id} className="innovation-card">
            <img src={item.img} alt={item.title} />
            <div className="innovation-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Innovation;
