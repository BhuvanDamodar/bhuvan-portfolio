import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <p className="footer-name">Bhuvan Damodar</p>
          <p className="footer-contact">
            Phone: +91 8073064074 | Email: bhuvandamodar04@gmail.com
          </p>
          <ul className="footer-socials">
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
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
