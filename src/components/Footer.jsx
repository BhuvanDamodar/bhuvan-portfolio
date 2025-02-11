import React from 'react';
import './styles/Footer.css';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-name">Bhuvan Damodar Anand</p>
          <p className="footer-contact">
            <FaEnvelope/> bhuvandamodar04@gmail.com
          </p>
          <ul className="footer-socials">
            <li><a href="https://www.linkedin.com/in/bhuvan-damodar-a-657b95179" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/BhuvanDamodar" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Bhuvan Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
