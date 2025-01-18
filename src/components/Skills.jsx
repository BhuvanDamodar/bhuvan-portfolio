import React from "react";
import "./styles/Skills.css";

const skillsData = [
  { skill: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg", level: 80 },
  { skill: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg", level: 85 },
  { skill: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg", level: 75 },
  { skill: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg", level: 90 },
  { skill: "ReactJS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg", level: 95 },
  { skill: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg", level: 70 },
  { skill: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg", level: 85 },
  { skill: "DevOps", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/azuredevops.svg", level: 80 },
  { skill: "Spring Framework", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/spring.svg", level: 85 },
  { skill: "Apache Kafka", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachekafka.svg", level: 75 },
  { skill: "Microsoft SQL Server", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftsqlserver.svg", level: 85 },
  { skill: "ExpressJS", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg", level: 85 },
  { skill: "Debugging", icon: "", level: 80 }, // Custom icon can be added
  { skill: "CI/CD", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/githubactions.svg", level: 75 },
  { skill: "Scrum", icon: "", level: 70 }, // Custom icon can be added
  { skill: "Communication", icon: "", level: 90 }, // Custom icon can be added
  { skill: "JWT", icon: "", level: 75 }, // Custom icon can be added
  { skill: "REST APIs", icon: "", level: 85 }, // Custom icon can be added
  { skill: "Machine Learning", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/tensorflow.svg", level: 70 },
  { skill: "Convolutional Neural Networks", icon: "", level: 70 }, // Custom icon can be added
  { skill: "Image Processing", icon: "", level: 70 }, // Custom icon can be added
  { skill: "Datadog", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/datadog.svg", level: 75 },
  { skill: "Agile Methodologies", icon: "", level: 80 }, // Custom icon can be added
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
