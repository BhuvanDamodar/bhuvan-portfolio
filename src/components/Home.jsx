import React, { useState } from 'react';
import './styles/Home.css';
import myPicture from '../resources/photos/bhuvan_photo.png';

const Home = () => {
  const [showStory, setShowStory] = useState(false);

  const handleExploreClick = () => {
    setShowStory(!showStory);
  };

  return (
    <div id="home" className="home-container">
      <div className="home-image-container">
        <img src={myPicture} alt="Bhuvan" className="home-image" />
      </div>
      <div className="home-description">
        <h2>👋 Hello World! I’m Bhuvan, Your Friendly Tech Enthusiast.</h2>
        <p>
          I build digital dreams, one line of code at a time! From crafting seamless user experiences to engineering robust backends, I thrive on turning tech challenges into elegant solutions. Oh, and when I’m not coding, you might find me brewing ideas or coffee ☕ - sometimes both!
        </p>
        <button className="explore-button" onClick={handleExploreClick}>
          {showStory ? "Hide" : "More About Me"}
        </button>
        {showStory && (
          <div className="mini-bio-story">
            From Python-powered beginnings in college to mastering Java in professional projects, I’ve always found joy in solving problems - fast and efficiently. The excitement? I thrive on transforming challenges into opportunities and seeing my ideas come to life 🚀. Beyond the code, I love creating professional setups ⚙️ for my projects - a process that feels as satisfying as nailing the perfect solution. Approachable and curious, I enjoy connecting with people🤝, sharing ideas💡, and exploring creative ways to tackle challenges while learning something new every step of the way!
          </div>
        )}


        <div className="button-container">
          <button
            className="connect-button"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let’s Connect!
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
