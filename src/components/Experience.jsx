import React from 'react';
import './styles/Experience.css';

const experiences = [
  {
    position: 'Senior Software Engineer',
    company: 'Happiest Minds Technologies',
    duration: 'August 2022 - Present',
    description: 'Working on various web development projects using React and Node.js.'
  },
  {
    position: 'Software Engineer Intern',
    company: 'Shiash Info Solutions Private Limited',
    duration: 'August 2021 - December 2021',
    description: 'Developed and maintained client-side applications with Angular and TypeScript.'
  },
  {
    position: 'Data Science Intern',
    company: 'The Sparks Foundation',
    duration: 'November 2020 - December 2020',
    description: 'Assisted in developing e-commerce platforms using PHP and MySQL.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3 className="position">{exp.position}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
