import React, { useState, useEffect, useRef } from 'react';
import './styles/Projects.css';
import image1 from '../resources/photos/proj1.jpeg';
import image2 from '../resources/photos/proj2.jpeg';
import image3 from '../resources/photos/proj3.jpeg';

const projectsData = [
  {
    name: 'Histopathologic Multi-Organ Cancer Detection in Lymph Node Tissues',
    description:
      'A CNN-based solution for accurate lymph node metastases detection in cancer diagnostics.',
    image: image1,
    category: 'Machine Learning',
    bulletPoints: [
      'Developed a cutting-edge machine learning model to detect metastases in lymph node tissues using histopathologic images.',
      'Created a robust preprocessing pipeline including data cleaning, normalization, and augmentation to handle a dataset of 198,022 images.',
      'Designed and implemented a Convolutional Neural Network (CNN) architecture achieving high accuracy (AUC in ROC: 0.94) for real-time cancer classification.',
      'Focused on scalability and precision, enabling the model to address practical challenges in medical imaging applications.',
    ],
  },
  {
    name: 'UserGoals MERN Web Application',
    description:
      'A MERN stack web app for securely managing and tracking user-defined goals.',
    image: image2,
    category: 'Web Development',
    bulletPoints: [
      'Developed a full-stack MERN application called "UserGoals" for managing user-defined goals.',
      'Implemented secure authentication and authorization using JSON Web Tokens (JWT).',
      'Built a responsive front-end with React and a RESTful API powered by Node.js and Express.js.',
      'Enabled users to securely create, update, and track their goals with a seamless user experience.',
      'Showcased expertise in modern web development practices and building secure, scalable full-stack applications.',
    ],
    githubLink: 'https://github.com/BhuvanDamodar/mernapp-userGoals-project',
  },
  {
    name: 'Crime Management System',
    description:
      'A Java-PHP-based system for efficient crime reporting and case management.',
    image: image3,
    category: 'Web Development',
    bulletPoints: [
      'Built a Crime Management System using Java, PHP, MySQL, Xampp Server, and JDBC.',
      'Streamlined crime reporting and case management with a user-friendly interface for law enforcement agencies.',
      'Enabled real-time updates on cases and tracking of crime statistics.',
      'Designed an optimized database structure for efficient data retrieval and secure management',
      'Ensured seamless front-end and back-end interaction through JDBC integration.',
    ],
  },
];

const categories = ['All', 'Machine Learning', 'Web Development'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const modalRef = useRef(null);

  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  );

  const handleMoreInfoClick = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="projects-section">
      <div className={`projects-container ${isModalOpen ? 'blur-background' : ''}`}>
        <h2 className="section-title">Projects</h2>
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <button onClick={() => handleMoreInfoClick(project)}>
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && currentProject && (
        <div className="projects-modal">
          <div className="projects-modal-content" ref={modalRef}>
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{currentProject.name}</h2>
            <p className="projects-modal-description">{currentProject.description}</p>
            <ul className="projects-modal-bullet-points">
              {currentProject.bulletPoints.map((point, index) => (
                <li className="projects-modal-list" key={index}>{point}</li>
              ))}
            </ul>
            {currentProject.githubLink && (
              <a
                href={currentProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
