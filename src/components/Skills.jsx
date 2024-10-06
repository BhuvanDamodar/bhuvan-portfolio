import React from 'react';
import './styles/Skills.css';

const skillsData = [
  { skill: 'Kafka', level: '90%' },
  { skill: 'JavaScript', level: '85%' },
  { skill: 'React', level: '80%' },
  { skill: 'Node.js', level: '75%' },
  { skill: 'Python', level: '70%' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <h3 className="skill-name">{skill.skill}</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
