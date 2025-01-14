import React from 'react';
import './styles/Experience.css';
import hm from '../resources/photos/hm.png';
import shiash from '../resources/photos/shiash.jpeg';
import sparks from '../resources/photos/sparks.png';

const experiences = [
  {
    position: 'Senior Software Engineer',
    company: 'Happiest Minds Technologies',
    duration: 'August 2022 - Present',
    description: 'Leading the development of scalable web applications using React and Node.js, focusing on performance and user experience.',
    image: hm
  },
  {
    position: 'Software Engineer Intern',
    company: 'Shiash Info Solutions Private Limited',
    duration: 'August 2021 - December 2021',
    description: 'Designed and maintained client-side applications leveraging Angular and TypeScript, optimizing workflows for business solutions.',
    image: shiash
  },
  {
    position: 'Data Science Intern',
    company: 'The Sparks Foundation',
    duration: 'November 2020 - December 2020',
    description: 'Contributed to the development of e-commerce platforms using PHP and MySQL, improving data handling efficiency.',
    image: sparks
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              <div className="timeline-icon">
                <img src={exp.image} alt={`${exp.position} icon`} className="timeline-image" />
              </div>
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
