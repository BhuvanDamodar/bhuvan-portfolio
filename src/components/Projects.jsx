import React from 'react';
import './styles/Projects.css';

const projectsData = [
  {
    name: 'Histopathologic Multi-Organ Cancer Detection in Lymph Node Tissues',
    description: 'Developed a cutting-edge machine learning model to detect metastases in lymph node tissues using histopathologic images, addressing the growing need for faster and more accurate cancer diagnostics. This project included the creation of a robust preprocessing pipeline (data cleaning, normalization, and augmentation) to handle a massive dataset of 198,022 images. Designed and implemented a convolutional neural network (CNN) architecture that achieved a high accuracy rate (AUC in ROC: 0.94), enabling real-time classification of cancerous tissues. The solution demonstrates scalability and precision, significantly contributing to the field of medical imaging and cancer research.'
  },
  {
    name: 'UserGoals MERN Application',
    description: 'Developed a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application called "UserGoals" to manage user-defined goals with secure authentication using JSON Web Tokens (JWT). The application features a responsive front-end built with React and a RESTful API powered by Node.js and Express.js, ensuring fast and reliable communication. Designed robust authentication and authorization mechanisms, allowing users to securely create, update, and track their goals. This project showcases expertise in modern web development practices and implementing secure full-stack applications.'
  },
  {
    name: 'Crime Management System',
    description: 'Built a comprehensive Crime Management System using Java, PHP, MySQL, Xampp Server, and JDBC to streamline crime reporting and case management processes. This project aimed to provide an efficient and user-friendly interface for law enforcement agencies, facilitating real-time updates on cases, crime statistics tracking, and secure data management. Designed an intuitive database structure for optimized data retrieval and ensured seamless interaction between the front-end and back-end systems through JDBC integration.'
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
