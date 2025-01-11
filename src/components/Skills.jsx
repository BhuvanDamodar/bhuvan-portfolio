import React from 'react';
import './styles/Skills.css';

const skillsData = [
  { skill: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg' },
  { skill: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg' },
  { skill: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg' },
  { skill: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg' },
  { skill: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg' },
  { skill: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg' },
  { skill: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg' },
  { skill: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={`${skill.skill} icon`} className="skill-icon" />
              <h3 className="skill-name">{skill.skill}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;