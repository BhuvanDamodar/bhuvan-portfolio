import React from "react";
import "./styles/Skills.css";

const skillsData = [
  { skill: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg", level: 90 },
  { skill: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg", level: 85 },
  { skill: "REST APIs", icon: "https://img.icons8.com/?size=100&id=21888&format=png&color=000000", level: 90 }, 
  { skill: "Spring Framework", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/spring.svg", level: 85 },
  { skill: "JWT", icon: "https://cdn.jsdelivr.net/npm/simple-icons@14.5.0/icons/springsecurity.svg", level: 85 }, 
  { skill: "Debugging", icon: "https://img.icons8.com/?size=100&id=nYG0srphf7zy&format=png&color=000000", level: 90 }, 
  { skill: "Apache Kafka", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachekafka.svg", level: 80 },
  { skill: "Microsoft SQL Server", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftsqlserver.svg", level: 85 },
  { skill: "DevOps", icon: "https://img.icons8.com/?size=100&id=9VkgHjEOTadU&format=png&color=000000", level: 75 },
  { skill: "CI/CD", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/githubactions.svg", level: 75 },
  { skill: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg", level: 80 },
  { skill: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg", level: 80 },
  { skill: "ExpressJS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg", level: 80 },
  { skill: "ReactJS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg", level: 80 },
  { skill: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg", level: 75 },
  { skill: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg", level: 95 }, 
  { skill: "Agile Methodologies", icon: "https://img.icons8.com/ios/50/sprint-iteration.png", level: 80 }, 
  { skill: "Communication", icon: "https://img.icons8.com/?size=100&id=54385&format=png&color=000000", level: 90 }, 
  { skill: "Machine Learning", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/tensorflow.svg", level: 70 },
  { skill: "Convolutional Neural Networks", icon: "https://img.icons8.com/?size=100&id=61864&format=png&color=000000", level: 70 }, 
  { skill: "Image Processing", icon: "https://img.icons8.com/?size=100&id=mEdT3H1rX7sc&format=png&color=000000", level: 70 }, 
  { skill: "Datadog", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/datadog.svg", level: 75 },
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
                <img src={skill.icon || "https://via.placeholder.com/48"} alt={`${skill.skill} icon`} className="skill-icon" />
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
