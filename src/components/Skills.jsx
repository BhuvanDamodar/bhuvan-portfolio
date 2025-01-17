import React from "react";
import "./styles/Skills.css";

const skillsData = [
  { skill: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg", level: 80 },
  { skill: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg", level: 85 },
  { skill: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg", level: 75 },
  { skill: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg", level: 90 },
  { skill: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg", level: 95 },
  { skill: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg", level: 70 },
  { skill: "HTML", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg", level: 90 },
  { skill: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon-card">
                <img src={skill.icon} alt={`${skill.skill} icon`} className="skill-icon" />
              </div>
              <h3 className="skill-name">{skill.skill}</h3>
              <p className="skill-level">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
