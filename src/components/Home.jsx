import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Bhuvan</h2>
        <p className="about-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </section>
  );
};

export default Home;
