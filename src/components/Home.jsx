import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './styles/Home.css';
import myPicture from '../resources/photos/bhuvan_photo.png';

const Home = () => {
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
        <p className="hero-greeting">👋 Hi, I'm Bhuvan.</p>
        <h1>
          Software Engineer building{' '}
          <span className="highlight-text">Backend, ML &amp; GenAI</span> Systems
        </h1>
        <p className="hero-intro">
          M.Sc. Computer Science student at the University of Stuttgart with 3+ years
          of professional software engineering experience across backend systems,
          automation and applied AI. Currently working at Mercedes-Benz on
          machine-learning methods for engineering simulation.
        </p>
        <p className="hero-personal">
          I enjoy turning complex engineering problems into reliable software 
          and occasionally into side projects that get a little out of hand.
        </p>
        <div className="hero-actions">
          <Link to="projects" smooth={true} duration={500} offset={-100}>
            <motion.button
              className="hero-cta-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.button>
          </Link>
          <a
            href="/Bhuvan_Damodar_Anand_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <motion.button
              className="hero-cta-secondary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.button>
          </a>
        </div>
        <div className="hero-meta-row">
          <span>3+ Years Software Engineering</span>
          <span className="hero-meta-sep" aria-hidden="true">|</span>
          <span>Applied ML @ Mercedes-Benz</span>
          <span className="hero-meta-sep" aria-hidden="true">|</span>
          <span>M.Sc. @ University of Stuttgart</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
