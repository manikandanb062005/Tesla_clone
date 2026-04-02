import React from "react";
function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1>About Tesla</h1>
        <p>Accelerating the World’s Transition to Sustainable Energy</p>
      </div>

      <div className="about-container">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Tesla’s mission is to create the most compelling car company of the
            21st century by driving the world’s transition to electric vehicles
            and clean energy.
          </p>
        </div>

        <div className="about-section">
          <h2>Innovation</h2>
          <p>
            From electric cars to solar energy and battery storage, Tesla is
            committed to delivering cutting-edge technology that makes the world
            cleaner and more sustainable.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world powered by renewable energy, where transportation
            is sustainable, autonomous, and accessible for all.
          </p>
        </div>

        <div className="about-section">
          <h2>Global Impact</h2>
          <p>
            With factories, charging networks, and renewable energy projects
            worldwide, Tesla continues to expand its mission across the globe.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
