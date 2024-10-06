import React,{useState} from 'react';
import { Link } from 'react-scroll';
import './styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>BHUVAN.</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* side menu */}
        <ul className={`nav-links ${menuOpen ? 'open': ''}`}>
          <li>
            <button><Link to="about" smooth={true} duration={500}>
              About
            </Link></button>
          </li>
          <li>
          <button><Link to="projects" smooth={true} duration={500}>
              Projects
            </Link></button>
          </li>
          <li>
          <button><Link to="experience" smooth={true} duration={500}>
              Experience
            </Link></button>
          </li>
          <li>
          <button><Link to="education" smooth={true} duration={500}>
              Education
            </Link></button>
          </li>
          <li>
          <button><Link to="skills" smooth={true} duration={500}>
              Skills
            </Link></button>
          </li>
          <li>
          <button><Link to="contact" smooth={true} duration={500}>
              Contact
            </Link></button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
