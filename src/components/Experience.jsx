import React from 'react';
import './styles/Experience.css';

const experiences = [
  {
    position: 'Senior Software Developer',
    company: 'Happiest Minds Technologies',
    duration: 'August 2022 - Present',
    description: 'Working on various web development projects using React and Node.js.'
  },
  {
    position: 'Software Developer',
    company: 'Tech Solutions Inc.',
    duration: 'June 2020 - July 2022',
    description: 'Developed and maintained client-side applications with Angular and TypeScript.'
  },
  {
    position: 'Junior Developer',
    company: 'Innovatech Labs',
    duration: 'January 2019 - May 2020',
    description: 'Assisted in developing e-commerce platforms using PHP and MySQL.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
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
