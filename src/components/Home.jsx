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
            From Python-powered beginnings in college to designing sleek project setups, 
            I’ve always found joy in solving problems—fast and efficiently. The suspense? 
            My journey recently took a surprising turn as I packed my bags and set course 
            for Germany to pursue a master’s degree! When I’m not coding or setting up my 
            next project, you’ll probably find me dreaming up creative tech ideas or building 
            the perfect workspace. Approachable and curious, I love connecting with people as 
            much as I love debugging code!
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
