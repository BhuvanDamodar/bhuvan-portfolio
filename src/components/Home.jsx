import React, { useState } from 'react';
import './styles/Home.css';
import myPicture from '../resources/photos/bhuvan-photo.png';

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
          I build digital dreams, one line of code at a time! From crafting seamless user experiences to engineering robust backends, I thrive on turning tech challenges into elegant solutions. Oh, and when I’m not coding, you might find me brewing ideas or coffee ☕—sometimes both!
        </p>
        <button className="explore-button" onClick={handleExploreClick}>
          {showStory ? "Hide My Story" : "Click to Explore"}
        </button>
        {showStory && (
          <div className="mini-bio-story">
            From Python-powered 🐍 beginnings in college to mastering Java ☕ in professional projects, I’ve always found joy in solving problems—fast and efficiently. The suspense? My journey recently took a surprising turn as I packed my bags 🧳 and set course for Germany 🇩🇪 to pursue a master’s degree! Beyond the code, I love creating professional setups ⚙️ for my projects—a process that feels as satisfying as seeing a perfect deployment 🚀. Approachable and curious, I enjoy connecting with people 🤝, sharing ideas 💡, and discovering creative ways to tackle challenges.
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
