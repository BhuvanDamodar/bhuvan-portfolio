import React from 'react';
import './styles/Education.css';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Vidya Vardhaka College of Engineering',
    duration: '2018 - 2022',
  },
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Stuttgart',
    duration: '2025 - Present',
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationData.map((education, index) => (
            <div className="education-item" key={index}>
              <h3 className="education-degree">{education.degree}</h3>
              <p className="education-institution">
                {education.institution} | {education.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
