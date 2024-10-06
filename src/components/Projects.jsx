import React from 'react';
import './styles/Projects.css';

const projectsData = [
  {
    name: 'Project 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    name: 'Project 2',
    description: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'
  },
  {
    name: 'Project 3',
    description: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
