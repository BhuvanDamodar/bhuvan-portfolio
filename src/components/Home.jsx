import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './styles/Home.css';
import myPicture from '../resources/photos/bhuvan_photo.png';

const Home = () => {
  const [showStory, setShowStory] = useState(false);

  const handleExploreClick = () => {
    setShowStory(!showStory);
  };

  return (
    <div id="home" className="home-container">
      <motion.div
        className="home-image-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={myPicture} alt="Bhuvan" className="home-image" />
      </motion.div>
      <motion.div
        className="home-description"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>👋 Hello World! I’m <span className="highlight-text">Bhuvan</span>, Your Friendly Tech Enthusiast.</h2>
        <p>
          I build digital dreams, one line of code at a time! From crafting seamless user experiences to engineering robust backends, I thrive on turning tech challenges into elegant solutions. Oh, and when I’m not coding, you might find me brewing ideas or coffee ☕ - sometimes both!
        </p>
        <motion.button
          className="explore-button"
          onClick={handleExploreClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showStory ? "Hide" : "More About Me"}
        </motion.button>
        {showStory && (
          <div className="mini-bio-story">
            From Python-powered beginnings in college to mastering Java in professional projects, I’ve always found joy in solving problems - fast and efficiently. The excitement? I thrive on transforming challenges into opportunities and seeing my ideas come to life 🚀. Beyond the code, I love creating professional setups ⚙️ for my projects - a process that feels as satisfying as nailing the perfect solution. Approachable and curious, I enjoy connecting with people🤝, sharing ideas💡, and exploring creative ways to tackle challenges while learning something new every step of the way!
          </div>
        )}
        <div className="button-container">
          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              className="connect-button"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
            >
              Let’s Connect!
            </motion.button>
          </Link>
        </div>

      </motion.div>
    </div>
  );
};

export default Home;
