import React, { useState } from 'react';
import './styles/Projects.css';

const projectsData = [
  {
    name: 'Histopathologic Multi-Organ Cancer Detection in Lymph Node Tissues',
    description:
      'Developed a cutting-edge machine learning model to detect metastases in lymph node tissues using histopathologic images, addressing the growing need for faster and more accurate cancer diagnostics.',
    image: '/path/to/image1.jpg',
    category: 'Machine Learning',
  },
  {
    name: 'UserGoals MERN Application',
    description:
      'Developed a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application called "UserGoals" to manage user-defined goals with secure authentication using JSON Web Tokens (JWT).',
    image: '/path/to/image2.jpg',
    category: 'Web Development',
  },
  {
    name: 'Crime Management System',
    description:
      'Built a comprehensive Crime Management System using Java, PHP, MySQL, Xampp Server, and JDBC to streamline crime reporting and case management processes.',
    image: '/path/to/image3.jpg',
    category: 'Web Development',
  },
];

const categories = ['All', 'Machine Learning', 'Web Development'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${
                selectedCategory === category ? 'active' : ''
              }`}
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
