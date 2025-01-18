import React,{useState} from 'react';
import { Link } from 'react-scroll';
import './styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1><Link to = "home" smooth={true} duration={500}>BHUVAN.</Link></h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* side menu */}
        <ul className={`nav-links ${menuOpen ? 'open': ''}`}>
          <li className="close-btn" onClick={closeMenu}>✕</li>
          <li>
            <Link className="link" onClick={closeMenu} to="home" smooth={true} duration={500}>
              <button>Home</button>
            </Link>
          </li>
          <li>
          <Link className="link" onClick={closeMenu} to="projects" smooth={true} duration={500}>
              <button>Projects</button>            
          </Link>
          </li>
          <li>
          <Link className="link" onClick={closeMenu} to="experience" smooth={true} duration={500}>
              <button>Experience</button>
            </Link>
          </li>
          <li>
          <Link className="link" onClick={closeMenu} to="education" smooth={true} duration={500}>
              <button>Education</button>
          </Link>
          </li>
          <li>
          <Link className="link" onClick={closeMenu} to="skills" smooth={true} duration={500}>
              <button>Skills</button>          
          </Link>
          </li>
          <li>
          <Link className="link" onClick={closeMenu} to="contact" smooth={true} duration={500}>
              <button>Contact</button>           
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
