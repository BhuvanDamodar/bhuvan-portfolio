import React from 'react';
import './styles/Home.css';
import myPicture from '../resources/photos/bhuvan-photo.png';

const Home = () => {
  return (
    <div id='home' className="home-container">
      <div className="home-image-container">
        <img src={myPicture} alt="Bhuvan" className="home-image" />
      </div>
      <div className="home-description">
        <h2>Hi, I’m Bhuvan!</h2>
        <h1>Crafting Digital Experiences as a Senior Software Developer</h1>
        <p>
        I’m a Senior Software Developer with deep expertise in Java, data-driven approaches, and modern web technologies such as React and JavaScript. With a strong command of Apache Kafka, I specialize in building scalable, real-time systems that process and manage large volumes of data efficiently. I am passionate about solving complex problems, designing intuitive and seamless user experiences, and delivering robust, high-performing software solutions. My work is driven by a commitment to innovation, utilizing cutting-edge technologies to create impactful applications that meet real-world challenges. Collaboration and adaptability are at the core of my approach, ensuring that I thrive in fast-paced, dynamic environments. Whether it's architecting backend systems, optimizing front-end performance, or integrating data pipelines, I aim to deliver solutions that are not only functional but transformative. I continuously seek opportunities to grow and evolve, staying ahead of trends to create software that empowers users and businesses alike.
        </p>
      </div>
    </div>
  );
};

export default Home;
